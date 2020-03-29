<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#ccc"
      text-color="#fff"
      active-text-color="#08f"
      default-active="danmu"
      @select="selectpath"
    >
      <el-submenu index="douyu">
        <template slot="title">斗鱼</template>
        <el-menu-item index="danmu">弹幕</el-menu-item>
        <el-menu-item index="jinyan">禁言</el-menu-item>
      </el-submenu>
      <el-menu-item index="board_info">树莓派</el-menu-item>
      <el-menu-item index="sensor_list">环境值</el-menu-item>
      <el-submenu index="5">
        <template slot="title">魔饭生</template>
        <el-menu-item index="mfs_list">列表</el-menu-item>
        <el-menu-item index="mfs_count">统计</el-menu-item>
      </el-submenu>
      <el-submenu index="bilibili">
        <template slot="title">哔哩哔哩</template>
        <el-menu-item index="bili_list">视频列表</el-menu-item>
        <el-menu-item index="bili_info">信息统计</el-menu-item>
      </el-submenu>
    </el-menu>
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