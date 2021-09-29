<template>
<div class="notice-wrapper">
    <div class="notice-header">
        <div class="notice-title">
            <span class="material-icons">account_balance</span><span>&nbsp;&nbsp;공지사항</span>

        </div>
        <div class="notice-search">
            <div>
                <div class="search-box">
                    <input v-model="search" placeholder="검색해주세요">
                    <span class="material-icons">search</span>
                </div>
            </div>
        </div>
    </div>
    <div class="notice-body">
        <div class="notice-tabs">
            <div><a href="#">전체</a></div>
            <div><a href="#">학사</a></div>
            <div><a href="#">장학</a></div>
            <div><a href="#">학습/상담</a></div>
            <div><a href="#">취창업</a></div>
        </div>
        <div class="notice-content"  >
            <div class="notice-item" v-for="(item,i) in list" :key="i">
                <div class="item-inner">
                    <div>367</div>
                    <div v-text="item">공지사항 제목</div>
                    <div>교무팀</div>
                    <div>2019.09.14</div>
                    <div>367</div>
                </div>
            </div>

 <infinite-loading @infinite="infiniteHandler"></infinite-loading>

        </div>
    </div>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default{

    name : 'home',
    data() {
        return {  
list: [],
      data: [
        { title: "2021년(2학기) “지피지기 취업 취업스터디”  모집(기간연장)" },
        { title: "[원격]교내 정전에 따른 이러닝캠퍼스 일시 접속 중단 안내" },
        { title: "[CTL] 2021-2학기 KNU 장원급제 공모전 모집 안내" },
        { title: "[IRB] 기관생명윤리위원회 제2021-08차 정기심의 신청 안내" },
        { title: "[도서관] 2021 온라인 전자정보박람회 개최 안내" },
        { title: "[CTL] KC 그랑프리 모집 안내" },
        { title: "10월 강인한H 프로그램" },
        { title: "[CTL] 2021-2학기 '학습공동체' 선발 결과 발표" },
        { title: "[CTL] '더체인지' 선발 발표" },
        { title: "2021학년도 내가 듣고 싶은 교양교과목 공모전" },
        { title: "2021년(2학기) “지피지기 취업 취업스터디”  모집(기간연장)" },
        { title: "[원격]교내 정전에 따른 이러닝캠퍼스 일시 접속 중단 안내" },
        { title: "[CTL] 2021-2학기 KNU 장원급제 공모전 모집 안내" },
        { title: "[IRB] 기관생명윤리위원회 제2021-08차 정기심의 신청 안내" },
        { title: "[도서관] 2021 온라인 전자정보박람회 개최 안내" },
        { title: "[CTL] KC 그랑프리 모집 안내" },
        { title: "10월 강인한H 프로그램" },
        { title: "[CTL] 2021-2학기 '학습공동체' 선발 결과 발표" },
        { title: "[CTL] '더체인지' 선발 발표" },
        { title: "2021학년도 내가 듣고 싶은 교양교과목 공모전" },
      ],


        }
    },
      methods:{
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (var i = 0; i < 10; i++) {
          temp.push(this.data[i].title);
        }
        this.list = this.list.concat(temp);
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
    background-color: aqua;
    height: 35px ;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 18px;
    align-items: center;
    border-block-end: solid;
    writing-mode: horizontal-tb;
    
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
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
        .notice-header{
            flex-direction: row;
            justify-content: space-between;
        }
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    .notice-item {
        padding: 0;
    }
    .item-inner div:nth-child(1) {
        width: 50px;
    }
    .item-inner div:nth-child(3) {
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
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */

    }
</style>