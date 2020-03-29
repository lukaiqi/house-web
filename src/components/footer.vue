<template>
  <div>
    <div class="footer">
      <span>当前时间  {{time}}</span>
      <span>你的IP  {{ip}}</span>
      <span>来自  {{addr}}</span>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      time: moment().format("YYYY-MM-DD HH:mm:ss"),
      ip: "110.185.46.177",
      addr: "四川成都电信"
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  }
};
</script>
<style lang="less">
.footer {
  display: flex;
  height: 60px;
  justify-content: space-around;
  align-items: center;
}
</style>