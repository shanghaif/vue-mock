<template>
  <div class="bloodPress">
    <!--  血压数据 -->
          <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>血压数据</p>
            <div class="detail_more_btn">
              <el-button type="primary" round>更多资料</el-button>
            </div>
          </div>
          <div class="blood_msg_container clearfix">
            <bloodPress></bloodPress>
          </div>
        </div>
  </div>
</template>

<script>
import { get,post } from '@/request/http'
import bloodPress from '../bloodPress'
export default {
    components:{
        bloodPress
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