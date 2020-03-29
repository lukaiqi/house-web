<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="cpu_temp" label="CPU温度" align="center"></el-table-column>
      <el-table-column prop="gpu_temp" label="GPU温度" align="center"></el-table-column>
      <el-table-column prop="cpu_used" label="CPU使用率" align="center"></el-table-column>
      <el-table-column prop="mem_used" label="内存使用率" align="center"></el-table-column>
      <el-table-column label="采集时间" align="center">
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
      this.axios.get("/api/board_info").then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/board_info?page=${page}`).then(res => {
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