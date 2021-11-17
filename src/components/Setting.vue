<template>
    <div>
        <main-template>
            <template slot="header">
            </template>
            <main-container>
                <div class="setting-wrapper">
                    <div class="setting-header">
                        <div class="setting-title">
                            <span class="material-icons">settings</span><span>&nbsp;&nbsp;설정</span>
                        </div>
                    </div>
                    <div class="setting-body">
                        <div class="setting-save">
                            <span class="setting-index">알림 설정</span>
                            <v-btn color="mainColor" v-on:click="onClickSaveAlarm">저장</v-btn>
                        </div>
                        <div class="setting-Department">
                            <span class="setting-index">학과선택</span>
                            <v-col class="d-flex" cols="12" sm="6">
                            <v-select v-model="subscribeModel.major" :items="items" item-text="korean" item-value="value" return-object>
                            </v-select>
                            </v-col>
                        </div>

                        <div class="setting-subscribe">
                            <span class="setting-index-2">비교과 프로그램 구독</span>
                            <div class="switch">
                                <div class="switch-item">
                                    <span v-text="this.subscribeModel.department[0].korean"></span>
                                    <v-switch v-model="subscribeModel.department[0].isSubscribe" color="mainColor" hide-details></v-switch>
                                </div>
                                <div class="switch-item">
                                    <span v-text="this.subscribeModel.department[1].korean"></span>
                                    <v-switch v-model="subscribeModel.department[1].isSubscribe" color="mainColor" hide-details></v-switch>
                                </div>
                                <div class="switch-item">
                                    <span v-text="this.subscribeModel.department[2].korean"></span>
                                    <v-switch v-model="subscribeModel.department[2].isSubscribe" color="mainColor"  hide-details></v-switch>
                                </div>
                                <div class="switch-item">
                                    <span v-text="this.subscribeModel.department[3].korean"></span>
                                    <v-switch v-model="subscribeModel.department[3].isSubscribe" color="mainColor"  hide-details></v-switch>
                                </div>      
                            </div>
                        </div>


                        <div class="setting-inform">
                            <div class="setting-save">
                                <span class="setting-index">정보</span>
                            </div>
                            <a>로그아웃</a>
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
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import MainTemplate from './MainTemplate.vue';
import MainContainer from './MainContainer.vue';
import { getMessaging, getToken } from "firebase/messaging";
import axios from 'axios';

Vue.use(Vuetify);

