<template>
    <div class="healthMsg">
        <!--  健康信息-->
        <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>健康信息</p>
            <el-button plain @click="edit">编辑</el-button>
          </div>
          <div class="health_msg_container clearfix">
            <div class="personal_msg">
              <p><span>血型：</span>{{healthInfo.bloodType}}</p>
              <p><span>RH阴性：</span>{{healthInfo.rhNegative}}</p>
              <p><span>身高：</span>{{healthInfo.height}}</p>
              <p><span>体重：</span>{{healthInfo.weight}}</p>
              <p><span>腰围：</span>{{healthInfo.waist}}</p>
              <p><span>臀围：</span>{{healthInfo.hip}}</p>
              <p><span>BMI：</span>14.21</p>
              <p><span> 腰：臀：</span>36.1</p>
              <p>
                <span> 药物过敏史：</span
                >{{healthInfo.drugAllergy}}
              </p>
            </div>
            <div class="personal_record">
              <div class="before_history">
                <h6>既往史</h6>
                <p><span>疾病：</span>{{healthInfo.illness}}</p>
                <p><span>手术：</span>{{healthInfo.operation}}</p>
                <p><span>外伤：</span>{{healthInfo.trauma}}</p>
                <p><span>输血：</span>{{healthInfo.transfusion}}</p>
              </div>

              <div class="family_history">
                <h6>既往史</h6>
                <div class="family">
                  <p>父亲：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.fatherIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>母亲：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.motherIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>兄弟姐妹：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.siblingIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>子女：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.childIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>遗传病史：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.inheritIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>残疾情况：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.disability}}</p>
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
      healthInfo: {},
    };
  },
  created() {
    //基本信息
    get('/api/healthInfo/11111').then(res=>{
      this.healthInfo = res.data
    })
  },
  methods:{
    edit(){
      console.log(this.healthInfo)
      this.$router.push({ name: 'PatientEdit', params: {editIndex:'3',editData:this.healthInfo}})
    }
  }
};
</script>

<style lang="less" scoped>
.healthMsg {
  
  // 健康信息--板块
    .health_msg_container {
      display: flex;
      padding: 3%;
      .personal_msg {
        width: 46%;
        margin-right: 4%;
        p {
          line-height: 42px;
        }
      }
      .personal_record {
        flex: 1;
        .before_history {
          margin-bottom: 2%;
          h6 {
            font-size: 20px;
            color: #666699;
          }
          p {
            line-height: 42px;
            font-size: 18px;
            color: #666699;
          }
        }
        .family_history {
          h6 {
            font-size: 20px;
            color: #666699;
          }
          .family {
            display: flex;
            p {
              width: 16%;
              line-height: 42px;
            }
            .family_type {
              flex: 1;
              p {
                width: auto;
                padding: 0 1%;
                float: left;
              }
            }
          }
        }
      }
    }
}
</style>