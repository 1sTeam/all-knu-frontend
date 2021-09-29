<template>
    <div class="total-wrapper">
        <div class="pc-footer-inner">
            <div class="wrapper">
                <div class="top-footer">
                    <div class="footer-top-left">
                        <div class="menu-list">
                            <router-link to="/notice/univ">공지사항</router-link>
                            <router-link to="/">학과공지</router-link>
                            <router-link to="/">시간표</router-link>
                            <router-link to="/">이러닝 캠퍼스</router-link>
                        </div>
                        <div class="menu-list">
                            <router-link to="/">성적 조회</router-link>
                            <router-link to="/">장학금 내역 조회</router-link>
                            <router-link to="/">등록금 납부 조회</router-link>
                            <router-link to="/">열람실 조회</router-link>
                            <router-link to="/">교직원 검색</router-link>
                        </div>
                        <div class="menu-list">
                            <router-link to="/">로그인</router-link>
                            <router-link to="/">알림</router-link>
                            <router-link to="/">설정</router-link>
                        </div>
                    </div>
                    <div class="footer-top-right">
                        <img height="300px" src="@/assets/img/ramb_3.png" />
                    </div>
                </div>
                <div class="bottem-footer">
                
                <div class="footer-title">
                    <span><a href="#">ALL-KNU</a></span>
                </div>
                <div class="footer-info">
                    <span>Copyright ⓒ2021 1sTeam. All right reserved.</span>
                </div>
            </div>
        </div>
        
        </div>
    </div>

</template>

<script>

export default{

    name : 'PcFooter',
    data() {

        return {  


        }
    }
}
</script>
<style scoped>
    .total-wrapper{
        height: 100%;
        background-color: #354076;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    }
    .pc-footer-inner {
        width: 1000px;
    }
    .wrapper {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        height: 100%;
        padding: 50px 0 0 0;
        
}
    .top-footer{
        height: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid white;
    }
    .footer-top-left{
        width: 600px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .footer-top-right {
        display: flex;
        flex-direction: column-reverse;
    }
    .menu-list{
        color:white;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transition: max-height .2s ease-in-out;

    }
    
    .menu-list a{
        font-size:14px;
        color:white;
        margin-bottom: 16px;
        text-decoration-line: none;
        
    }
    .bottem-footer{
        height: 300px;
        display: flex;
        flex-direction: column;
    }
    .footer-title a{
        text-decoration-line: none;
    }
    
    .footer-info{
        font-size: 12px;
        color: #bdbdbd;
        line-height: 1.5;
        font-weight: 700;
        
    }
    .footer-title span{
        font-size:28px;
        color:white;
    }

    @media only screen and(max-width:1024px) {  /* 테블릿 M일 때*/
        
        .menu-footer{
            display:none;
        }
    }
    @media only screen and(max-width:768px) {  /* 테블릿 S일 때*/
        
        .menu-footer{
            display:none;
        }
    }
    @media only screen and(max-width:479px) {  /* 모바일 일 때*/
        
        .menu-footer{
            display:none;
        }
    }



</style>