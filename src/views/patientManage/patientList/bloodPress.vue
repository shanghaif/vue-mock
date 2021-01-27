<template>
  <div style="height: 300px; width: 100%" id="echartsM"></div>
</template>

<script>
import { get, post } from "@/request/http";
export default {
  name: "echartsM",
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"],
          top:20
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
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
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
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