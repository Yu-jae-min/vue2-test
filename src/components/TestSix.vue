<!--

v-model

1. 양방향 데이터 바인딩을 가능하게 해주는 디렉티브
2. 입력값과 Vue 데이터(data)를 서로 연결, 화면(input) → data, data → 화면 양쪽으로 값을 동기화
3. 아래 예시의 경우 "사용자가 <input>에 텍스트 입력 -> message 데이터가 자동으로 갱신 -> <p>{{ message }}</p>에 실시간 반영됨" 의 흐름
4. input, textarea, select, <input type="checkbox">, <input type="radio"> 등에서 사용할 수 있다.
5. lazy, number, trim의 수식어도 사용가능하다.

-->

<template>
  <div class="wrap">
    <div>
      <p>{{ name }}</p>
      <input v-model="name" placeholder="이름 입력" />
    </div>

    <div>
      <p>{{ agree }}</p>
      <input type="checkbox" v-model="agree" /> 동의
    </div>

    <div>
      <p>{{ fruits }}</p>
      <input type="checkbox" v-model="fruits" value="apple" /> 사과
      <input type="checkbox" v-model="fruits" value="banana" /> 바나나
    </div>

    <div>
      <p>{{ gender }}</p>
      <input type="radio" v-model="gender" value="male" /> 남
      <input type="radio" v-model="gender" value="female" /> 여
    </div>

    <div>
      <input v-model.lazy="msg" />
      <input v-model.number="age" />
      <input v-model.trim="nickname" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TestSix",
  data() {
    return {
      name: "",
      agree: false,
      fruits: [],
      gender: "",
      msg: "",
      age: "",
      nickname: "",
    };
  },
};
</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
}
</style>
