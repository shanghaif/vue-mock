<template>
  <div class="askRecord">
    <div class="ask_tool_bar">
      <div class="ask_tool_date">
        <span>资讯管理</span>
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
          <el-button size="text" @click="dialogVisible = true">查看</el-button>
          <span>|</span>
          <el-button size="text" type="danger">下载</el-button>
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
       <div class='demo'>
      <video-player class="video-player vjs-custom-skin" 
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions">
      </video-player>
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
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    components: {
    videoPlayer
  },
  data() {
    return {
      input1:'',
      dialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
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
       playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: false, // 如果为true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 是否视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4", // 类型
              src: 'https://vd2.bdstatic.com/mda-kbazfph7in6y70z1/sc/mda-kbazfph7in6y70z1.mp4?v_from_s=tc_videoui_4135&auth_key=1610950796-0-0-c558652be4a8d8c0c4221929e11b8970&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=8656_1-8811_1.mp4' // url地址
            }],
            poster: require('../../assets/images/login/login_bg.png'), // 封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
          }
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
        color:white ;
        
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

</style>                                                                                                                       