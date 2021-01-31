<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#ccc"
          text-color="#fff"
          active-text-color="#08f"
          default-active="danmu"
          @select="selectpath"
        >
          <el-menu-item index="danmu">弹幕</el-menu-item>
          <el-menu-item index="jinyan">禁言</el-menu-item>
          <el-menu-item index="gift">礼物</el-menu-item>
          <el-menu-item index="biggift">大礼物</el-menu-item>
          <el-menu-item index="sensor">环境值</el-menu-item>
          <el-menu-item index="print">打印</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    selectpath(key, path) {
      this.$router.push(key);
    }
  }
};
</script>
<style lang="less">
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
  min-height: calc(100vh - 60px);
}
</style>