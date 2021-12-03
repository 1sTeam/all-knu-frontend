<template>
  <div>
    <main-template>
      <template slot="header"></template>
      <div class="up-button-wrapper">
        <scroll-to-top-button />
      </div>
      <main-container>
        <notice-iframe v-bind:url="url"></notice-iframe>
        <div class="notice-wrapper">
          <div class="notice-header">
            <div class="notice-title">
              <span>만족도조사 참여현황</span>
            </div>
            <div class="notice-search">
              <div>
                <div class="search-box">
                  <input placeholder="검색해주세요" />
                  <span class="material-icons">search</span>
                </div>
              </div>
            </div>
          </div>
          <div class="notice-body">
            <div class="notice-content">
              <div class="notice-item" v-for="(item, i) in noticeList" :key="i">
                <div class="item-inner">
                  <div v-text="item.number">20</div>
                  <div v-text="item.name" >
                    프로그램명
                  </div>
                  <div v-text="item.operationEndDate">2021.09.16</div>
                  <div v-text="item.satisfactionEndDate">2021.09.30</div>
                  <div v-text="item.status">응답</div>
                </div>
              </div>

              <infinite-loading @infinite="infiniteHandler"></infinite-loading>
            </div>
          </div>
        </div>
      </main-container>
      <template slot="tab-bar"> </template>
    </main-template>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from "axios";
import MainContainer from "./MainContainer.vue";
import MainTemplate from "./MainTemplate.vue";
//만족도조사iframe
import ScrollToTopButton from "./ScrollToTopButton.vue";

export default {
  name: "satisfaction",
  data() {
    return {
      currentpage: 1,
      
      
      url: "",
    };
  },
  mounted() {
    console.log("mounted");
    //로컬스토리지에서 사용자정보 가져오기
    const settings = JSON.parse(window.localStorage.getItem("userInfo"));
    this.userState = user;
    if (user == null) {
      //로그인이 안되어 있으므로 api 호출을 하지 않고 리다이렉트
      alert("로그인을 해야합니다");
      this.$router.push("/");
    } else if (user != null) {
      axios
        .post(
          "https://all-knu-backend.accongbox.com/knu/verius/satisfaction/"+this.currentpage,
          this.userState.userCookies
        )
        .then((response) => {
          console.log(response.data.list);
          const list= response.data.list;
          this.noticeList=list;
          this.currentpage++;
        })
        .catch((error) => {
          if (error.response.status === 403) {
            //쿠키 정보가 부정확함, api 호출 실패 리다이렉트
            alert("로그인 다시 해주세요");
            localStorage.removeItem("userInfo");
            this.$router.push("/");
          }
        });
    }
    
  },
  methods: {
    closeClick() {
      this.url = !this.url;
      document.documentElement.style.overflow = "auto";
    },
    noticeClick(link) {
      this.url = link;
      document.documentElement.style.overflow = "hidden";
    },
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        axios
          .get("https://all-knu-backend.accongbox.com/crawling/notice/major", {
            params: {
              page: this.currentpage,
              type: this.type,
            },
          })
          .then((response) => {
            console.log(response.data.list);
            const list = response.data.list.notices;
            if (list.length != 0) {
              list.map((item) => {
                temp.push(item);
              });
              this.noticeList = this.noticeList.concat(temp);
              this.currentpage++;
            } else {
              $state.complete(); // 데이터의 끝
            }
          })
          .catch((error) => {
            console.error(error);
          });
        $state.loaded();
      }, 1000);
    },
    
  },

  components: {
    InfiniteLoading,
    MainTemplate,
    MainContainer,
    ScrollToTopButton,
    NoticeIframe,
  },
};
</script>

<style scoped>
.notice-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px 0px;
}
.notice-header {
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 30px;
}
.notice-body {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.notice-content {
  height: 100%;
  font-size: 1.2rem;
}
.notice-item {
  height: 50px;
  padding: 0 30px 0 30px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.item-inner {
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
  width: 100%;
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
.notice-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 34px;
  font-weight: 700;
}
.notice-title span.material-icons {
  font-size: 40px;
}
.notice-search {
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
  height: 40px;
  background-color: #f1f1f1;
  padding: 5px;
  width: 310px;
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
  position: fixed;
  bottom: 100px;
  right: 200px;
}
@media only screen and (max-width: 1024px) {
  /* 테블릿 M일 때*/
  .notice-header {
    height: 10px;
    flex-direction: row;
    justify-content: space-between;
  }

  .up-button-wrapper {
    bottom: 150px;
    right: 100px;
  }
  .notice-title {
    font-size: 28px;
  }
  .notice-title span.material-icons {
    font-size: 30px;
  }
}
@media only screen and (max-width: 768px) {
  /* 테블릿S일 때 */
  .notice-item {
    padding: 0;
  }
  .item-inner {
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

  .close-btn {
    width: 100%;
    padding-left: 90%;
  }
  .notice-title {
    font-size: 28px;
  }
  .notice-title span.material-icons {
    font-size: 30px;
  }
  .notice-search .search-box {
    height: 40px;

    padding: 5px;
    width: 250px;
  }
}
@media only screen and (max-width: 479px) {
  /* 모바일 일 때 */

  .up-button-wrapper {
    display: none;
  }
  .notice-title {
    font-size: 20px;
  }
  .notice-title span.material-icons {
    font-size: 25px;
  }
  .notice-search .search-box {
    height: 40px;
    padding: 5px;
    width: 200px;
  }
}
</style>
