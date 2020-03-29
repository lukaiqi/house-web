<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="temperature" label="温度" align="center"></el-table-column>
      <el-table-column prop="humidity" label="湿度" align="center"></el-table-column>
      <el-table-column prop="illumination" label="光照" align="center"></el-table-column>
      <el-table-column prop="pressure" label="大气压" align="center"></el-table-column>
      <el-table-column prop="altitude" label="海拔高度" align="center"></el-table-column>
      <el-table-column label="采集时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.collect_time| dateFormat}}</span>
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
      this.axios.get("/api/em_list").then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/em_list?page=${page}`).then(res => {
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