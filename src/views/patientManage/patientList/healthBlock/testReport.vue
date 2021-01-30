<template>
  <div class="otherMsg">
    <!-- 其他信息 -->
        <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>其他信息</p>
            <div class="detail_more_btn">
              <el-button type="primary" round @click="moreInfo">更多资料</el-button>
            </div>
          </div>
          <div class="test_report_container">
            <div class="report_bar" v-for="(item,index) in testReportList" :key="index">
                <p> {{item.title}}</p>
                <div class="report_img">
                    <img :src="item.testReportUrl" alt="">
                </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { get,post } from '@/request/http'
export default {
  data() {
    return {
      testReportList:[]
    };
  },
  created() {
    this.getTestReport()
  },
  methods:{
    async getTestReport(){
        const res = await get('/health/healthReport/list/11111?pageNum=0&pageSize=1')
        this.testReportList = res.data
    },
    moreInfo(){
      this.$router.push({ name: 'PatientEdit', params: {editIndex:'9',editData:this.testReportList}})
    }
  }
};
</script>

<style lang="less" scoped>
.test_report_container{
    
    padding: 3%;
    .report_bar{
        p{
            color: #666699;
            font-size: 18px;
            margin-bottom: 2%;
        }
        .report_img{
            width: 100%;
            img{
                width: 33%;
                height: 200px;
                margin-right: 1%;
                border-radius: 20px;
            }
            img:last-child{
                margin-right: 0;
            }
        }
    }
}
</style>