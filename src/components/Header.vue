<template>
  <div class="container">
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <h5 class="logo-style">예매좋아</h5>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">콘서트</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">연극</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">뮤지컬</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">전시</a></li>
        <li><a href="#" class="nav-link px-2 link-secondary">클래식</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <!-- login/logout -->
          <div class="col-md-3 text-end">
            <router-link to="/login" class="text" v-if="!$store.state.account.id">로그인</router-link>
            <a to="/login" class="text" @click="logout()" v-else>로그아웃</a>
          </div>
        <router-link :to="{path: `/signup`}">
            <button type="button" class="btn">회원가입</button>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
import store from '@/scripts/store';
import router from '@/scripts/router';

export default {
    name: "Header",
    setup() {
      const logout = () => {
        store.commit("setAccount", 0);
        router.push({path: "/"});

        // axios.delete("/api/account")
        //   .then(() => {
        //     window.alert('로그아웃 하였습니다');
        // })
      }

      return { logout }
    }
}
</script>

<style scoped>
    .logo-style {
        font-size: 1.2rem;
        color: gray;
        margin-top: 0.7rem;
    }
</style>