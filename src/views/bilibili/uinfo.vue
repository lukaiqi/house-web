<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="follows" label="关注" align="center"></el-table-column>
      <el-table-column prop="fans" label="粉丝" align="center"></el-table-column>
      <el-table-column prop="likes" label="总赞" align="center"></el-table-column>
      <el-table-column prop="plays" label="总播放" align="center"></el-table-column>
      <el-table-column label="操作时间" align="center">
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
      this.axios.get("/api/bili_info").then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/bili_info?page=${page}`).then(res => {
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