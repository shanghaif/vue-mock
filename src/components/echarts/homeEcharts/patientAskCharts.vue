
<template>
  <div class="index">
    <MyEcharts
      :id="'bloodPressId'"
      :style="{  height: '380px' }"
      :option="option"
    >
    </MyEcharts>
    <div></div>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index"
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
      dataList: [
        { value: 335, name: "今日资讯" },
        { value: 310, name: "历史咨询" },
      ],
      option: {
        title: {
          text: "患者咨询",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          width: 200,
          orient: "vertical",
          right: 100,
          top:160,
          formatter : function(name){return name}
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "40%"],
            // 修改饼图的左右上下位置['左右'，'上下']
            center:['30%','50%'],
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
    document.getElementById("bloodPressId").style.width = "32" + "%"
     window.addEventListener("resize", function () {
      myChartm.resize();
    })
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(
        document.getElementById("bloodPressId")
      );
      that.myChartm.setOption(that.option);
      
      
      let echartsETCB = JSON.parse(JSON.stringify(this.echarsDatas));
      let tuliData = []
      for( let item of echartsETCB[0].data){
          tuliData.push(item.name)
      }
      this.myChartm.setOption({
        title: {
          text: echartsETCB[0].name, //可以写死 也可以用后台传回来的数据 title
          left: "center",
        },
        series: [
          {
            legend: {
              data: tuliData,
            },
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
