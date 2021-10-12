<template>
<v-app>
    <div class="total-wrapper">
        <slot name="header">
            <header class="header-wrapper">
                    <menu-bar />
            </header>
        </slot>
        <slot></slot>
        <slot name="tab-bar">
            <div class="tab-bar">
                <router-link to="/"><span class="material-icons">home</span><span class="tab-bar-inner-txt">홈</span></router-link>
                    <router-link to="/notice/univ"><span class="material-icons">account_balance</span><span class="tab-bar-inner-txt">공지사항</span></router-link>
                    <router-link to="/"><span class="material-icons">map</span><span class="tab-bar-inner-txt">지도</span></router-link>
                    <router-link to="/"><span class="material-icons">schedule</span><span class="tab-bar-inner-txt">시간표</span></router-link>
                    <router-link to="/"><span class="material-icons">more_horiz</span><span class="tab-bar-inner-txt">더보기</span></router-link>
            </div>
        </slot>
    </div>
</v-app>
</template>

<script>
import MenuBar from './MenuBar.vue';
export default{
    name : 'mainTemplate', 
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
        z-index: 1;
    }
    
    .footer-wrapper {
        background-color: brown;
    }
    
    .tab-bar {
        display: none;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 70px;
        background-color: white;
        box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.3);
        z-index: 2;
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
        color: black;
    }
    .tab-bar .tab-bar-inner-txt {
        font-size: 1.2rem;
    }
    
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .total-wrapper {
            grid-template-rows: 60px 1fr;
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