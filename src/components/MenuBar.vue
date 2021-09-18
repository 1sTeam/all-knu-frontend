<template>

<div class="navigation">
  <span class="title">ALL-KNU</span>
  <div class="menu-popup hide">
    <ul class="menus">
      <li class="menu"><a href="#">공지사항</a></li>
      <li class="menu"><a href="#">학과공지</a></li>
      <li class="menu"><a href="#">시간표</a></li>
      <li class="menu"><a href="#">더보기</a></li>
    </ul>

    <ul class="menus2">
      <li class="menu"><a href="#">알림</a></li>
      <li class="menu"><a href="#">로그인</a></li>
      <li class="menu"><a href="#"><span class="material-icons">settings</span></a></li>
    </ul>

  </div>
  <div class="menu-button"><span class="material-icons">menu</span></div>
  <div class="setting-button"><span class="material-icons">settings</span></div>
</div>
</template>
<script>
export default {
  data(){
    return {}
  }
}
</script>
<style>
* {
  font-size: 8px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 100ms ease-out;
}

.navigation {
  width: 100%;
  height: 65px;
  background-color: #354076;
  position: fixed;
  top: 0;
}

.title {
  position: absolute;
  left: 12%;
  top: 1em;
  color: white;
  font-size: 3em;
  font-weight: 900;
}

.menus {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 27%;
  right: 47%;
  top: 4em;
}


.menus2 {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 15%;
  right: 3%;
  top: 4em;
}


.menu {
  list-style: none;
}

.menu > a {
  font-size: 2em;
  font-weight: 500;
  text-decoration: none;
  color: white;
  transition: font-weight 200ms ease-in-out;
}

.menu > a:hover {
  font-weight: 600;
}

.menu-button {
  visibility: hidden;
  position: absolute;
  top: 1em;
  left: 2em;
  font-size: 2em;
  color: white;
  cursor: pointer;
}

.setting-button {
  visibility: hidden;
  position: absolute;
  top: 1em;
  right: 2em;
  font-size: 2em;
  color: white;
  cursor: pointer;
}
    @media only screen and (max-width: 1024px) {  /* 테블릿 M일 때*/
    
    .navigation {
      height: 60px;
    }
    
    }
    @media only screen and (max-width: 768px) { /* 테블릿S일 때 */
    
      .navigation {
    height: 7em;
  }

  .title {
    position: absolute;
    left: 40%;
    height: 4em;
    top: 0.6em;
  }

  .menu-button {
    visibility: visible;
  }

.setting-button {
visibility: visible;
}

  .hide {
    visibility: hidden;
    /* transform이 없는데 움직이는 이유 */
    transition: all 300ms ease-out;
  }

  .show {
    visibility: visible;
    transform: translateX(-100%);
    transition: all 300ms ease-in;
  }
  
    }
    @media only screen and (max-width: 479px) { /* 모바일 일 때 */
    }

</style>
``