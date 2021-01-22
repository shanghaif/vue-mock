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
          left: 10,
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
      let echartsETCB = []; //所有数据
      let tuliData = []; //图例数据
      echartsETCB.push(res.data.tests);
      let echartsData = echartsETCB[0].data;
      console.log(echartsData, "图例的数据");
      // 整理图例--数据----start
      // for (let item of echartsData) {
      //   var data = {
      //     name: item.name,
      //     value: item.value,
      //   };
      //   tuliData.push(data);
      //   console.log(tuliData,'图例数据：：：：：')
      // }
      let objData = array2obj(echartsData, "name");
      
      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }
      // 整理图例--数据----end
      that.myChartm.setOption({
        title: {
          text: echartsETCB[0].name, //可以写死 也可以用后台传回来的数据 title
          left: "center",
        },
        legend: {
          data: echartsData,
          formatter: function (name) {
            console.log(name, echartsData, "name::::");
            return `${name}:${objData[name].value}`;
          },
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
#echartsM {
  float: left;
}
</style>