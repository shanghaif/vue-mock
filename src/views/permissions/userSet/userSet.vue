<template>
  <div class="waitAppointment">
    <div class="wait_tool_bar">
      <div class="wait_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
      <el-button type="primary" class="addPerson" icon="el-icon-circle-plus-outline" @click="add_person"
        >新增人员</el-button
      >
    </div>
    <!-- 展示表格 -->
    <div class="wait_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="昵称" align="center">
        </el-table-column>
        <el-table-column prop="address" label="手机号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="角色" align="center">
        </el-table-column>
        <el-table-column prop="address" label="最后登录IP" align="center">
        </el-table-column>
         <el-table-column prop="address" label="状态" align="center">
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
    add_person(){
        this.$router.push('/AddPerson')
    }
  },
};
</script>

<style lang="less" scoped>
.waitAppointment {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .wait_tool_bar {
    padding: 1% 0;
    .el-input__inner:focus {
      border: none !important;
    }
    .wait_tool_search {
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
  .addPerson {
    width: 140px;
    height: 44px;
    background: rgba(50, 137, 255, 1);
    border-radius: 8px;
    border: none;
    float: right;
  }
}
// 设置dialog弹窗的样式---圆角
/deep/.el-dialog {
  box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
  border-radius: 20px;
}
</style>                                                                                                                       