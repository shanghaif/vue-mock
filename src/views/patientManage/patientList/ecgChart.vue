<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'ecgss'"
      :style="{ width: '48vw', height: '380px' }"
      :option="option"
    >
    </MyEcharts>
  </div>
</template>

<script>
import { get, post } from "../../../request/http";
import MyEcharts from "@/components/echarts/index"; //echarts
export default {
  components: {
    MyEcharts,
  },
  props:["ecgUrl"],
  watch:{
    ecgUrl:{
      handler(newVal,oldVal){
        console.log(newVal,oldVal)
        this.echarts(newVal);
      }
    }
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
        yAxis: [
          {
            type: "value",
            minInterval: 100,
            interval: 100,
             min:-310,
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
             min:-310,
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
    this.echarts();
    window.addEventListener("resize", function () {
      myChartm.resize();
      document.getElementById("ecgss").style.width = "100" + "%";
    });
  },
  methods: {
    echarts(newVal) {
      let that = this;
      console.log(newVal)
      that.myChartm = that.$echarts.init(document.getElementById("ecgss"));
      that.myChartm.setOption(that.option);
      get("https://pic.shanyide.cn/11111-1612251607840-ecg").then((res) => {
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
  },
};
</script>
