<template>
  <div id="app">
    <el-container>
      <el-header>
        <commonheader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <commonfooter />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import header from "./components/header";
import footer from "./components/footer";
export default {
  components: {
    commonheader: header,
    commonfooter: footer
  }
};
</script>
<style lang="less">
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
  min-height: calc(100vh - 120px);
}
.el-footer {
  background-color: #ccc;
  color: #ff0;
}
</style>