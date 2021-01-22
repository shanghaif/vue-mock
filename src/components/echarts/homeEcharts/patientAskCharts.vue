
<template>
  <div class="index">
    <MyEcharts
      :id="'bloodPressId'"
      :style="{ height: '380px' }"
      :option="option"
    >
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
      option: {
        title: {
          text: "患者咨询",
          padding:[20,0,0,20],
          textStyle: {
            fontFamily: '幼圆',
            lineHeight:20,
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          width: 200,
          orient: "vertical",
          right: 100,
          top: 160,
          textStyle: {
            // 修改图例的样式
            rich: {
              title: {
                color: "#333366",
                fontSize: 16,
              },
              value: {
                color: "#333366",
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "HuaKang",
                padding: [0, 10, 0, 10],
              },
            },
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "40%"],
            // 修改饼图的左右上下位置['左右'，'上下']
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: "#fff",
                label: {
                  show: false, //隐藏标示文字
                },
                labelLine: {
                  show: false, //隐藏标示线
                },
              },
            },
            data: [],
          },
        ],
      },
      chartOption: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    this.echarts();
    document.getElementById("bloodPressId").style.width = "32" + "%";
    window.addEventListener("resize", function () {
      myChartm.resize();
    });
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(
        document.getElementById("bloodPressId")
      );
      that.myChartm.setOption(that.option);

      let echartsETCB = JSON.parse(JSON.stringify(this.echarsDatas));
      console.log(echartsETCB, "患者咨询的数据:::");
      let tuliData = [];
      let objData = array2obj(echartsETCB[0].data, "name");
      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }
      // 显示图例的数值---end

      this.myChartm.setOption({
        title: {
          text:echartsETCB[0].name, //可以写死 也可以用后台传回来的数据 title
          left: "left",
        },
        legend: {
          data: echartsETCB[0].data,
          // 修改图例显示value值
          formatter: function (name) {
            return `{title|${name}}{value|${objData[name].value}}`;
            // return `${name}:${objData[name].value}`;
          },
        },
        series: [
          {
            data: echartsETCB[0].data,
          },
        ],
      });
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
#bloodPressId {
  width: 32% !important;
  float: left;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
  padding: 10px 0;
  margin-bottom: 20px;
}
</style>
