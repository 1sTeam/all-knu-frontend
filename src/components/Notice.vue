<template>
    <div>
        <main-template>
            <template slot="header">
            </template>
            <div class="up-button-wrapper">
                <scroll-to-top-button/>
            </div>
            <main-container>
                <transition name="slide">
                    <div class="iframe-wrapper" v-if="url" >
                        <div class="close-btn" @click="closeClick()" >
                            <span class="material-icons">close</span>
                        </div>
                        <NoticeInfo v-bind:url = "url"/>
                    </div>
                </transition>
                <div class="notice-wrapper" v-show="toggle">
                    <div class="notice-header">
                        <div class="notice-title">
                            <span class="material-icons">account_balance</span><span>&nbsp;&nbsp;공지사항</span>
                        </div>
                        <div class="notice-search">
                            <div>
                                <div class="search-box">
                                    <input placeholder="검색해주세요">
                                    <span class="material-icons">search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="notice-body">
                        <div class="notice-tabs">
                            <div><router-link to="/notice/univ">전체</router-link></div>
                            <div><router-link to="/notice/univ/ACADEMIC">학사</router-link></div>
                            <div><router-link to="/notice/univ/SCHOLARSHIP">장학</router-link></div>
                            <div><router-link to="/notice/univ/LEARNING">학습/상담</router-link></div>
                            <div><router-link to="/notice/univ/EMPLOY">취창업</router-link></div>
                        </div>
                    
                        <div class="notice-content" >
                            <div class="notice-item" v-for="(item,i) in noticeList" :key="i">
                                <div class="item-inner">
                                    <div v-text="item.number">367</div>
                                    <div v-text="item.title" @click="noticeClick(item.link)">공지사항 제목</div>
                                    <div v-text="item.writer">교무팀</div>
                                    <div v-text="item.date">2019.09.14</div>
                                    <div v-text="item.views">367</div>
                                </div>
                            </div>

                <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                        </div>
                    </div>
                </div>
            </main-container>
            <template slot="tab-bar">
            </template>
        </main-template>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';
import MainTemplate from './MainTemplate.vue';
import MainContainer from './MainContainer.vue';
import NoticeInfo from './NoticeInfo.vue';
import ScrollToTopButton from './ScrollToTopButton.vue';

export default{
    name : 'notice',
    data() {
        return {
            currentpage: 1,
            noticeList: [],
            type: "ALL",
            url:"",
            toggle: true
        }
    },
    mounted() {
        console.log("mounted");
        this.type = this.$route.params.type;
        axios.get("http://http://all-knu-alb-1415262832.ap-northeast-2.elb.amazonaws.com:8080/crawling/notice/univ/" + this.currentpage, {
            params: {
                type: this.type
            }
        }).then((response) => {
            console.log(response.data.list);
            const list = response.data.list;
            this.noticeList = list;
            this.currentpage++;
        }).catch((error) => {
        });  
    },
    methods:{
    closeClick(){
        this.url = !this.url
        this.toggle=!this.toggle
    },
    noticeClick(link){
        this.toggle=!this.toggle
        this.url= link
    },
    infiniteHandler($state) {
    setTimeout(() => {
        const temp = [];
        axios.get("http://http://all-knu-alb-1415262832.ap-northeast-2.elb.amazonaws.com:8080/crawling/notice/univ/" + this.currentpage, {
            params: {
                type: this.type
            }
        }).then((response) => {
            console.log(response.data.list);
            const list = response.data.list;
            //데이터의 끝인지 검사
            if(list.length !== 0) {
                list.map((item) => {
                    temp.push(item);
                });
                this.noticeList = this.noticeList.concat(temp);
                this.currentpage++;
            } else {
                //데이터의 끝
                $state.complete();
            }
        }).catch((error) => {
        });
        $state.loaded();
    }, 1000);
    },
    },
    watch: {
        '$route'() {
            console.log("change");
            this.currentpage = 1;
            this.type = this.$route.params.type;
            axios.get("http://http://all-knu-alb-1415262832.ap-northeast-2.elb.amazonaws.com:8080/crawling/notice/univ/" + this.currentpage, {
            params: {
                type: this.type
            }
            }).then((response) => {
                console.log(response.data.list);
                const list = response.data.list;
                this.noticeList = list;
                this.currentpage++;
            }).catch((error) => {
            });  
        }
    },
    
    components: {
    InfiniteLoading,
    MainContainer,
    MainTemplate,
    NoticeInfo,
    ScrollToTopButton,
    }
}
</script>

<style scoped>
.slide {
    transition: all 0.5s;
}
.slide-enter-active {
    transition: all 1s ease;
}
.slide-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-active {
    opacity: 0;
    transform: translateY(100%);
}
.close-btn{
    position: fixed;
    width: 1000px;
    font-size: 30px;
    color: black;
    padding: 5px;
    padding-left: 950px;
    background-color: white;
}
.notice-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.notice-header {
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.notice-body {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.notice-tabs{
    height: 50px ;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 16px;
    align-items: center;
    margin-bottom: 10px;
    
}
.notice-tabs div{
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    border-block-end: solid;
    border-block-end-color: #C4C4C4;
    writing-mode: horizontal-tb;
    margin-bottom: 8px;
    
}
.notice-tabs a{
    text-decoration-line: none;
    color: black;
}
.notice-content{
    height: 100%;
    font-size: 1.2rem;
}
.notice-item {
    height: 50px;
    padding: 0 30px 0 30px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.item-inner{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.item-inner div {
    display: flex;
    align-items: center;
}
.item-inner div:nth-child(1) {
    width: 100px;
}
.item-inner div:nth-child(2) {
    width:100%;
}.item-inner div:nth-child(3) {
    width: 150px;
    justify-content: center;
}
.item-inner div:nth-child(4) {
    width: 150px;
    justify-content: center;
}
.item-inner div:nth-child(5) {
    width: 100px;
    justify-content: center;
}
.notice-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
}
.notice-search{
    display: flex;
    height: 100%;
    flex-direction: row-reverse;
}
.notice-search div {
    display: flex;
    align-items: center;
}
.notice-search .search-box {
    border-radius: 5px;
    height: 30px;
    background-color: #F1F1F1;
    padding: 5px;
    width: 300px;
}
.search-box input {
    width: 100%;    
    padding: 0 0 0 10px;
    font-size: 1.2rem;
    border-right-width: 1px;
    border-right-style: solid;
    height: 100%;
    margin-right: 5px;
}
.up-button-wrapper {
    position:fixed;
    bottom: 100px;
    right: 200px;
}
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .notice-header{
            flex-direction: row;
            justify-content: space-between;
        }
        .close-btn{
            width: 700px;
            padding-left: 660px;
        }
        .up-button-wrapper {
            bottom: 150px;
            right: 100px;
        }
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    .notice-item {
        padding: 0;
    }
    .item-inner{
        flex-direction: row-reverse;
        margin: 0 20px 0 20px;
    }
    .item-inner div:nth-child(1) {
        display: none;
    }
    .item-inner div:nth-child(3) {
        display: none;
    }
    .item-inner div:nth-child(4) {
        justify-content: flex-start;
        
    }
    .item-inner div:nth-child(5) {
        display: none;
    }        
    .close-btn{
        width: 100%;
        padding-left: 90%;
    }
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
        .notice-title span{
            font-size: 16px;
        }
        .up-button-wrapper {
            display: none;
        }
    }
</style>
