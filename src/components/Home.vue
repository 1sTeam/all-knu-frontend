<template>
    <div>
        <main-template>
            <template slot="header"></template>
            <template slot="tab-bar"></template>
            <main-container>
                <div class="home-header">
                    <div class="home-header-time"><img src="@/assets/img/time-test.png" /></div>
                        <div class="home-header-my">
                            <div class="banner">
                                <div class="banner-items">
                                    <button v-on:click="onSubmitForm" class="alam-button"></button>
                                    <button v-on:click="onSubmitForm" class="survey-button"></button>
                                    <button v-on:click="onSubmitForm" class="milage-button"></button>
                
                                </div>
                                <div class="banner-milage"><img src="@/assets/img/milage-test.png" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="container-wrap">
                        <div class="container-notice">notice</div>
                        <div class="container-depart">depart</div>
                        <div class="container-map">map</div>                                
                    </div>
                
            </main-container>
            <pc-footer>
            </pc-footer>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './MainTemplate.vue';
import MainContainer from './MainContainer.vue';
import PcFooter from './PcFooter.vue';


export default{
    components: { MainTemplate, MainContainer,PcFooter },

    name : 'home',
    data() {
        return {  


        }
    }
}
//450px
</script>
<style scoped>


.home-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:30px;
    background-color: #7EB4FB;
    width:100%;
    height: 50%;

}
.home-header-time{
    background-color:aquamarine;
}
.home-header-my{
    display:flex;
    align-items: center;
    

}
.banner{
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FF8C4B;
    box-shadow: 0px 7px 4px rgba(0,0,0,0.4);
    
    width:760px;
    height:247px;
    border-radius: 0px 10px 100px 0px;
}
.banner-items{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color:lightcoral;

}

.banner-milage{
    margin-right: 100px;
    
    border-radius: 50%;
    background-color: lightgray;
}
.container-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: violet;
    width:100%;
    height: 50%;
}
.container-notice{
    border-radius: 10px;
    background-color:#7EB4FB
}

.container-depart{
    border-radius: 10px;
    background-color:lightgreen;
}

.container-map{
    border-radius: 10px;
    background-color:red;
}
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .body-inner{
            width:900px;
        }
        
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
        .body-inner{
            width:100%;
        }
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */

    }
</style>