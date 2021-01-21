<template>
  <div class="askRecord">
    <div class="ask_tool_bar">
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
    <!-- 展示表格 -->
    <div class="ask_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          prop="date"
          label="测量时间"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="name" label="项目" width="180" align="center">
        </el-table-column>
        <el-table-column prop="address" label="结果" align="center">
        </el-table-column>
        <el-table-column prop="address" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="address" label="性别" align="center">
        </el-table-column>
        <el-table-column prop="address" label="年龄" align="center">
        </el-table-column>
        <el-table-column prop="address" label="手机号" align="center">
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <!-- <template slot-scope="scope"> -->
          <el-button size="text" @click="dialogVisible = true">解读</el-button>
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
    <!-- 解读-对话框 -->
    <el-dialog
      title="解读"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="interpret">
        <p><span>测量时间：</span>2012-2-15</p>
        <p><span>测量项目：</span>血压</p>
        <div class="interpret_last">
          <p><span>测量结果：</span>135/55g</p>
          <p><span>心率：</span>135/55g</p>
        </div>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入解读内容"
          v-model="interpret_text"
          resize="none"
        >
        </el-input>
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
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  components: {
    videoPlayer,
  },
  data() {
    return {
      dialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "血糖",
        },
        {
          value: "选项2",
          label: "血压",
        },
        {
          value: "选项2",
          label: "心电",
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
    //   解读内容
      interpret_text:'',
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
  },
};
</script>

<style lang="less" scoped>
.askRecord {
  height: calc(100% - 2%);
  padding: 1% 6% 0% 3%;
  background: white;
  .ask_tool_bar {
    padding: 1% 0;
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
.interpret {
  p {
    line-height: 32px;
    color: #333366;
  }
  .interpret_last {
    p {
      float: left;
      margin-right: 4%;
      margin-bottom: 2%;
    }
  }
}

// input获取焦点出现边框
/deep/.el-input__inner:focus,/deep/.el-textarea__inner:focus  {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}

// 设置dialog弹窗的样式---圆角
/deep/.el-dialog{
    box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
    border-radius: 20px;
}
</style>                                                                                                                       