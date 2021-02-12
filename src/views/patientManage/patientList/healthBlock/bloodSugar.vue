<template>
  <div class="bloodSugar">
    <!--  血糖数据 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>血糖习惯</p>
        <div class="detail_more_btn">
          <el-button type="primary" round @click="moreData">更多资料</el-button>
        </div>
      </div>
      <div class="blood_msg_container clearfix">
        <MyEcharts
          :id="'exampleId'"
          :style="{ width: '63vw', height: '380px' }"
          :option="option"
        >
        </MyEcharts>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "@/request/http";
import bloodSugar from "../bloodSugar";
import MyEcharts from "@/components/echarts/index";
export default {
  components: {
    MyEcharts,
  },
  data() {
    return {
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          show: false,
        },
        tooltip: {
          show: true,
          trigger: "axis"
        },
        yAxis: {
          type: "value",
          axisLine: {
            // 隐藏y轴
            show: false,
          },
          axisTick: {
            // 隐藏y轴刻度线
            show: false,
          },
          axisLabel: {
            //隐藏Y轴的数值
            show: false,
          },
          splitLine: {
            // 自定义网格线样式
            lineStyle: {
              type: "solid",
              color: "rgba(204, 204, 255, 0.2)",
            },
          },
        },
        series: [
          {
            data: [],
            type: "line",
            symbol: "emptyCircle",
            symbolSize: 6,
          },
        ],
      },
    };
  },
  mounted() {
    this.echarts();
    window.addEventListener("resize", function () {
      myChartm.resize();
      document.getElementById("exampleId").style.width = "100" + "%";
    });
  },
  methods: {
    moreData() {
      this.$router.push({ name: "PatientEdit", query: { editIndex: "6" } });
    },
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("exampleId"));
      that.myChartm.setOption(that.option);

      let toSplitField = [];
      let toSplitFlag = [];
      let extendFieldData = []
      let measureFlagData = []
      post("/api/dataGlucose/list/findGlucoseListByDayAndTime", {
        size: 40,
        id: 11111,
      }).then((res) => {
        if (res.data.code == 0) {
          console.log(res,'血糖数据')
          for (let item of res.data.data) {
            toSplitField += item.extendField + ";";
            extendFieldData = toSplitField.split(";").map(Number);

            toSplitFlag += item.measureFlag + ";";
            measureFlagData = toSplitFlag.split(";").map(Number);
          }
             this.myChartm.setOption({
              xAxis: {
                data: measureFlagData,
              },
              series: [
                {
                  data: extendFieldData,
                },
              ],
            });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>