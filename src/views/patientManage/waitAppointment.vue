<template>
  <div class="waitAppointment">
    <div class="wait_tool_bar">
      <div class="wait_tool_type">
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="wait_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
      <el-button type="primary" class="batchInform" @click="batch_inform = true">批量通知</el-button>
    </div>
    <!-- 展示表格 -->
    <div class="wait_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="到期日期" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="性别" align="center">
        </el-table-column>
        <el-table-column prop="address" label="年龄" align="center">
        </el-table-column>
        <el-table-column prop="address" label="手机号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="用户标签" align="center">
        </el-table-column>
        <el-table-column
      type="selection"
      width="55">
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
    <!-- 批量通知--弹出框 -->
    <el-dialog
  title="提示"
  :visible.sync="batch_inform"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="batch_inform = false">取 消</el-button>
    <el-button type="primary" @click="batch_inform = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1:'',
    //   批量通知
      batch_inform:false,
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
        }
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
      ]
    };
  },
  computed:{
  },
  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
  }
};
</script>

<style lang="less" scoped>
.waitAppointment {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .wait_tool_bar {
    padding: 1% 0;
    .el-input__inner:focus{
        border: none !important;
    }
    .wait_tool_type {
      float: left;
      margin-right: 30px;
      /deep/ .el-input__inner {
        border: 1px solid #6672fb;
        background: rgba(102, 114, 251, 0.05);
      }
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
 .batchInform{
        width: 140px;
        height: 44px;
        background: rgba(50, 137, 255, 1);
        border-radius: 8px;
        border: none;
        float: right;
  }
}
</style>                                                                                                                       