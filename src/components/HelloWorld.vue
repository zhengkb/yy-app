<template>
  <div>
    <p>hello world</p>
    <button @click="clickMe">点击我请求接口 QQ 音乐的接口</button>
    <div v-for="(item, index) in hotkeyList" :key="index">
      <div>{{item.k}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hotkeyList: []
    }
  },
  methods: {
    clickMe() {
      axios
        .get("/api/gethotkey.fcg")
        .then((res) => {
          this.hotkeyList = res.data.data.hotkey || []
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
};
</script>
