<template>
  <div>
    <p>hello world</p>
    <button @click="clickMe">点击我请求接口 QQ 音乐的接口</button>
    <div>
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    clickMe() {
      axios
          .get("/test")
          .then((res) => {
            this.value = res.data;
            console.log("res", res);
          })
          .catch((err) => {
            console.log("err", err);
          });
    },
  },
};
</script>
