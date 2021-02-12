<template>
  <!-- <div style="height: 300px; width: 100%" id="echartsM"></div> -->
    <MyEcharts
      :id="'echartsM'"
      :style="{ width: '100%', height: '300px' }"
      :option="option"
    >
    </MyEcharts>
</template>

<script>
import { get, post } from "../../../request/http";
import MyEcharts from "@/components/echarts/index"; 
export default {
  name: "echartsM",
  components: {
    MyEcharts,
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"],
          top: 20,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            // saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false,
          // data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
        series: [],
      },
    };
  },
  mounted() {
    this.echarts();
    window.addEventListener("resize", function () {
      myChartm.resize();
    });
    document.getElementById("echartsM").style.width = "100" + "%";
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("echartsM"));
      that.myChartm.setOption(that.option);
    },
  },

  created() {
    let highPressData = [];
    let lowPressData = [];
    get(`/api/bloodPressure/getChart/1`, {
      num: 30,
    }).then((res) => {
      console.log(res,'::::::::::::::::::::::::::;')
      for (let item of res.data.data) {
        highPressData.push(item.high);
        lowPressData.push(item.low);
        this.myChartm.setOption({
          series: [
            {
              name: "低压",
              type: "line",
              stack: "总量",
              data: lowPressData,
              itemStyle: {
                normal: {
                  color: "#FF8333", //折线点的颜色
                  lineStyle: {
                    color: "#FF8333", //折线的颜色
                  },
                },
              },
            },
            {
              name: "高压",
              type: "line",
              stack: "总量",
              data: highPressData,
              itemStyle: {
                normal: {
                  color: "#6672FB", //折线点的颜色
                  lineStyle: {
                    color: "#6672FB", //折线的颜色
                  },
                },
              },
            },
          ],
        });
      }
    });
  },
};
</script>

<style scoped>
#echartsM {
  float: left;
}
</style>