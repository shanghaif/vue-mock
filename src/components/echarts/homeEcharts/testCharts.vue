<template>
  <div style="height: 300px; width: 300px" id="echartsM"></div>
</template>

<script>
import { get, post } from "@/request/http";
export default {
  name: "echartsM",
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },  
        legend: {
          orient: "vertical",
          left: 10
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    this.echarts();
    window.addEventListener("resize", function () {
      myChartm.resize();
    });
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("echartsM"));
      that.myChartm.setOption(that.option);
    },
  },
  created() {
    let that = this;
    let url = "/tests";
    get(`/echarts`).then((res) => {
      console.log(res.data.tests.data, "mock出来的echarts数据");
      let echartsETCB = [];  //所有数据
      let tuliData = []  //图例数据
      echartsETCB.push(res.data.tests);
      let echartsData = echartsETCB[0].data
      for( let item of echartsData){
          tuliData.push(item.name)
      }
      that.myChartm.setOption({
        title: {
          text: echartsETCB[0].name, //可以写死 也可以用后台传回来的数据 title
          left: "center",
        },
        legend: {
          data: tuliData,
        },
        series: [
          {
            data: echartsData,
          },
        ],
      });
    });
  },
};
</script>

<style scoped>
#echartsM{
    float: left;
}
</style>