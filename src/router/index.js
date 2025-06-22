import Vue from "vue";
import Router from "vue-router";
import MainHome from "@/components/MainHome.vue";
import TestOne from "@/components/TestOne.vue";
import TestTwo from "@/components/TestTwo.vue";
import TestThree from "@/components/TestThree.vue";
import TestFour from "@/components/TestFour.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainHome",
      component: MainHome,
      props: () => ({ msg: "Hello from route!" }),
    },
    {
      path: "/1",
      name: "TestOne",
      component: TestOne,
    },
    {
      path: "/2",
      name: "TestOne",
      component: TestTwo,
    },
    {
      path: "/3",
      name: "TestThree",
      component: TestThree,
    },
    {
      path: "/4",
      name: "TestFour",
      component: TestFour,
    },
  ],
});
