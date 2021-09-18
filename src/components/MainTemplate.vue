<template>

    <div class="total-wrapper">
        <header class="header-wrapper">
                <menu-bar />
        </header>
        <section class="body-wrapper">
            <article class="body-inner">
            </article>
        </section>
        <div class="tab-bar">
                <div><span class="material-icons">account_balance</span><span>공지사항</span></div>
                <div><span class="material-icons">assignment</span><span>학과공지</span></div>
                <div><span class="material-icons">schedule</span><span>시간표</span></div>
                <div><span class="material-icons">more_horiz</span><span>더보기</span></div>
        </div>
        <footer class="footer-wrapper">
            <div clas="pc-footer">

            </div>
        </footer>
    </div>

</template>

<script>
import MenuBar from './MenuBar.vue';
export default{
    data() {

        return {  


        }
    },
    components: {
        MenuBar
    }
}
</script>

<style>
    html {
        font-size: 10px;
    }
    .total-wrapper {
        display: grid;
        grid-template-rows: 65px 1fr 250px;
    }
    .header-wrapper {
        background-color: red;
        position: fixed;
        width: 100%;
    }
    .body-wrapper {
        background-color: blue;
        min-height: 100vh;
        height: 300vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer-wrapper {
        background-color: brown;
    }
    .body-inner {
        width: 1000px;
        height: 100%;
        background-color: white;
    }
    .tab-bar {
        display: none;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 70px;
        background-color: white;
        box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.3);
    }
    .tab-bar div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tab-bar div span {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .total-wrapper {
            grid-template-rows: 60px 1fr;
        }
        .body-inner {
            width: 700px;
        }
        .footer-wrapper {
            display: none;
        }
        .tab-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
         .total-wrapper {
            grid-template-rows: 60px 1fr;
        }
        .body-inner {
            width: 400px;
        }
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
        .body-inner {
            width: 100%;
        }
    }
</style>

<!--
const sizes:{[key:string]: number} = {
	mobile: 479,
	tabletS: 480,
	tabletM: 768,
	desktop: 1024
}

 -->