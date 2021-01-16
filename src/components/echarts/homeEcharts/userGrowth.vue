
<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'userGrowthId'"
      :style="{  height: '380px' }"
      :option="option"
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
  props:['echarsDatas'],
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
          text: "用户增长",
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      },
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    this.echarts();
    // 监听图表大小
    document.getElementById("bloodPressId").style.width = "32" + "%"
    window.addEventListener("resize", function () {
      barCharts.resize();
    });
  },
  methods: {
    echarts() {
      let that = this;
      // 初始化图表
      that.barCharts = this.$echarts.init(
        document.getElementById("userGrowthId")
      );
      that.barCharts.setOption(that.option);

       let echartsBAR = JSON.parse(JSON.stringify(this.echarsDatas));
       console.log(echartsBAR[0].data,'------')
      that.barCharts.setOption({
          title: {
            text: "用户增长",
          },
          dataset: {
            source: echartsBAR[0].data,
          }
      });
    },
  },
  created(){
    console.log(this.echarsDatas,'用户增长传来的数据')
  }
};
</script>

<style lang="less" scoped>
#userGrowthId {
  width: 32% !important;
  float: left;
  margin-left: 2%;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
  padding: 10px 0;
  margin-bottom: 20px;
  float: right;
}
</style>
