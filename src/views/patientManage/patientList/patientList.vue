<template>
  <div class="patientList">
    <div class="patientList_tool_bar">
      <div class="patientList_tool_type">
        <el-select v-model="value" clearable placeholder="全部用户">
          <el-option
            v-for="item in all_users"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value" clearable placeholder="用户标签">
          <el-option
            v-for="item in users_label"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="patientList_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
    </div>
    <!-- 展示表格 -->
    <div class="patientList_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="date"
          label="讲座标题"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="讲座分类"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="address" label="所属系列" align="center">
        </el-table-column>
        <el-table-column prop="address" label="加入时间" align="center">
        </el-table-column>
        <el-table-column prop="address" label="加入成员" align="center">
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <!-- <template slot-scope="scope"> -->
          <el-button size="text" @click="patientList_watch">查看</el-button>
          <span>|</span>
          <el-button size="text" type="danger" @click="patientList_edit"
            >编辑</el-button
          >
          <!-- </template> -->
        </el-table-column>
      </el-table>
    </div>
    <div class="ask_pagination">
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
      all_users: [
        {
          value: "选项1",
          label: "全部用户",
        },
        {
          value: "选项2",
          label: "签约用户",
        },
        {
          value: "选项3",
          label: "普通用户",
        },
      ],
      users_label: [
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
      ]
    };
  },
  computed: {
  },
  methods: {
    // 编辑
    patientList_edit() {
      console.log('编辑')
      this.$router.push('/PatientEdit')
    },
    // 查看
    patientList_watch() {
        console.log('查看')
        // this.$router.push('/Patienthealth')
        this.$router.push('/Patientwatch')
    },
  },
};
</script>

<style lang="less" scoped>
.patientList {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .patientList_tool_bar {
    padding: 1% 0;
    .patientList_tool_type {
      float: left;
      margin-right: 30px;
      /deep/ .el-input__inner {
        border: 1px solid #6672fb;
        background: rgba(102, 114, 251, 0.05);
      }
      .el-select{
          margin-right: 20px;
      }
    }
    .patientList_tool_search {
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
  .patientList_table {
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
  .ask_pagination {
    padding: 2% 0;
  }
}
</style>                                                                                                                       