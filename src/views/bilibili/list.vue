<template>
  <div>
    <el-table :data="list" border>
      <el-table-column prop="title" label="名称" align="center"></el-table-column>
      <el-table-column prop="play" label="播放" align="center" width="100"></el-table-column>
      <el-table-column prop="like_count" label="点赞" align="center" width="100"></el-table-column>
      <el-table-column prop="reply" label="回复" align="center" width="100"></el-table-column>
      <el-table-column prop="danmaku" label="弹幕" align="center" width="100"></el-table-column>
      <el-table-column prop="favorite" label="收藏" align="center" width="100"></el-table-column>
      <el-table-column prop="coin" label="硬币" align="center" width="100"></el-table-column>
      <el-table-column prop="share" label="分享" align="center" width="100"></el-table-column>
      <el-table-column label="发布时间" align="center" width="240">
        <template slot-scope="scope">
          <span>{{scope.row.pubdate| dateFormat}}</span>
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
      this.axios.get("/api/bili_list").then(res => {
        this.list = res.results;
        this.count = res.count;
      });
    },
    changepage(page) {
      this.axios.get(`/api/bili_list?page=${page}`).then(res => {
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