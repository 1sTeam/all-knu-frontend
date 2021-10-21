<template>
    <div>
        <div class="upbutton">
            <button onclick="window.scrollTo(0,0);">
                <span class="material-icons">arrow_upward</span>
            </button>
        </div>
    </div>
</template>

<script>
//기본 양식
export default{
    name : 'upbutton',
    data() {
        return {  
        }
    }
}
//450px
</script>
<style scoped>

.upbutton button:hover{
    background-color: #354076;
    opacity: 0.8;
    
}
.upbutton button{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #354076;
    border:none;
    box-shadow: 0px 5px 5px gray;
    position: fixed;
    bottom: 50px;
    right: 20px;
    cursor: pointer;
    border-radius: 70%;
    width: 60px;
    height: 60px;

}

.upbutton span{
    color:white;
    font-size: 33px;
    
}
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
    }
</style>