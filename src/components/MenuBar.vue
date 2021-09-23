<template>

    <div class="menu-header">
        
            <div class="menu-button">
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

</template>

<script>

export default{

    name : 'menubar',   
    data() {

        return {  


        }
    }
}
</script>

<style>
    html {
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        
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


    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        
        .menu-header{
        height : 60px;
        }

        .menu-button{
        display: flex;
        color: white;
        font-size: 30px;
        align-items: center;
        padding: 10px;
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
        padding: 10px;
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
