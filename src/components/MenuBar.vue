<template>
<div class="menu-wrapper">
    <div class="menu-header">
            <div class="menu-button" id="left_btn" @click='toggle'>
                <span class="material-icons">menu</span>
            </div>
            <div class="menu-title">
                <span><router-link to="/">ALL-KNU</router-link></span>
            </div>
            <div class="main-menu"> 
                        <div><router-link to="/notice/univ">공지사항</router-link></div>
                        <div><router-link to="/notice/major">학과공지</router-link></div>
                        <div><router-link to="/map">지도</router-link></div>
                        <div><router-link to="/">시간표</router-link></div>
                        <div><router-link to="/">더보기</router-link></div>
            </div>
            <div class="main-side-menu">
                    <router-link to="to">
                        <div class="notice-btn-text">알람</div>
                        <div class="notice-btn-icon"><span class="material-icons">notifications</span></div>
                    </router-link>  
                    <router-link to="/login">
                        <div class="login-btn-text"><span>로그인</span></div>
                        <div class="login-btn-icon"><span class="material-icons">account_circle</span></div>
                    </router-link>
                    <router-link to="/setting">
                        <div class="setting-btn-icon"><span class="material-icons">settings</span></div>
                    </router-link>
            </div>
    </div>
    <div class="left-menu">
        
        <div class="left-inner-profil">
            <div class="close-btn">
                <a @click='toggle' class="material-icons">close</a>
            </div>
            
            <div class="img-profil">
                <img src="../assets/img/ramb_5.png">
            </div>
            
            <div class="student-profil">
                <div class="student-name"><span>김동하</span></div>
                <div class="student-profil-inner">
                    <div class="student-id"><span>20190000</span></div> / 
                    <div class="student-Department"><span>소프트웨어응용학부</span></div>
                </div>
            </div>
        </div>

        <div class="left-inner-menu">
            <a>성적조회</a>
            <hr>
            <a>장학금 내역 조회</a>
            <hr>
            <a>등록금 납부 조회</a>
            <hr>
            <a>열람실 조회</a>
            <hr>
            <a>교직원 검색</a>
            <hr>
            <a>학사 일정</a>
            <hr>
        </div>
    </div>
</div>
</template>


<script>
export default{

    name : 'menubar',   
    data() {
        return {  
            toggle: this.enter
        }

        
    },
    methods: {
        enter: function (el, done) {
            this.toggle = this.leave
            $('.left-menu').stop().animate({left: '0px'}, 400)
            $(".left-menu").toggleClass("emphasized");
            
            },
        leave: function (el, done) {
            this.toggle = this.enter
            $('.left-menu').stop().animate({left: '-300px'}, 400)
            $(".left-menu").toggleClass("emphasized");
        },

    }
            
}
</script>



<style>
    .emphasized {
    position:fixed;
    top:150px; left:30px;
    box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px;
    z-index : 100!important;
    
    }

    .menu-wrapper {
        width: 100%;
        position: fixed;
    }
    .left-menu {
        display: none;
        grid-template-rows: 220px 650px;
        height: 100%;
        width: 300px;
        position: fixed;
        top: 0;
        left: -300px;
        background-color: rgb(211, 211, 211);
        color: rgb(255, 255, 255);
        font-family: 'Noto Sans KR', sans-serif;
        
        
    }
    .left-inner-profil {
        display: grid;
        grid-template-rows: 30px 100px 70px;
        background-color: #576BCA;
        font-weight: bolder;
        height: 100%;
        
    }
    .close-btn a{
        display: flex;
        width: 50px;
        color: white !important;
        cursor: pointer;
        font-size: 30px;
        padding: 10px;
        position: absolute;
        right : 0px;
        
    }
    .profil-of-article{
        display: flex;
        width: 100%;
        flex-direction: column;
        
        
    }
    .img-profil{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-profil img{
        width: 100px;
        height: 100px;
        border: 1px solid #fafafa;
        border-radius: 100%;
        
    }
    .student-profil{
        display: grid;
        grid-template-rows: 40px 30px;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .student-profil span {
        font-size: 1.4rem;
    }
    .student-name {
        display: flex;
        justify-content: center;
    }

    .student-profil-inner{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .left-inner-menu{
        background-color: #354076;
        height: 100%;
        

    }
    .left-inner-menu a{
        color: white !important;
        font-size: 1.4rem;
        display: flex;
        padding: 12px;
        padding-left: 30px;
        padding-top: 15px;
        
    }
    .left-inner-menu hr{
        display: flex;
        position: absolute;
        right: 25px;
        width : 250px ;
        color : white;
    }

    .menu-header{
        display: flex;
        flex-direction: row;
        height : 65px;
        width : 100%;
        background-color: #576BCA;
    }
    .menu-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        cursor: pointer;
        
    }
    .menu-title a{
        text-decoration: none !important;
        color: white !important;
    }

    .main-menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    .main-menu a{
        color : white !important;
    }
    .menu-button{
        display: flex;
        color: white;
        font-size: 30px;
        align-items: center;
        padding: 20px;
        cursor: pointer;
        }
        .menu-title span{
        font-size: 28px;
        color: white;
    }


    .main-menu a{
        font-size: 1.4rem;
        text-decoration-line: none;
        color: white;
        margin-right: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
    .main-menu a:hover {
        font-weight: 600;
    }

    .main-side-menu{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 40%;
    }
    .main-side-menu div{
        font-size: 1.4rem;
        text-decoration-line: none;
        color: white;
        cursor: pointer;
    }
    .main-side-menu a:hover {
        font-weight: 600;
    }
    .main-side-menu span:hover {
        font-weight: 600;
    }
    .main-side-menu .notice-btn-icon {
        display: none;
    }
    .main-side-menu .login-btn-icon {
        display: none;
    }

    .left-menu{
        display: grid;
    }
    .slide {
        display: none;
    }


    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .menu-header{
            height : 60px;
        }   
        .menu-title{
            width: 100%;
            padding-left: 14% !important;
            cursor: pointer;
        }
        .main-menu{
            display: none;
        }
        .main-side-menu{
            width: 30%;
        }
        .main-side-menu a {
            text-decoration: none;
            text-decoration-line: none;
        }
        .main-side-menu .notice-btn-text {
            display: none;
        }
        .main-side-menu .login-btn-text {
            display: none;
        }
        .main-side-menu .notice-btn-icon {
            display: flex;
        }
        .main-side-menu .login-btn-icon {
            display: flex;
        }
        .main-side-menu .setting-btn-icon{
            padding-top: 5px;
        }

    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    .menu-title{
        padding-left: 0px;
        }

    .menu-title{
        padding-left: 10% !important;
        }
    .main-side-menu{
        width: 40%;
    }
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
    .main-side-menu span{
        font-size: 2rem;
        }
    }
</style>
