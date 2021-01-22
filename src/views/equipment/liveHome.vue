<template>
  <div class="liveHome">
    <div class="liveHome_tool_bar">
      <div class="liveHome_tool_type">
        <el-select v-model="value" clearable placeholder="全部设备">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="liveHome_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
      <el-button type="primary" icon="el-icon-upload" class="batchAdd" @click="batch_add">设备入库</el-button>
    </div>
    <!-- 展示表格 -->
    <div class="liveHome_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="设备名称" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="设备型号" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="设备编号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="Android版本" align="center">
        </el-table-column>
         <el-table-column prop="address" label="软件版本" align="center">
        </el-table-column>
         <el-table-column prop="address" label="当前用户" align="center">
        </el-table-column>
         <el-table-column prop="address" label="包含服务" align="center">
        </el-table-column>
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      </el-table>
    </div>
    <div class="liveHome_pagination">
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
      input1:'',
      watchVedio: false,
      options: [
        {
          value: "选项1",
          label: "全部设备",
        },
        {
          value: "选项2",
          label: "已绑定",
        },
        {
          value: "选项3",
          label: "未绑定",
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
  computed:{
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 批量添加
    batch_add(){
        console.log('批量添加')
        // this.$router.push('/ClassManage')
    }
  },
};
</script>

<style lang="less" scoped>
.liveHome {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .liveHome_tool_bar {
    padding: 1% 0;
    .el-input__inner:focus{
        border: none !important;
    }
    .liveHome_tool_type {
      float: left;
      margin-right: 30px;
      /deep/ .el-input__inner {
        border: 1px solid #6672fb;
        background: rgba(102, 114, 251, 0.05);
      }
    }
    .liveHome_tool_search {
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
  .liveHome_table {
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
  .liveHome_pagination {
    padding: 2% 0;
  }
 .batchAdd{
        width: 140px;
        height: 44px;
        border: none !important;
    background:rgba(255, 120, 21, 1) !important;
        border-radius: 8px;
        float: right;
  }
}
// 设置dialog弹窗的样式---圆角
  /deep/.el-dialog {
    box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
    border-radius: 20px;
  }
</style>                                                                                                                       