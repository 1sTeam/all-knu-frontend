<template>
    <div>
        <main-template>
            <template slot="header">
            </template>
                <div id="naverMap" style="width:100%;height:100%;"/>
            <template slot="tab-bar">
            </template>
        </main-template>
    </div>
</template>
<script>
//기본 양식
import MainTemplate from './MainTemplate.vue';
export default{
  components: { MainTemplate },
    name : 'NaverMap',
    data() {
        return {  
        }
    },
    mounted() {
        //지도
        var mapOptions = {
                center: new naver.maps.LatLng(37.2762266,127.1327797), // 초기위치
                zoom: 17
            };

        var map = new naver.maps.Map("naverMap", mapOptions); // 지도 생성
        //
    },
}
</script>
<style scoped>
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
    }
</style>