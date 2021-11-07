<template>
    <div>
        <main-template>
            <template slot="header">
            </template>
            <main-container>
                <div class="grade-wrapper">
                    <div class="grade-header">
                        <div class="grade-title">
                            <span>&nbsp;&nbsp;성적조회</span>
                            <div class="period-select-wrap" >
                                <select name="period" v-model="periodSelected" @click="changePeriod()">
                                    <option disabled value="">년도, 학기를 선택해주세요</option>
                                    <option v-for="(i, index) in period.list" :key="index" :value="i">
                                        {{i.schl_year}}년도 - {{i.schl_smst}}학기
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="grade-body">
                        <div class="grade-detail-wrap" v-if="userState">
                            <span class="grade-index">상세내역</span>
                            <table>
                                <tr>
                                    <th width="40%">총 취득 학점</th>
                                    <td>{{this.totalDetail.total.totl_unit}}</td>
                                </tr>
                                <tr>
                                    <th>평균 학점</th>
                                    <td>{{this.totalDetail.total.totl_avrg}}</td>
                                </tr>
                                <tr>
                                    <th>해당 학기 취득 학점</th>
                                    <td>{{this.totalDetail.total.smst_unit}}</td>
                                </tr>
                                <tr>
                                    <th>해당 학기 평균 학점</th>
                                    <td>{{this.totalDetail.total.smst_avrg}}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="grade-detail-wrap" v-if="userState">
                            <span class="grade-index">취득학점 정보</span>
                            <table>
                                <tr>
                                    <th v-for="(i,index) in detailIndex" :key="index">
                                        {{i}}
                                    </th>
                                </tr>
                                <tr v-for="(i,index) in totalDetail.detail" :key="index">
                                    <td>{{i.fnsh_gubn}}</td>
                                    <td>{{i.subj_knam}}</td>
                                    <td>{{i.subj_unit}}</td>
                                    <td>{{i.cnvt_scor}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </main-container>
            <template slot="tab-bar">
            </template>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './MainTemplate.vue';
import MainContainer from './MainContainer.vue';

export default {
    components: {MainTemplate, MainContainer},
    data() {
        return { 
            userState : 1, //일단은 1로 둠, null로 표시해야함
            periodSelected : '',
            detailIndex : ['구분','과목명','학점','성적'],
            totalDetail :{
                total : {
                        "smst_unit":18,
                        "totl_unit":"89.0",
                        "smst_avrg":4.41,
                        "stnt_dept":"소프트웨어응용학부",
                        "totl_avrg":"3.64"
                },
                detail: [
                        {"fnsh_gubn":"균형","cnvt_scor":"A+","subj_knam":"창조적점토조형만들기","subj_unit":3}, 
                        {"fnsh_gubn":"전선","cnvt_scor":"A+","subj_knam":"UNIX서버","subj_unit":3}, 
                        {"fnsh_gubn":"전선","cnvt_scor":"A+","subj_knam":"알고리즘","subj_unit":3}, 
                        {"fnsh_gubn":"전선","cnvt_scor":"A+","subj_knam":"웹프로그래밍","subj_unit":3}, 
                        {"fnsh_gubn":"전선","cnvt_scor":"A+","subj_knam":"컴퓨터구조","subj_unit":3}, 
                        {"fnsh_gubn":"타전","cnvt_scor":"A","subj_knam":"윈도우즈프로그래밍","subj_unit":3}
                ],
            },
            period : {
                "id": "36a63eb2-1c7f-4820-9e56-412870c3566e",
                "dateTime": "2021-10-09T16:03:58.630+00:00",
                "status": 200,
                "message": "재학기간 조회 성공",
                "list": [{"schl_year":"2021","schl_smst":"1"}, {"schl_year":"2018","schl_smst":"2"}, {"schl_year":"2018","schl_smst":"1"}, {"schl_year":"2017","schl_smst":"2"}, {"schl_year":"2017","schl_smst":"1"}]
            },


        }
    },
    mounted() {
        const user = JSON.parse(window.localStorage.getItem("userInfo"));
        this.userState = user
        //user 정보가 있으면 userState에 값 넣어주기, userState가 있으면 상세내역과 취득학점 정보 표시가능 
        if(user == null) {
        //로그인이 안되어 있으므로 api 호출을 하지 않고 리다이렉트
            alert("로그인을 해야합니다");
            this.$router.push('/');
        }
        else if(user != null){
            axios.post(".../knu/period", this.userState.userCookies)
            .then(response => {
                this.period = response.data
            }).catch(error => {
				if(error.response.status === 403) {
					//쿠키 정보가 부정확함, api 호출 실패 리다이렉트
					alert("로그인 다시 해주세요");
					localStorage.removeItem("userInfo");
					this.$router.push('/');
				}
			});
        }

    },
    methods: {
        changePeriod() {
        console.log(this.periodSelected)
            if(this.periodSelected != null) {
                // 꺼내온 토큰과 구독리스트 변수를 이용해 api의 post body를 구성한다.
                const body = {
                    cookies : this.userState.userCookies, //쿠키정보
                    year: this.periodSelected.schl_year,
                    semester: this.periodSelected.schl_smst
                };
                console.log(body);
            //axios로 구독 api를 호출한다.
                axios.post(".../knu/grade", body)
                .then(response => {
                    this.totalDetail.total= response.data.list.total,
                    this.totalDetail.detail= response.data.list.detail
            }).catch(error => {
                if(error.response.status === 403) {
					//쿠키 정보가 부정확함, api 호출 실패 리다이렉트
                    alert("성적 조회 실패");
					localStorage.removeItem("userInfo");
					this.$router.push('/');
				}
            });
            }
            else {
                alert("성적 정보를 불러오는데 실패했습니다");
            }
        }
    },
}
</script>
<style>
.grade-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.grade-header {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: center;
}
.grade-title{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
}
.period-select-wrap{
    display: flex;
    margin-left: auto;
    margin-right: 4%;
    width: 250px;
    background: url(../assets/arrow_down_18dp.png) no-repeat 100% 60%;
    border:1px solid #BBBBBB;
}
select{
    display: flex;
    padding:5px 63px 5px 10px;
    font-size: 15px;
    box-sizing: border-box;
    -moz-appearance:none; /* Firefox */ 
    -webkit-appearance:none; /* Safari and Chrome */ 
    appearance:none;
}
select::-ms-expand {
    display: none;            /* 화살표 없애기 for IE10, 11*/
}
.grade-body {
    padding-left: 20px;
    display: grid;
    grid-template-rows: 230px 330px;
}
.grade-detail-wrap{
    padding: 10px;
    display: flex;
    flex-direction: column;
}
.grade-index{
    font-size: 15px;
    font-weight: 700;
    padding-bottom : 20px;
}
table{
    width: 96%;
    border: 1px solid #BBBBBB;
    border-collapse: collapse;
    text-align: center;
}
table td,th{
    padding: 10px;
    border: 1px solid #BBBBBB;
}
table th{

    background:  #E5E5E5;
}
.total-table{
    height: 500px;
}

    @media only screen and (max-width: 600px) {  /* 테블릿 M일 때*/
    }
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
        .grade-title{
            font-size: 17px;
        }
        .grade-index{
            font-size: 12px;
            font-weight: 700;
        }
        select{
            font-size: 12px;
            padding:5px 39px 5px 10px;
        }
        .period-select-wrap{
            width: 200px;
        }
    }
</style>