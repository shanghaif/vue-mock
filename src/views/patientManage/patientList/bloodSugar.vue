<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'exampleId'"
      :style="{ width: '100%', height: '380px' }"
      :option="option"
    >
    </MyEcharts>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index"; //echarts
import {get,post} from "@/request/http"
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false,
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
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            symbol:'emptyCircle',
             symbolSize:6,
          },
        ],
      },
    };
  },
  mounted() {
    this.echarts();
    this.getBloodSugar()
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
    },
    async getBloodSugar(){
      let res = await get('/healthEcharts/dataGlucose/list/11111?pageNum=1&pageSize=9&measureFlag=3')
      console.log(res,'777')
    }
  },
};
</script>










