<template>
  <div class="waitAppointment">
      <el-button type="primary" class="addRole" icon="el-icon-circle-plus-outline" @click="add_role"
        >新增角色</el-button
      >
    <!-- 展示表格 -->
    <div class="wait_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="角色名称" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="权限" align="center">
        </el-table-column>
        <el-table-column prop="address" label="用户数" align="center">
        </el-table-column>
         <el-table-column prop="address" label="储存空间" align="center">
          <!-- <template slot-scope="scope"> -->
          <el-button size="text" @click="dialogVisible = true">编辑</el-button>
          <span>|</span>
          <el-button size="text" type="danger">删除</el-button>
          <!-- </template> -->
        </el-table-column>
      </el-table>
    </div>
    <div class="addLecture_pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        align="center"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      //   批量通知
      batch_inform: false,
      watchVedio: false,
      options: [
        {
          value: "选项1",
          label: "今日到期",
        },
        {
          value: "选项2",
          label: "本周到期",
        },
        {
          value: "选项3",
          label: "本月到期",
        },
      ],
      value: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
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
    };
  },
  computed: {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    add_role(){
        this.$router.push('/AddRole')
    }
  },
};
</script>

<style lang="less" scoped>
.waitAppointment {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .wait_table {
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
  }
  .addLecture_pagination {
    padding: 2% 0;
  }
  .addRole {
    width: 140px;
    height: 44px;
    background: rgba(50, 137, 255, 1);
    border-radius: 8px;
    border: none;
    float: right;
    margin-bottom:1%;
  }
}
// 设置dialog弹窗的样式---圆角
/deep/.el-dialog {
  box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
  border-radius: 20px;
}
</style>                                                                                                                       