<template>
    <div>
        <main-template>
            <template slot="header"></template>
            <div class="login-wrapper">
                <div class= "login-box">
                    <div class="login-box-header">
                        <div class="login-logo">
                            <a href="/">
                            <img src="@/assets/img/ramb_13.png" />
                            </a>
                        </div>
                        <div class="login-title">지금 시작하세요 !</div>
                    </div>
                    <div class ="login-box-body">
                        <div class="ID-box">
                            <input placeholder="학번">
                        </div>
                        <div class="pwd-box">
                            <input placeholder="비밀번호">
                        </div>
                        <div class="login-button">로그인</div>
                    </div>
                </div>
            </div>
            
            <template slot="tab-bar"> 
            </template>
        </main-template>
    </div>
</template>

<script>
//기본 양식
import MainTemplate from './MainTemplate.vue';

export default{
components: { MainTemplate, },
    name : 'main',
    data() {
        return {  
        }
    }
}
//450px
</script>

<style scoped>
.login-wrapper{
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color:#576BCA ;
}

.login-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.login-box-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    align-items:flex-end;
    margin-bottom: 10px;
}

.login-logo img{
    height: 100px;
}
.login-title{
    
    color: white;
    font-size: 25px;
    padding: 0px 15px 15px 0px;
}
.login-box-body{
    background-color: white;
    display: flex;
    flex-direction: column;
    width:410px;
    height: 300px;
    padding: 0 20px 0 20px;
    border-radius: 5px;
    align-items: center;
    
}
.ID-box{
    
    color: black;
    font-size: 20px;
    width:100%;
    padding: 0 0 5px 5px;
    margin-top: 60px;
    border-bottom: 1px solid black;
    

}
.pwd-box{
    
    color: black;
    font-size: 20px;
    width:100%;
    padding: 0 0 5px 5px;
    margin-top: 60px;
    border-bottom: 1px solid black;
}
.login-button{
    background-color: #354076;
    color: white;
    font-size: 20px;
    width:100%;
    text-align: center;
    border-radius: 5px;
    padding: 10px 0 10px 0;
    margin-top: 35px;
    margin-bottom: 35px;
}

    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .login-title{
            font-size: 20px;
        }
        .ID-box{
            font-size:16px;

        }
        .pwd-box{
            font-size:16px;
        }
        .login-button{
            font-size:16px;
        }
        .login-box{
            justify-content: flex-start;
        }
    
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
        .login-title{
            font-size: 20px;
        }
        .ID-box{
            font-size:16px;

        }
        .pwd-box{
            font-size:16px;
        }
        .login-button{
            font-size:16px;
        }
        .login-box{
            justify-content: flex-start;
        }
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
        .login-title{
            font-size: 20px;
        }
        .ID-box{
            font-size:16px;

        }
        .pwd-box{
            font-size:16px;
        }
        .login-button{
            font-size:16px;
        }
        .login-box{
            justify-content: flex-start;
        }
    }
</style>