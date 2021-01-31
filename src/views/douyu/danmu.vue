<template>
  <div>
    <div class="head">
      <div class="search">
        关键词：
        <el-input
          v-model="keyword"
          placeholder="请输入昵称或弹幕"
          size="small"
          @keyup.enter.native="search"
        ></el-input>
      </div>
      <div class="date">
        日期：
        <el-date-picker
          v-model="date"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd HH:mm:ss"
        >
        </el-date-picker>
        <el-button type="primary" @click="search" size="small">搜索</el-button>
        <el-button type="danger" @click="clear" size="small">清空</el-button>
      </div>
    </div>
    <el-table
      :data="list"
      border
      v-loading="loading"
      element-loading-text="努力加载中"
    >
      <el-table-column
        prop="nickname"
        label="昵称"
        align="center"
        width="230px"
      ></el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="user_level"
        label="等级"
        align="center"
        width="100px"
      ></el-table-column>
      <el-table-column
        prop="fan_card"
        label="粉丝牌"
        align="center"
        width="100px"
      ></el-table-column>
      <el-table-column
        prop="fan_level"
        label="粉丝牌等级"
        align="center"
        width="100px"
      ></el-table-column>
      <el-table-column label="发送时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.send_time | dateFormat }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,prev, pager, next"
      :total="count"
      :page-size="20"
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
      page: 1,
      date: "",
      loading: false,
    };
  },
  methods: {
    getlist() {
      console.log(this.date);
      this.loading = true;
      let startDate = "",
        endDate = "";
      if (this.date) {
        startDate = this.date[0];
        endDate = this.date[1];
      }
      this.axios
        .get(
          `/api/dm_list?page=${this.page}&search=${this.keyword}&startDate=${startDate}&endDate=${endDate}`
        )
        .then((res) => {
          this.loading = false;
          this.list = res.results;
          this.count = res.count;
        })
        .catch(() => {
          this.loading = false;
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
      this.date = "";
      this.page = 1;
      this.getlist();
    },
  },
  mounted() {
    this.getlist();
  },
};
</script>
