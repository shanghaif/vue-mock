
<template>
  <div class="index">
    <MyEcharts :id="'ecgChart'" :style="{ height: '380px' }" :option="option">
    </MyEcharts>
    <div></div>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index";
export default {
  components: {
    MyEcharts,
  },
  props: ["echarsDatas"],
  watch: {
    echarsDatas: {
      handler(newval, oldval) {
        console.log(newval, oldval);
        if (newval) {
          this.echarts();
        }
        return newval;
      },
      deep: true,
    },
  },
  data() {
    return {
      ecgDatas:[],
      option: {
        animation: false,
        grid: {
          top: 40,
          left: 50,
          right: 40,
          bottom: 50,
        },
        xAxis: {
          name: "x",
          minorTick: {
            show: true,
          },
          splitLine: {
            lineStyle: {
              color: "#999",
            },
          },
          minorSplitLine: {
            show: true,
            lineStyle: {
              color: "#ddd",
            },
          },
        },
        yAxis: {
          name: "y",
          min: -100,
          max: 100,
          minorTick: {
            show: true,
          },
          splitLine: {
            lineStyle: {
              color: "#999",
            },
          },
          minorSplitLine: {
            show: true,
            lineStyle: {
              color: "#ddd",
            },
          },
        },
        // 实现放大缩小的
        // dataZoom: [
        //   {
        //     show: true,
        //     type: "inside",
        //     filterMode: "none",
        //     xAxisIndex: [0],
        //     startValue: -20,
        //     endValue: 20,
        //   },
        //   {
        //     show: true,
        //     type: "inside",
        //     filterMode: "none",
        //     yAxisIndex: [0],
        //     startValue: -20,
        //     endValue: 20,
        //   },
        // ],
        series: [
          {
            type: "line",
            showSymbol: false,
            clip: true,
            data: this.ecgDatas,
          },
        ],
      },
      chartOption: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    //  console.log('222222222',this.ecgDatas)
    this.echarts();
    document.getElementById("ecgChart").style.width = "32" + "%";
    window.addEventListener("resize", function () {
      myChartm.resize();
    });
  this.myChartm.setOption({
        series: [
          {
            data: this.ecgDatas
          }
        ],
      });
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(
        document.getElementById("ecgChart")
      );
      that.myChartm.setOption(that.option);
    },
    func(x) {
      x /= 10;
      return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
    },
    generateData() {
      let data = [];
      for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, this.func(i)]);
      }
      return data;
    },
  },
  created() {
    console.log(this.generateData())
    this.ecgDatas = this.generateData()
  },
};
</script>

<style lang="less" scoped>
#ecgChart {
  width: 32% !important;
  float: left;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
  padding: 10px 0;
  margin-bottom: 20px;
}
</style>
