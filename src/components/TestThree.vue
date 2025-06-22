<!--

v-if

1. 조건부 렌더링(Conditional Rendering)을 할 때 사용하는 가장 기본적인 디렉티브
2. 조건이 true일 때만 해당 DOM 요소를 렌더링
3. v-if는 하나의 요소에만 붙일 수 있는데, 여러 요소를 조건부로 렌더링하고 싶다면 <template v-if>를 사용

-->

<template>
  <span v-if="seen">조건부 렌더링 테스트</span>
</template>

<script>
export default {
  name: "TestThree",
  data() {
    return {
      seen: true,
    };
  },
};
</script>
