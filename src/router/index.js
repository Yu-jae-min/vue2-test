import Vue from "vue";
import Router from "vue-router";
import MainHome from "@/components/MainHome.vue";
import TestOne from "@/components/TestOne.vue";
import TestTwo from "@/components/TestTwo.vue";
import TestThree from "@/components/TestThree.vue";
import TestFour from "@/components/TestFour.vue";
import {
  HOME_PATH,
  TEST_FIVE_PATH,
  TEST_FOUR_PATH,
  TEST_ONE_PATH,
  TEST_SIX_PATH,
  TEST_THREE_PATH,
  TEST_TWO_PATH,
} from "@/constants/route";
import TestFive from "@/components/TestFive.vue";
import TestSix from "@/components/TestSix.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: HOME_PATH,
      name: "MainHome",
      component: MainHome,
      props: () => ({ msg: "Hello from route!" }),
    },
    {
      path: TEST_ONE_PATH,
      name: "TestOne",
      component: TestOne,
    },
    {
      path: TEST_TWO_PATH,
      name: "TestTwo",
      component: TestTwo,
    },
    {
      path: TEST_THREE_PATH,
      name: "TestThree",
      component: TestThree,
    },
    {
      path: TEST_FOUR_PATH,
      name: "TestFour",
      component: TestFour,
    },
    {
      path: TEST_FIVE_PATH,
      name: "TestFive",
      component: TestFive,
    },
    {
      path: TEST_SIX_PATH,
      name: "TestSix",
      component: TestSix,
    },
  ],
});
