<template>
  <div class="healthInfo">
    <!-- 其他信息 -->
        <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>健康消息</p>
             <div class="detail_more_btn">
              <el-button type="primary" round @click="moreInfo">更多数据</el-button>
            </div>
          </div>
          <div class="health_info_container clearfix">
              <div class="healthinfoList">
                  <div class="infoBar">
                      <div class="infoImg">
                          <img src="https://pic.shanyide.cn/kemu-eqnt1-1596597472096" alt="">
                      </div>
                      <div class="infoText"> 
                           <div class="innerInfoText">
                               <div>系主任<span>2018-12-8</span></div>
                           <p>请本周三到院复诊检查，携带身份证等证件</p>
                           </div>
                      </div>
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
      healthOther: {},
    };
  },
  created() {
    //其他信息
//    get('/health/healthOther/11111').then(res=>{
//       this.healthOther = res.data
//     })
  },
  methods:{
    moreInfo(){
      this.$router.push({ name: 'PatientEdit', query: {editIndex:'10',editData:this.healthOther}})
    },
  }
};
</script>

<style lang="less" scoped>
.healthInfo {
  
  // 健康消息--板块
  .health_info_container {
    background: white;
    padding: 3%;
    .healthinfoList{
        .infoBar{
            width: 100%;
            display: flex;
            .infoImg{
                width: 8%;
                height: 136px;
                img{
                    width: 100%;
                    border-radius: 50%;
                    padding-top: 12%;
                }
            }
            .infoText{
                flex: 1;
                padding-left: 2%;
                .innerInfoText{
                    position: relative;
                    left: 0;
                    top: 50%;
                    transform: translate(0,-50%);
                }
                div{
                    color: rgba(28, 28, 79, 1);
                    font-size: 20px;
                    line-height: 30px;
                    span{
                        color: rgba(28, 28, 79, 0.6);
                        font-size: 18px;
                        margin-left: 2%;
                    }
                }
                p{
                    color: rgba(84, 84, 129, 1);
                    font-size: 18px;
                    line-height: 30px;
                }
            }
        }
    }
  }
}
</style>