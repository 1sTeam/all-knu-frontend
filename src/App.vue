<template>
<v-app>
    <div class="total-wrapper">
        <header class="header-wrapper">
                <menu-bar />
        </header>
        <section class="body-wrapper">
            <article class="body-inner">
              <router-view />
            </article>
        </section>
        <div class="tab-bar">
            <router-link to="/"><span class="material-icons">home</span><a>홈</a></router-link>
                <router-link to="/notice/univ"><span class="material-icons">account_balance</span><a>공지사항</a></router-link>
                <router-link to="/"><span class="material-icons">map</span><a>지도</a></router-link>
                <router-link to="/"><span class="material-icons">schedule</span><a>시간표</a></router-link>
                <router-link to="/"><span class="material-icons">more_horiz</span><a>더보기</a></router-link>
        </div>
    </div>
</v-app>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
export default{
    data() {

        return {  


        }
    },
    components: {
        MenuBar,
    }
}
</script>

<style>
    .total-wrapper {
        display: grid;
        grid-template-rows: 65px 1fr;
    }
    .header-wrapper {
        background-color: red;
        width: 100%;
    }
    .body-wrapper {
        background-color: lightgray;
        min-height: 100vh;
        height: 100%;
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
    .tab-bar a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: black;
    }
    .tab-bar span {
        font-size: 3.5rem;
        opacity:0.3;
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
        .body-inner {
            width: 100%;
        }
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */

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