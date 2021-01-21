<template>
  <div class="broadcast">
    <div class="broadcast_tool_bar">
      <el-select v-model="value" clearable placeholder="全部用户">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" clearable placeholder="用户标签">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="broadcast_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
      <el-button
        type="primary"
        icon="el-icon-upload"
        class="batchInform"
        @click="batchInformDialog = true"
        >批量通知</el-button
      >
    </div>
    <!-- 展示表格 -->
    <div class="broadcast_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="date"
          label="建档时间"
          width="180"
          align="center"
        >
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
        <el-table-column type="selection" width="55"> </el-table-column>
      </el-table>
    </div>
    <div class="broadcast_pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        align="center"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="批量通知"
      :visible.sync="batchInformDialog"
      width="30%"
      :before-close="handleClose"
      class="batch_inform_dailog"
      center
    >
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="batch_inform_text"
        resize="none"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="batchInformDialog = false">取 消</el-button>
        <el-button type="primary" @click="batchInformDialog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      batchInformDialog: false,
      options: [
        {
          value: "选项1",
          label: "糖尿病",
        },
        {
          value: "选项2",
          label: "高血压",
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
      batch_inform_text:''
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
  },
};
</script>

<style lang="less" scoped>
.broadcast {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .broadcast_tool_bar {
    padding: 1% 0;
    .el-input__inner:focus {
      border: none !important;
    }
    .el-select {
      margin-right: 2%;
    }
    /deep/ .el-input__inner {
      border: 1px solid #6672fb;
      background: rgba(102, 114, 251, 0.05);
    }
    .broadcast_tool_search {
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
        background: none !important;
      }
      /deep/.el-input__inner:focus {
        border: none !important;
      }
    }
  }
  .broadcast_table {
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
  .broadcast_pagination {
    padding: 2% 0;
  }
  .batch_inform_dailog {
    // input获取焦点出现边框
    /deep/.el-textarea__inner {
      border: none !important;
      background: rgba(102, 114, 251, 0.05) !important;
    }
    /deep/.el-input__inner:focus,
    /deep/.el-textarea__inner:focus {
      border: 1px solid rgba(102, 114, 251, 1) !important;
      //   background: rgba(102, 114, 251, 0.05) !important;
    }
  }
  .batchInform {
    width: 140px;
    height: 44px;
    background: rgba(50, 137, 255, 1);
    border-radius: 8px;
    border: none;
    float: right;
  }
  /deep/.el-checkbox__inner::after {
    left: 5px !important;
  }

  // 设置dialog弹窗的样式---圆角
  /deep/.el-dialog {
    box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
    border-radius: 20px;
  }
}
</style>                                                                                                                       