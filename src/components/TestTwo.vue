<!--

v-vind

1. 엘리먼트에서 v-bind 사용 시 엘리먼트가 가진 속성만 속성명으로 사용할 수 있다. (ex 아래와 같이 span 태그의 속성인 title은 사용 가능)
2. 뷰 컴포넌트에서 사용 시에는 그 컴포넌트가 정의한 props 무엇이든 쓸 수 있다.
3. 축약형으로 :title과 같이 작성할 수 있다.
4. 객체를 통째로 바인딩할 수 있다.

-->

<template>
  <span :title="message" v-bind="dynamicProps">
    Hover your mouse over me for a few seconds to see my dynamically bound
    title!
  </span>
</template>

<script>
export default {
  name: "TestTwo",
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
      dynamicProps: {
        id: "user-id",
        class: "highlight",
        style: "color:red",
      },
    };
  },
};
</script>
