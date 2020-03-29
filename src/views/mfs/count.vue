<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="user_score" label="总人数" align="center"></el-table-column>
      <el-table-column prop="star_score" label="总次数" align="center"></el-table-column>
      <el-table-column label="截止时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.add_time| dateFormat}}</span>
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
      count: 0
    };
  },
  methods: {
    getlist() {
      this.axios.get("/api/mfs_count").then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/mfs_count?page=${page}`).then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    }
  },
  mounted() {
    this.getlist();
  }
};
</script>