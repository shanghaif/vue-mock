<template>
  <div class="home clearfix">
    <!-- <bloodcharts></bloodcharts> -->
    <patientAskCharts></patientAskCharts>
    <userTypes></userTypes>
    <userGrowthId></userGrowthId>
    <todayWarnId></todayWarnId>
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
export default {
  components: {
    // bloodcharts,
    patientAskCharts,
    userTypes,
    userGrowthId,
    todayWarnId
  },
  data() {
    return {};
  },
  mounted() {},
  created() {
    console.log(patientAskCharts);
    // 模拟mock数据
    // get('/echarts').then(res => {
    //   console.log(res,'8888')
    // })
    get(`/login`).then(res => {
      console.log(res,'8888')
      this.$cookies.set('name',res.name)
    })
    // get(`${base.sq}/echarts`).then(res => {
    //   console.log(res,'9999')
    // })
  },
  methods: {

  },
};
</script>
