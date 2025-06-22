<!--

v-on

1. v-on은 Vue.js에서 DOM 이벤트를 감지하고 처리하기 위한 디렉티브
2. 주로 클릭, 입력, 마우스 이동 등 사용자 인터랙션을 처리할 때 사용
3. v-on: 뒤에는 이벤트 이름 (예: click, keyup, submit 등)
4. v-on:은 @ 기호로 축약 가능
5. 이벤트 종류는 매우 다양하다. 마우스, 키보드 폼 관련, 기타 커스텀 이벤트 등
6. 수식어도 다양하다. (.stop, .prevent, .once, .self 등)

-->

<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <button @click="reverseMessage">Reverse Message</button>
    <div @click="reverseMessage">
      <button @click.stop="innerClick">눌러도 바깥 click 안됨</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestFive",
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    innerClick() {
      console.log("inner click!");
    },
  },
};
</script>
