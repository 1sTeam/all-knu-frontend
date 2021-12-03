<template>
    <div>
        <main-template>
            <template slot="header"></template>
            <template slot="tab-bar"></template>
            <div class="body-wrapper">
              <div class="home-wrapper">
                <div class="home-header">
                  <div class="home-header-time"> <img src="@/assets/img/time-test.png" /></div>
                  <div class="home-header-my">
                      <div class="banner">
                        <div class="banner-calendar">
                          
                        </div>
                        <div class="banner-milage"><img src="@/assets/img/milage-test.png" /></div>
                      </div>
                  </div>
                </div>
                <div class="container-wrap">
                        <div class="container-notice">notice</div>
                        <div class="container-depart">depart</div>
                        
                            
                </div>
                
              </div>
            </div>
            
            <pc-footer>
            </pc-footer>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './MainTemplate.vue';
import PcFooter from './PcFooter.vue';
import Notice from './Notice.vue';
import Depart from './Depart.vue';
import TimeTable from './TimeTable.vue';



export default{
  components: { MainTemplate, PcFooter, Notice, Depart, TimeTable },

    name : "Home",
    data() {
        return {  


        }
    }
}
//450px
</script>
<style scoped>


.body-wrapper{
  background-color: lightblue;
  min-height: 100vh;
  height: 100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-wrapper{
  width:1000px;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  
  padding: 50px 0px;
  height: 100%;
  
}

.home-header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    

}
.home-header-time{
  height: 100%;
  background-color:aquamarine;
  display:flex;
  align-items: center;
}
.home-header-my{
    display:flex;
    align-items: center;
    height: 100%;
    
    

}
.banner{
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FF8C4B;
    box-shadow: 0px 7px 4px rgb(0,0,0,0.4);
    
    width:760px;
    height:250px;
    border-radius: 0px 10px 100px 0px;
}
.banner-calendar{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    
    width:100%;
    height:100%;
}
.banner-milage{
    margin-right: 100px;
    border-radius: 50%;
   
}
.container-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: violet;
    width:100%;
    height: 100%;
    padding:30px 0px;
}
.container-notice{
  border-radius: 10px;
  background-color:beige;
  width:100%;
  
}
.container-depart{
  border-radius: 10px;
  background-color:aliceblue;
  width:100%;
  
}

    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
      .body-inner {
        width: 700px;
      }
      .banner{
        width: 500px;
      }
      .total-wrapper{
        display:none;
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