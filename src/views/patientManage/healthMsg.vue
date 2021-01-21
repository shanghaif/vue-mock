<template>
  <div class="classManage">
    <div class="class_tool_bar">
      <div class="class_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
    </div>
    <!-- 展示表格 -->
    <div class="class_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="date"
          label="发送时间"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="name" label="收件人" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="健康消息" align="center">
          <p class="healthMsg">
            askjnnnnnnnnnnnnn爱上姐姐考试的考生即将开始的nnnnn
          </p>
          <span class="detail" @click="dialogVisible = true">详情</span>
        </el-table-column>
        <el-table-column prop="address" label="发件人" align="center">
        </el-table-column>
        <el-table-column prop="address" label="发送时间" align="center">
        </el-table-column>
      </el-table>
    </div>
    <div class="class_pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        align="center"
      >
      </el-pagination>
    </div>
    <!-- 详情 -->
    <el-dialog title="详情" :visible.sync="dialogVisible" width="20%" center class="detail_dialog">
        <div class="content">本周四复诊提醒通知请不要空腹吃早餐，早上 8点之前到达，先找们正李大夫做个登记</div>
        <p>李主任</p>
        <p class="date">2020-02-11 10：36</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      dialogVisible: false,
      value: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogVisible: false,
    };
  },
  computed: {},
  methods: {
    handleClose(done) {
      this.$confirm("确定要关闭吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "移除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消移除",
          });
        });
    },
    class_manage_delete() {
      this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "移除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消移除",
          });
        });
    },
    // 添加分类
    add_class() {
      this.$router.push("/AddClassMange");
    },
  },
};
</script>

<style lang="less" scoped>
.classManage {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .class_tool_bar {
    padding: 1% 0;
    .class_tool_search {
      display: inline-block;
      /deep/ .el-input-group {
        border: 1px solid #6672fb;
        background: rgba(102, 114, 251, 0.05);
        border-radius: 5px;
      }
      /deep/ .el-input-group__prepend {
        background: #d3dff7;
        opacity: 0.3;
        border-radius: 8px 0px 0px 8px;
      }
      /deep/.el-input-group__append {
        border: none;
        background: #6672fb;
        color: white;
      }
      /deep/.el-input__inner {
        outline: none;
        border: none;
      }
    }
  }
  .class_table {
    .el-table__body-wrapper {
      height: auto !important;
    }
    /deep/.el-button--text {
      color: rgba(102, 114, 251, 1) !important;
    }
    span {
      color: #6672fb;
      padding: 0 2px;
    }
    .healthMsg {
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      float: left;
    }
    .detail {
      float: left;
      cursor: pointer;
    }
  }
  .class_pagination {
    padding: 2% 0;
  }
  .detail_dialog{
      .content{
        color: #333366;
        line-height: 22px;
        margin-bottom: 4%;
      }
      p{
          text-align:right;
          line-height: 26px;
      }
      .date{
          color: rgba(51, 51, 102, 0.5);
      }
  }
}
// 设置dialog弹窗的样式---圆角
/deep/.el-dialog{
    box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
    border-radius: 20px;
}
</style>                                                                                                                       