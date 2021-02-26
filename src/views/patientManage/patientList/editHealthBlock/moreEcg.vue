<template>
  <div class="moreEcg">
    <!-- 展示表格 -->
    <div class="more_ecg">
      <el-table :data="ecgTableData" border style="width: 100%">
        <el-table-column
          prop="createTime"
          label="检测时间"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="hr" label="心率" align="center">
        </el-table-column>
        <el-table-column prop="doctorRead" label="医生解读" align="center">
        </el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="text"
              @click="seeEcgDialog(scope.$index, scope.row)"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="ask_pagination">
      <el-pagination
        background
        @current-change="handelCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="count"
        align="center"
      >
      </el-pagination>
    </div>
    <!-- 解读-对话框 -->
    <el-dialog
      title="解读"
      :visible.sync="dialogVisible"
      width="50%"
      center
    >
      <div class="interpret">
        <p><span>测量时间：</span>{{ testEcgTime }}</p>
         <MyEcharts
      :id="'ecgUrl'"
      :style="{ width: '48vw', height: '380px' }"
      :option="option"
    >
    </MyEcharts>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入解读内容"
          v-model="docotor_read"
          resize="none"
        >
        </el-input>
      </div>
      <div class="customText">
        <el-tag
          :key="index"
          v-for="(item, index) in oftenSpeak"
          closable
          :disable-transitions="false"
          @close="handleClosed(item)"
          @click="doublePush(item)"
        >
          {{ item }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="oftenSpeakVisible"
          v-model="oftenSpeakValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="addOftenSpeak"
          @blur="addOftenSpeak"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+自定义常用语</el-button
        >
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveDoctorRead"
          >保 存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { get, post,put } from "../../../../request/http";
import MyEcharts from "@/components/echarts/index"; //echarts
export default {
  components: { MyEcharts },
  data() {
    return {
      // tag
      docotor_read: "",
      oftenSpeak: [],
      oftenSpeakVisible: false,
      oftenSpeakValue: "",
      // tag
      ecgTableData: [],
      dialogVisible: false,
      testEcgTime: null,
      //   解读内容
      interpret_text: "",
      id:'',//主键id

      // 分页
      count: 0,
      pageSize: 10,
      currentPage: 1,
      ecgUrl:'',
      option: {
        grid: {
          top: 40,
          left: 50,
          right: 40,
          bottom: 50,
        },
        xAxis: {
          type: "category",
        },
        yAxis: [
          {
            type: "value",
            minInterval: 100,
            interval: 100,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
          {
            nameLocation: "start",
            type: "value",
            inverse: true,
            max: 160,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
          {
            type: "value",
            inverse: true,
            min: -210,
            max: 30,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            data: [],
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1.6,
                  color: "	#CE0000",
                },
              },
            },
          },
          {
            data: [],
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1.6,
                  color: "	#CE0000",
                },
              },
            },
          },
          {
            data: [],
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1.6,
                  color: "	#CE0000",
                },
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    window.addEventListener("resize", function () {
      myChartm.resize();
      document.getElementById("ecgUrl").style.width = "100" + "%";
    });
  },
  created() {
    this.getEcgData();
    // 查询--自定义常用语
      get(`/api/userfulExpress/list/${localStorage.getItem('userId')}?expressType=0`).then((res) => {
        for (let item of res.data.data) {
          this.oftenSpeak.push(item.content);
        }
      });
  },
  
  methods: {
    handleClosed(tag) {
      this.oftenSpeak.splice(this.oftenSpeak.indexOf(tag), 1);
    },
    // 点击自定义语句--push
    doublePush(tag) {
      this.docotor_read += tag + " ";
    },
    showInput() {
      this.oftenSpeakVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    async addOftenSpeak() {
      let oftenSpeakValue = this.oftenSpeakValue;
      if (oftenSpeakValue) {
        if (this.oftenSpeak.indexOf(oftenSpeakValue) == -1) {
          this.oftenSpeak.push(oftenSpeakValue);
          // 添加常用语
          let res = await post("/api/userfulExpress", {
            content: oftenSpeakValue,
            expressType: 0,
            userId: localStorage.getItem("userId"),
          });
          try {
            console.log(res.data.code);
          } catch (error) {
            console.log(error);
          }
        } else {
          this.$message({
            message: "已存在",
            type: "warning",
          });
          // return this.oftenSpeak
        }
      }
      this.oftenSpeakVisible = false;
      this.oftenSpeakValue = "";
    },
    // 更多数据---获取心电列表
    async getEcgData() {
      const getEcg = await get(
        `/api/dataEcg/list/11111?pageNum=${this.currentPage}&pageSize=${this.pageSize}`
      );
      try {
        if (getEcg.status === 200) {
          console.log(getEcg,'心电列表数据')
          this.ecgTableData = getEcg.data.data;
          this.count = Number(getEcg.data.count)
        }
      } catch (error) {
        console.log("抛出错误");
      }
    },
    // 查看
    seeEcgDialog(index, row) {
      console.log(row.id, "心电查看");
      this.testEcgTime = row.createTime;
      this.id = row.id
      this.dialogVisible = true;
      this.ecgUrl  =  row.ecgUrl

      // 查看---获取心电数据--绘制心电图表
      this.$nextTick(() => {
        this.echarts(row.ecgUrl)
      })
      
    },
    echarts(ecgUrl) {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("ecgUrl"));
      that.myChartm.setOption(that.option);
      get(ecgUrl).then((res) => {
        console.log(res)
        let toSplit = res.data.split("\n").join("").split(" ");
        toSplit.pop();
        let aa = toSplit.slice(0, 1000);
        let bb = toSplit.slice(1000, 2000);
        let cc = toSplit.slice(2000, 3000);
        let heartDataAa = [];
        let heartDataBb = [];
        let heartDataCc = [];
        for (let item of aa) {
          item = item > 0 ? Number(item) - 128 : Number(item) + 128;
          heartDataAa.push(item);
        }
        for (let item of bb) {
          item = item > 0 ? Number(item) - 128 : Number(item) + 128;
          heartDataBb.push(item);
        }
        for (let item of cc) {
          item = item > 0 ? Number(item) - 128 : Number(item) + 128;
          heartDataCc.push(item);
        }
        this.myChartm.setOption({
          series: [
            {
              yAxisIndex: 1,
              data: heartDataAa,
            },
            {
              yAxisIndex: 2,
              data: heartDataCc,
            },
            {
              data: heartDataBb,
            },
          ],
        });
      });
    },
    // 解读---确定
    saveDoctorRead(){
      console.log(this.id,'获取id');
      this.$confirm("是否要保存?")
        .then((_) => {
          put(`/api/dataEcg/${this.id}`,{
            doctorRead:this.docotor_read
          }).then(res => {
            this.dialogVisible = false;
            if(res.status === 200) {
              this.docotor_read = ""
              this.getEcgData()
            }else{
              console.log('报错')
            }
          })
        })
        .catch((_) => {});
    },
    // 改变分页
    changePage() {
      console.log("改变分页");
    },
    handelCurrentChange(val) {
      this.currentPage = val;
      this.getEcgData();
    },
  },
};
</script>

<style lang="less" scoped>
.moreEcg {
  height: calc(100% - 2%);
  padding: 1% 3% 0% 3%;
  background: white;
  border-radius: 20px;
  .more_ecg {
    padding-top: 2%;
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
    margin-bottom: 1%;
  }
}

// input获取焦点出现边框
/deep/.el-input__inner:focus,
/deep/.el-textarea__inner:focus {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}

// 设置dialog弹窗的样式---圆角
/deep/.el-dialog {
  box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
  border-radius: 20px;
}

// tag
.customText {
  margin: 1% 0;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>                                                                                                                       