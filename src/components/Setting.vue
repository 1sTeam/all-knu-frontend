<template>
<div class="setting-wrapper">
    <div class="setting-header">
        <div class="setting-title">
            <span class="material-icons">settings</span><span>&nbsp;&nbsp;설정</span>
        </div>
    </div>
    <div class="setting-body">
        <div class="setting-save">
            <span class="setting-index">알림 설정</span>
            <v-btn color="mainColor">저장</v-btn>
            
        </div>
        <div class="setting-Department">
            <span class="setting-index">학과선택</span>
            <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="items" item-text="value" item-value="value" return-object>
            </v-select>
            </v-col>
        </div>

        <div class="setting-subscribe">
            <span class="setting-index-2">비교과 프로그램 구독</span>
            <div class="switch">
                <div class="switch-item"><span>교수학습지원센터</span><v-switch  color="mainColor" value="교수학습지원센터" hide-details></v-switch></div>
                <div class="switch-item"><span>마음나눔센터</span><v-switch  color="mainColor" value="마음나눔센터" hide-details></v-switch></div>
                <div class="switch-item"><span>진로취창업센터</span><v-switch  color="mainColor" value="진로취창업센터" hide-details></v-switch></div>
                <div class="switch-item"><span>등등</span><v-switch  color="mainColor" value="등등" hide-details></v-switch></div>      
            </div>
        </div>


        <div class="setting-inform">
            <span class="setting-index-2">정보</span>
            <a>로그아웃</a>
        </div>
    </div>
</div>

</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default{

    name : 'setting',
    data() {
        return {
        items: [
            {value: '소프트웨어응용학부'},
            { value : '부동산건설학부'},
             {value:'사회복지학부'}],
        }
    },
    mounted() {
    
    },
    methods:{

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