<template>
  <div class="main">
    <div class="box">
      <div class="item">
        <span class="label">对齐方式：</span>
        <el-radio-group v-model="type">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="center">居中对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
        </el-radio-group>
      </div>
      <div class="item">
        <span class="label">是否加粗：</span>
        <div>
          <el-radio v-model="blod" :label="true">是</el-radio>
          <el-radio v-model="blod" :label="false">否</el-radio>
        </div>
      </div>
    </div>
    <div class="content">
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入内容"
        v-model="content"
      >
      </el-input>
    </div>
    <div class="button">
      <el-button @click="print" type="primary">打印</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blod: false,
      type: "left",
      content: "",
    };
  },
  methods: {
    print() {
      if (!this.content) {
        this.$message({
          type: "warning",
          message: "内容不能为空",
        });
        return;
      }
      this.axios
        .post("/api/print", {
          type: this.type,
          content: this.content,
          blod: this.blod,
        })
        .then((res) => {
          this.$message({
            type: "success",
            message: "打印成功",
          });
        });
    },
  },
};
</script>

<style lang="less" scoepd>
.main {
  padding: 20px;
}
.box {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .item {
    display: flex;
    margin-right: 30px;
    align-items: center;
  }
}
.button {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  .el-button {
    width: 50%;
  }
}
</style>