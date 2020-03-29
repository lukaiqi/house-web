<template>
  <div>
    <div class="search">
      关键词：
      <el-input v-model="keyword" placeholder="请输入昵称或弹幕" size="small" @keyup.enter.native="search"></el-input>
      <el-button type="primary" @click="search" size="small">搜索</el-button>
      <el-button type="danger" @click="clear" size="small">清空</el-button>
    </div>
    <el-table :data="list" border>
      <el-table-column prop="nickname" label="昵称" align="center" width="230px"></el-table-column>
      <el-table-column prop="content" label="内容" align="center"></el-table-column>
      <el-table-column prop="user_level" label="等级" align="center" width="100px"></el-table-column>
      <el-table-column prop="fan_card" label="粉丝牌" align="center" width="100px"></el-table-column>
      <el-table-column prop="fan_level" label="粉丝牌等级" align="center" width="100px"></el-table-column>
      <el-table-column label="发送时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.send_time| dateFormat}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,prev, pager, next"
      :total="count"
      :page-size="15"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      count: 0,
      keyword: "",
      page: 1
    };
  },
  methods: {
    getlist() {
      this.axios
        .get(`/api/dm_list?page=${this.page}&search=${this.keyword}`)
        .then(res => {
          this.list = res.results;
          this.count = res.count;
        });
    },
    changepage(page) {
      this.page = page;
      this.getlist();
    },
    search() {
      this.page = 1;
      this.getlist();
    },
    clear() {
      this.keyword = "";
      this.page = 1;
      this.getlist();
    }
  },
  mounted() {
    this.getlist();
  }
};
</script>
<style lang="less">
.search {
  display: flex;
  align-items: center;
  margin: 15px;
  .el-input {
    width: 200px;
    margin: 0 20px;
  }
}
</style>