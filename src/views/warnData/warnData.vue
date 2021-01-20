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
        <el-table-column prop="date" label="时间" width="180" align="center">
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
          <el-button size="text">查看</el-button>
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
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
    <div>查看对话框</div>
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
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    components: {
    videoPlayer
  },
  data() {
    return {
      dialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "待处理",
        },
        {
          value: "选项2",
          label: "已完成",
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
      player(){
          return this.$refs.videoPlayer.player
      }
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
/deep/ .el-table__header-wrapper{
    
}
</style>                                                                                                                       