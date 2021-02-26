<template>
  <div class="bloodPress">
    <!--  心电数据 -->
      <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>心电数据</p>
            <div class="detail_more_btn">
              <el-button type="primary" round @click="moreData">更多资料</el-button>
            </div>
          </div>
          <div class="egc_container clearfix">
            <!-- <egcChart></egcChart> -->
            <egc></egc>
          </div>
        </div>
  </div>
</template>

<script>
import { get,post } from '@/request/http'
// import egcChart from '../ecgChart'
import egc from '../ecg'
export default {
    components:{
      egc
        // egcChart
    },
  data() {
    return {
    };
  },
 methods:{
    moreData(){
      this.$router.push({ name: 'PatientEdit',query: {editIndex:'8'}})
    },
 }
};
</script>

<style lang="less" scoped>
.egc_container{
  background: white;
}
</style>