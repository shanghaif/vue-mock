<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'exampleId'"
      :style="{ width: '100%', height: '380px' }"
      :option="chartOption"
    >
    </MyEcharts>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index"; //echarts
// import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  components: {
    MyEcharts,
  },
  data() {
    return {
      chartOption: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    this.initCharts();
    this.initCharts();
    document.getElementById("exampleId").style.width = "30" + "%"
    let shopCharts = this.$echarts.init(document.getElementById("exampleId"))
  },
  methods: {
    initCharts() {
      this.chartOption = {
        title: {
          text: "折线图",
        },
        tooltip: {
          trigger: "axis",
          confine: true, //是否将 tooltip 框限制在图表的区域内。  true为是
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            return params;
          },
        },
        legend: {
          data: [],
          top: "93%",
          right: "center",
          bottom: "center",
          left: "center",
          textStyle: {
            color: this.echartsXYcolor,
          },
        },
        grid: {
          top: "3%",
          left: "100px",
          right: "100px",
          bottom: "100px",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            lineStyle: {
              color: this.echartsXYcolor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.echartsXYcolor,
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
          {
            type: "slider",
            top: "82%",
            textStyle: {
              color: this.echartsXYcolor,
            },
          },
        ],
        yAxis: {
          axisLine: {
            lineStyle: {
              color: this.echartsXYcolor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.echartsXYcolor,
            },
            formatter: function (val) {
              return (val * 1).toFixed(2) + "%";
            },
          },
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            lineStyle: {
              color: this.lineColor, // 线的颜色
            },
            itemStyle: {
              color: this.lineColor, // 图例的颜色
            },
            showSymbol: false, // 不显示symbol
            data: [120, 132, 101, 134, 90, 230, 210],
          },
        ],
      };
    },
  },
};
</script>










