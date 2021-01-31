<template>
  <div>
    <el-table :data="list" border>
      <el-table-column
        prop="nickname"
        label="昵称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="gift_name"
        label="礼物名称"
        align="center"
      ></el-table-column>
      <el-table-column prop="send_time" label="赠送时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.send_time | dateFormat }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
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
    };
  },
  methods: {
    getlist() {
      this.axios.get("/api/big_gift_list").then((res) => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/big_gift_list?page=${page}`).then((res) => {
        this.list = res.results;
        this.count = res.count;
      });
    },
  },
  mounted() {
    this.getlist();
  },
};
</script>