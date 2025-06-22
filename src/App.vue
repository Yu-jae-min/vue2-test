<template>
  <div id="app">
    <HelloWorld msg="HelloWorld Text" />
    <TestOne />
    <TestTwo />
    <TestThree />
    <TestFour />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TestOne from "./components/TestOne.vue";
import TestThree from "./components/TestThree.vue";
import TestTwo from "./components/TestTwo.vue";
import TestFour from "./components/TestFour.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TestOne,
    TestTwo,
    TestThree,
    TestFour,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
