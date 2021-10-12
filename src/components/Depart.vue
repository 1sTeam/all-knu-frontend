<template>
<div class="depart-wrapper">
    <div class="depart-header">
        <div class="depart-title">
            <span class="material-icons">assignment</span><span>&nbsp;&nbsp;학과 공지사항</span>

        </div>
        <div class="depart-search">
            <div>
                <div class="search-box">
                    <input placeholder="검색해주세요">
                    <span class="material-icons">search</span>
                </div>
            </div>
        </div>
    </div>
    <div class="depart-body">
        <div class="depart-content" >
            <div class="depart-item" v-for="(item,i) in departList" :key="i">
                <div class="item-inner">
                    <div v-text="item.number">367</div>
                    <div v-text="item.title">공지사항 제목</div>
                    <div v-text="item.writer">교무팀</div>
                    <div v-text="item.date">2019.09.14</div>
                    <div v-text="item.views">367</div>
                </div>
            </div>

<infinite-loading @infinite="infiniteHandler"></infinite-loading>

        </div>
    </div>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';

export default{

    name : 'depart',
    data() {
        return {
            currentpage: 1,
            departList: [],
            type: "ALL"
        }
    },
    mounted() {
        console.log("mounted");
        this.type = this.$route.params.type;
        axios.get("http://192.168.0.14:8080/crawling/notice/major/" + this.currentpage, {
            params: {
                type: this.type
            }
        }).then((response) => {
            console.log(response.data.list);
            const list = response.data.list;
            this.departList = list;
            this.currentpage++;
        }).catch((error) => {

        });  
    },
    methods:{
    infiniteHandler($state) {
    setTimeout(() => {
        const temp = [];
        axios.get("http://192.168.0.14:8080/crawling/notice/major" + this.currentpage, {
            params: {
                type: this.type
            }
        }).then((response) => {
            console.log(response.data.list);
            const list = response.data.list;
            list.map((item) => {
                temp.push(item);
            });
            this.departList = this.departList.concat(temp);
            this.currentpage++;
        }).catch((error) => {

        });
        $state.loaded();
    }, 1000);
    },
    },
    
    
    components: {
    InfiniteLoading,
    }

}
</script>

<style scoped>
.depart-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.depart-header {
    height: 100px;
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.depart-body {
    height: 100%;
    display: flex;
    flex-direction: column;
}


.depart-content{
    height: 100%;
    font-size: 1.2rem;


}
.depart-item {
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
.depart-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    font-weight: 700;

}
.depart-search{
    display: flex;
    height: 100%;
    flex-direction: row-reverse;
}
.depart-search div {
    display: flex;
    align-items: center;
}
.depart-search .search-box {
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
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .depart-header{
            flex-direction: row;
            justify-content: space-between;
        }
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    .depart-item {
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
    
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
        .depart-title span{
            font-size: 16px;

        }
    }
</style>