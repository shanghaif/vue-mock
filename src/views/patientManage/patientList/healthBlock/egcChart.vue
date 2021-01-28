<template>
  <div class="bloodPress">
    <!--  心电数据 -->
      <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>心电数据</p>
            <div class="detail_more_btn">
              <el-button type="primary" round>更多资料</el-button>
            </div>
          </div>
          <div class="blood_msg_container clearfix">
            <egcChart></egcChart>
          </div>
        </div>
  </div>
</template>

<script>
import { get,post } from '@/request/http'
import egcChart from '../ecgChart'
export default {
    components:{
        egcChart
    },
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<style lang="less" scoped>
</style>