export default{
    components: {MainTemplate, MainContainer},
    name : 'setting',
    data() {
        return {
        subscribeModel: {
            userFcmToken: null,
            //학과
            major: {
            },

            //부서
            department: [
                {korean: "교수학습지원센터", isSubscribe: false, value: "CTL"},
                {korean: "마음나눔센터", isSubscribe: false, value: "COUNSEL"},
                {korean: "진로취창업센터", isSubscribe: false, value: "CAREER"},
                {korean: "대외교류센터", isSubscribe: false, value: "GLOBAL"},
            ],
        },
        items: [
            {korean: 'ICT융합공학부', value: "SOFTWARE"},
            {korean: '사회복지학부', value: "WELFARE"},
            {korean: '실버산업학과', value: "SENIOR"},
            {korean: '유니버셜디자인전공', value: "UVD"},
            {korean: '미술문화복지전공', value: "VISUAL_ART"},
            {korean: '스포츠복지전공', value: "SPORT"},
            {korean: '기독교학과', value: "CHRISTIANITY"},
            {korean: '한영문화콘텐츠학과', value: "KOREA_CULTURE"},
            {korean: '국제지역학전공', value: "INTERNATIONAL_REGIONAL"},
            {korean: '중국지역학전공', value: "CHINA_REGIONAL"},
            {korean: '음악학과', value: "MUSIC"},
            {korean: '교육학과', value: "EDU"},
            {korean: '유아교육과', value: "CHILD_EDU"},
            {korean: '초.중등특수교육과', value: "SPECIAL_EDU"},
            {korean: '글로벌경영학부', value: "GLOBAL_BIZ"},
            {korean: '공공인재학과', value: "PUBLIC"},
            {korean: '정경학부', value: "TAX_ECONOMIC"},
            {korean: 'IOT전자공학과', value: "IOT"},
            {korean: '인공지능융합공학부', value: "INTELLIGENCE"},
            {korean: '부동산건설학부', value: "CONSTRUCTION"},
            ],
        }
    },
    mounted() {
        const messaging = getMessaging();
        getToken(messaging).then((currentToken) => {
        if (currentToken) {
            console.log(currentToken);
            this.userFcmToken = currentToken;
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
        }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
        });
        
        // 설정창이 처음 켜졌다면 로컬스토리지에서 기존 구독 정보, 선택학과 정보를 가져온다.
        const settings = JSON.parse(window.localStorage.getItem("settingInfo"));
        if(settings != null) {
            //해당 정보를 이용해 해당 비교과 부서는 이미 구독했다는 의미로 true로 바꿔준다. (this.subscribeModel.department.isSubscribe = true)
            settings.subscribeTypes.map(row => {
                this.subscribeModel.department.map(department => {
                    if(department.value === row) {
                        department.isSubscribe = true;
                    }
                });
            });
            //이미 나는 해당 학과를 선택했음을 알린다.(학과 선택란)
            this.subscribeModel.major = settings.major;
        }

    },
    methods:{
        onClickSaveAlarm() {
            const real = confirm("정말 구독 정보를 변경하시겠습니까?");
            if(real) {
                const subscribeType = [];
                if(this.subscribeModel.major.value != null) {
                    //학과 선택이 이루어짐
                    console.log("선택 학과 값" + this.subscribeModel.major.value);
                    console.log("선택 학과 이름" + this.subscribeModel.major.korean);
                    subscribeType.push(this.subscribeModel.major.value); // 학과 추가
                }
                this.subscribeModel.department.map(item => {
                    if(item.isSubscribe === true) {
                        subscribeType.push(item.value); // 부서 추가
                    }
                });
                console.log(subscribeType); // 최종 구독 리스트
                //사용자 fcm 토큰을 꺼내온다.
                if(this.userFcmToken != null) {
                    // 꺼내온 토큰과 구독리스트 변수를 이용해 api의 post body를 구성한다.
                    const body = {
                        token: this.userFcmToken, // fcm토큰
                        subscribeTypes: subscribeType
                    };
                    console.log(body);
                    //axios로 구독 api를 호출한다.
                    axios.post("https://all-knu-backend.accongbox.com/dev/fcm/subscribe", body).then(response => {
                        //구독에 성공했다면 추 후 그 정보를 설정창에 불러오기 위해 로컬 스토리지에 구독 리스트 정보를 저장한다.(mounted 주석 확인)
                        const settingInfo = { // 세팅정보
                            major: this.subscribeModel.major,
                            subscribeTypes: subscribeType
                        };
                        window.localStorage.setItem("settingInfo", JSON.stringify(settingInfo));
                        alert("구독 성공");
                    }).catch(error => {
                        console.error(error);
                        alert("구독 실패");
                    });
                } else {
                    alert("fcm 토큰을 불러오는데 실패했습니다. 알림허용 하셨나요?");
                }
                
            }
        },
    },

}
</script>

<style scoped>

.setting-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    
}
.setting-header {
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
}
.setting-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 25px;
    font-weight: 700;

}
.setting-body {
    padding: 20px;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 150px 230px 150px;
}
.setting-index{
    font-size: 17px;
    font-weight: 700;
}
.setting-index-2{
    font-size: 17px;
    font-weight: 700;
    padding-bottom: 25px;
}
.setting-save{
    display: flex;
    flex-direction: row;
    border-bottom: solid;
}
.setting-save span{
    display: flex;
    padding-top : 10px;
}
.setting-save button{
    font-size: 20px;
    margin-left: auto;
    color: white;
    
}
.setting-Department{
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center; 

}
.setting-subscribe{
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.switch-item{
    padding-left: 20px;
    display: flex;
    border-bottom: solid #DBDBDB 2px;
    font-size: 15px;
    font-weight: 600;
    align-items: center;
}
.switch-item div{
    transform: translate(-50%, -30%);
    margin-left: auto;
    align-items: center;
}


.setting-subscribe div div{
    display: flex;
    flex-direction: row;
    
}
.setting-inform{
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.setting-inform a{
    padding-left: 20px;
    font-size: 13px;
    color: crimson;
    font-weight: 600;
    padding-bottom: 10px ;

}
    @media only screen and (max-width: 600px) {  /* 테블릿 M일 때*/
.setting-Department{
    padding-top: 28px;
}
    }





    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/

    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */

    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
        .setting-title{

            font-size: 20px;

        }
    }
</style>