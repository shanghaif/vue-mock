<template>
  <div class="bloodSugar">
    <!--  血糖数据 -->
         <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>血糖习惯</p>
            <div class="detail_more_btn">
              <el-button type="primary" round>更多资料</el-button>
            </div>
          </div>
          <div class="blood_msg_container clearfix">
            <bloodSugar></bloodSugar>
          </div>
        </div>
  </div>
</template>

<script>
import { get,post } from '@/request/http'
import bloodSugar from '../bloodSugar'
export default {
    components:{
        bloodSugar
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