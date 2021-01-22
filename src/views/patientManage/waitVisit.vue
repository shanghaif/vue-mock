<template>
  <div class="askRecord">
    <div class="ask_tool_bar">
      <div class="ask_tool_date">
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
      <div class="ask_tool_search">
        <el-input placeholder="请输入内容" v-model="input1">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search">搜索</template>
        </el-input>
      </div>
    </div>
    <!-- 展示表格 -->
    <div class="ask_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="咨询" width="180" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="医护人员" align="center">
        </el-table-column>
        <el-table-column prop="address" label="咨询时长" align="center">
        </el-table-column>
        <el-table-column prop="address" label="储存空间" align="center">
        </el-table-column>
        <el-table-column prop="address" label="储存空间" align="center">
          <!-- <template slot-scope="scope"> -->
          <el-button size="text" @click="dialogVisible = true">随访</el-button>
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
    <!-- 查看-对话框 -->
    <el-dialog
      title="随访"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="visited">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
         
        >
          <el-form-item label="随访状态" prop="name">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="本次随访内容" prop="region">
            <p>
              最忠诚从不是发顺丰就是空的发，圣诞节客服骨伤科交电费健康的风格萨
            </p>
            <!-- <el-input v-model="ruleForm.name"></el-input> -->
          </el-form-item>
          <el-form-item label="下次随访时间" prop="name">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="下次随访时间" prop="name">
            <el-input
              type="textarea"
              v-model="ruleForm.name"
              resize="none"
              :rows="4"
            ></el-input>
          </el-form-item>
          <div style="margin-top: 15px">
            <el-input
              placeholder="自定义常用语"
              v-model="phrase_text"
              class="customPhrase"
              style="height: 44px"
            >
              <el-button slot="append" @click="addPharse">添加</el-button>
            </el-input>
          </div>
          <div class="phraseContainer">
            <div
              class="phraseBar"
              v-for="(item, index) in phraseLists"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
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
      dialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "今日待随访",
        },
        {
          value: "选项2",
          label: "3天内待随访",
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
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
      },
      // 设置随访--常用语（放一个数组里面，添加就添加到数组里面）
      phrase_text: "",
      phraseLists: ["糖尿病"],
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 添加常用语的btn
    addPharse() {
      if (this.phrase_text == "") return;
      this.phraseLists.push(this.phrase_text);
      this.phrase_text = "";
      // console.log(this.phrase_text,'添加的常用语')
    },
  },
};
</script>

<style lang="less" scoped>
.askRecord {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .ask_tool_bar {
    padding: 1% 0;
    .ask_tool_date {
      float: left;
      margin-right: 30px;
      span {
        padding-right: 14px;
      }
      // /deep/ .el-input__inner {
      //   border: 1px solid #6672fb;
      //   background: rgba(102, 114, 251, 0.05);
      // }
    }
    .ask_tool_search {
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
  .ask_table {
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
.visited{
    /deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
     /deep/.el-input-group > .el-input__inner {
    border-radius: 26px 0 0 26px !important;
  }
  /deep/.el-input-group__append {
  border: none;
  border-radius: 0 26px 26px 0;
  cursor: pointer;
}
  .phraseContainer {
    margin-top: 12px;
    .phraseBar {
      width: calc(100% - 4%);
      height: 44px;
      font-size: 14px;
      line-height: 44px;
      background: #fafafa;
      border: 1px solid #eeeeee;
      border-radius: 27px;
      color: #333366;
      padding-left: 4%;
      margin-bottom: 12px;
    }
  }
}

// input获取焦点出现边框
/deep/.el-input__inner:focus,
/deep/.el-textarea__inner:focus {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-input__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}

// 设置dialog弹窗的样式---圆角
/deep/.el-dialog{
    box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
    border-radius: 20px;
}

</style>                                                                                                                       