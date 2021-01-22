<template>
  <div class="home clearfix">
    <!-- <bloodcharts></bloodcharts> -->
    <patientAskCharts :echarsDatas = patientAskData></patientAskCharts>
    <userTypes :userTypesDatas = userTypesData></userTypes>
    <userGrowthId :echarsDatas = userGrowthData></userGrowthId>
    <todayWarnId></todayWarnId>
    <testCharts></testCharts>
    <ecgChart></ecgChart>
    <div id="login_container"></div>
  </div>
</template>

<script>
import axios from "axios";
import { get, post } from "@/request/http"
import { base } from "../request/api"
// 患者咨询
import patientAskCharts from "../components/echarts/homeEcharts/patientAskCharts";
// 血压
// import bloodcharts from "../components/echarts/patientEcharts/bloodPressure";
// 用户分类
import userTypes from '../components/echarts/homeEcharts/userTypes'
// 用户增长
import userGrowthId from '../components/echarts/homeEcharts/userGrowth'
// 今日预警
import  todayWarnId from '../components/echarts/homeEcharts/todayWarn'
import testCharts from '../components/echarts/homeEcharts/testCharts'
// 心电图
import ecgChart from '../components/echarts/patientEcharts/ecgChart'
export default {
  components: {
    // bloodcharts,
    patientAskCharts,
    userTypes,
    userGrowthId,
    todayWarnId,
    testCharts,
    ecgChart
  },
  data() {
    return {
      message:'2222',
      // 患者咨询
      patientAskData:[],
      // 用户分类
      userTypesData:[],
      // 用户增长
      userGrowthData:[]
    };
  },
  mounted() {
    // mock的数据
    get(`/echarts`).then(res => {
      console.log(res.data,'8888')
      this.patientAskData.push(res.data.patientAsk)
      this.userGrowthData.push(res.data.userGrowth)
      this.userTypesData.push(res.data.userTypes)
    })
  },
  created() {
    console.log(patientAskCharts);
    
  },
  methods: {

  },
  
};
</script>

<style lang="less" scoped>
.home{
   height: calc(100% - 2%);
    padding: 1% 1% 0% 1%;
    background: white;
}
</style>
