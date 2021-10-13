<template>
    <div>
        <main-template>
            <template slot="header">
            </template>
            <main-container>
                hello home!
            </main-container>
            <template slot="tab-bar">
            </template>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './MainTemplate.vue';
import MainContainer from './MainContainer.vue';

export default{
  components: { MainTemplate, MainContainer },

    name : 'home',
    data() {
        return {  


        }
    }
}
//450px
</script>
<style scoped>
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */

    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */

    }
</style>