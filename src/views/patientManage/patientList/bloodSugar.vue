<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'exampleId'"
      :style="{ width: '63vw', height: '380px' }"
      :option="option"
    >
    </MyEcharts>
  </div>
</template>

<script>
import axios from "axios";
import { get, post } from "../../../request/http";
import MyEcharts from "@/components/echarts/index"; //echarts
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
          trigger: "axis", // axis   item   none三个值
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
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("exampleId"));
      that.myChartm.setOption(that.option);

      let toSplitField = [];
      let toSplitFlag = [];
      post("/api/dataGlucose/list/findGlucoseListByDayAndTime", {
        size: 40,
        id: 11111,
      }).then((res) => {
        if (res.data.code == 0) {
          for (let item of res.data.data) {
            toSplitField += item.extendField+';'
            let extendFieldData = toSplitField.split(';').map(Number)

            toSplitFlag += item.measureFlag+';'
            let measureFlagData = toSplitFlag.split(';').map(Number)
            this.myChartm.setOption({
              xAxis: {
                data:measureFlagData,
              },
              series: [
                {
                  data: extendFieldData,
                },
              ],
            });
          }
        }
      });
    },
  },
};
</script>
