
<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'userGrowthId'"
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
      dataList: [
        { value: 335, name: "今日资讯" },
        { value: 310, name: "历史咨询" },
      ],
      chartOption: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    this.initCharts();
    document.getElementById("userGrowthId").style.width = "31" + "%";
    let shopCharts = this.$echarts.init(document.getElementById("userGrowthId"));

    shopCharts.resize(); //直接加这句即可

    // shopCharts.setOption({...})
  },
  methods: {
    initCharts() {
      const _dataList = this.dataList;
      this.chartOption = {
        title: {
          text: "用户增长",
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      };
    },
  },
};
</script>

<style lang="less" scoped>
#userGrowthId {
  float: left;
  margin-left: 2%;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
  padding: 38px 0 0 24px;
   margin-bottom: 20px;
}
</style>
