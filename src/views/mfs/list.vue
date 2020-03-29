<template>
  <div>
    <div class="search">
      关键词：
      <el-input v-model="keyword" placeholder="请输入昵称" size="small" @keyup.enter.native="search"></el-input>
      <el-button type="primary" @click="search" size="small">搜索</el-button>
      <el-button type="danger" @click="clear" size="small">清空</el-button>
    </div>
    <el-table :data="list" border>
      <el-table-column prop="nickname" label="昵称" align="center"></el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.state===1?'开始':'完成'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.otime| dateFormat}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
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
      page: 1,
      keyword: ""
    };
  },
  methods: {
    getlist() {
      this.axios
        .get(`/api/mfs_list?page=${this.page}&search=${this.keyword}`)
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