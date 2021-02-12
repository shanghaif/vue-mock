<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'ecgss'"
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

        yAxis: {
          type: "value",
          minorTick: {
            show: true,
          },
          minorSplitLine: {
            show: true,
          },
          
          minInterval: 80,
          interval: 80,
          //   axisLine: {
          //     // 隐藏y轴
          //     show: false,
          //   },
          //   axisTick: {
          //     // 隐藏y轴刻度线
          //     show: false,
          //   },
          //   axisLabel: {
          //     //隐藏Y轴的数值
          //     show: false,
          //   },
          //   splitLine: {
          //     // 自定义网格线样式
          //     lineStyle: {
          //       type: "line",
          //       smooth: true,
          //       color: "rgba(204, 204, 255, 0.2)",
          //     },
          //   },
        },
        // dataZoom: [
        //   {
        //     show: true,
        //     type: "inside",
        //     filterMode: "none",
        //   },
        //   {
        //     show: true,
        //     type: "inside",
        //     filterMode: "none",
        //   },
        // ],
        series: [
          {
            data: [],
            type: "line",
          },
          {
            data: [],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    this.echarts();
    window.addEventListener("resize", function () {
      myChartm.resize();
      document.getElementById("ecgss").style.width = "100" + "%";
    });
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("ecgss"));
      that.myChartm.setOption(that.option);
      get("https://pic.shanyide.cn/11111-1612251607840-ecg").then((res) => {
        let toSplit = res.data.split("\n").join("").split(" ");
        toSplit.pop();
        let aa = toSplit.slice(0, 1000);
        let bb = toSplit.slice(1000, 2000);
        let heartDataAa = [];
        let heartDataBb = [];
        for (let item of aa) {
          item = item > 0 ? Number(item) - 128 : Number(item) + 128;
          heartDataAa.push(item);
        }
         for (let item of bb) {
          item = item > 0 ? Number(item) - 128 : Number(item) + 128;
          heartDataBb.push(item);
        }
        this.myChartm.setOption({
          series: [
            {
              data: heartDataAa,
            },
            {
              data: heartDataBb,
            },
          ],
        });
      });
    },
  },
};
</script>
