<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="snic" label="操作人" align="center"></el-table-column>
      <el-table-column prop="dnic" label="被禁言人" align="center"></el-table-column>
      <el-table-column label="操作人类型" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.otype===1?'房管':'主播'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.endtime| dateFormat}}</span>
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
      this.axios.get("/api/jy_list").then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/jy_list?page=${page}`).then(res => {
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