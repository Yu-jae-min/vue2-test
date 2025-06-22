<template>
  <div id="app">
    <header class="app-header">
      <nav class="nav-menu">
        <router-link :to="HOME_PATH">0</router-link>
        <router-link :to="TEST_ONE_PATH">1</router-link>
        <router-link :to="TEST_TWO_PATH">2</router-link>
        <router-link :to="TEST_THREE_PATH">3</router-link>
        <router-link :to="TEST_FOUR_PATH">4</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import {
  HOME_PATH,
  TEST_FOUR_PATH,
  TEST_ONE_PATH,
  TEST_THREE_PATH,
  TEST_TWO_PATH,
} from "./constants/route";

export default {
  name: "App",
  data() {
    return {
      HOME_PATH,
      TEST_ONE_PATH,
      TEST_TWO_PATH,
      TEST_THREE_PATH,
      TEST_FOUR_PATH,
    };
  },
};
</script>

<style>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #34495e;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 1000;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-menu {
  display: flex;
  gap: 24px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
}

.nav-menu a.router-link-exact-active {
  border-bottom: 2px solid #e67e22;
}

.main-content {
  padding-top: 70px;
}
</style>
