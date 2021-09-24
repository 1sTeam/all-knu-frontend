<template>
<div class="menu">
    <div class="menu-header">
            <div class="menu-button" id="left_btn" @click='toggle'>
                <span class="material-icons">menu</span>
            </div>
            <div class="menu-title">
                <span>ALL-KNU</span>
            </div>
            <div class="setting-button">
                <span class="material-icons">settings</span>
            </div>


            <div class="main-menu">
                        <div><a href="#">공지사항</a></div>
                        <div><a href="#">학과공지</a></div>
                        <div><a href="#">시간표</a></div>
                        <div><a href="#">더보기</a></div>
            </div>
            <div class="side-menu">
                    <div><a href="#">알림</a></div>
                    <div><a href="#">로그인</a></div>
                    <div><a href="#"><span class="material-icons">settings</span></a></div>
            </div>
    </div>
    <div class="left-menu">
        
        <div class="left-inner-profil">
            <div class="close-btn">
                <a @click='toggle' class="material-icons">close</a>
            </div>
            
            <div class="img-profil">
                <img src="../assets/img/람브 (5).png">
            </div>
            
            <div class="student-profil">
                <div class="student-name">김동하</div>
                <div class="student-profil-inner">
                    <div class="student-id">20190000</div> / 
                    <div class="student-Department">소프트웨어응용학부</div>
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
    html {
        font-size: 12px;
        
        font-family: 'Roboto', sans-serif;
        
    }
.emphasized {

position:fixed;

top:150px; left:30px;

box-shadow : rgba(0,0,0,0.5) 0 0 0 9999px, rgba(0,0,0,0.5) 2px 2px 3px 3px;

z-index : 100;

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
        color: white;
        font-family: 'Noto Sans KR', sans-serif;

        
    }
    .left-inner-profil {
        display: grid;
        grid-template-rows: 30px 100px 70px;
        background-color: #576BCA;
        font-weight: bolder;
        
    }
    .close-btn a{
        display: flex;
        width: 50px;
        color: white;
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

    }
    .left-inner-menu a{
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
        background-color: #354076;
    }
    .menu-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        cursor: pointer;
    }
    .menu-button{
        display: none;
    }
    .setting-button{
        display: none;
    }

    .main-menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        
        
    }
        .menu-title span{
        font-size: 28px;
        color: white;
    }

    .main-menu a{
        text-decoration-line: none;
        color: white;
        margin-right: 20px;
        margin-left: 20px;
        cursor: pointer;
    }
    .main-menu a:hover {
    font-weight: 600;
    }

    .side-menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        
    }
    .side-menu a{
        text-decoration-line: none;
        color: white;
        cursor: pointer;
    }
    .side-menu a:hover {
    font-weight: 600;
    }


    .slide {
        display: none;
    }

    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .left-menu{
            display: grid;
        }
        .menu-header{
        height : 60px;
        }

        .menu-button{
        display: flex;
        color: white;
        font-size: 30px;
        align-items: center;
        padding: 20px;
        cursor: pointer;
        }
        .menu-title{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        }
        .setting-button{
        display: flex;
        color: white;
        font-size: 30px;
        align-items: center;
        padding: 20px;
        cursor: pointer;
        }

        .main-menu{
            display: none;
        }
        .side-menu{
            display: none;
        }

    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */

    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
    }
</style>
