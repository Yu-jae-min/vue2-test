<!--

v-for

1. v-for지시어는 배열의 데이터를 사용하여 항목 목록을 표시하는 데 사용할 수 있다.
2. v-for="item in items"는 자바스크립트로 치면 for (const item of items) { // item은 배열 items의 한 요소 }와 같은 의미이다.
3. :key는 각 요소를 고유하게 식별하기 위한 필수 속성 (성능 및 렌더링 안정성을 위해 꼭 써야 함)
4. index도 함께 사용할 수 있다.

-->

<template>
  <div>
    <!-- 배열 순회 -->
    <li v-for="todo in todos" v-bind:key="todo.id">
      {{ todo.name }}
    </li>
    <!-- 배열 순회, index 사용 -->
    <li v-for="(todo, index) in todos" v-bind:key="todo.id">
      {{ index }}
      {{ todo.name }}
    </li>
    <!-- 객체 순회 -->
    <div v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "TestFour",
  data() {
    return {
      todos: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
      ],
      user: {
        name: "Jaemin",
        age: 29,
        job: "Developer",
      },
    };
  },
};
</script>
