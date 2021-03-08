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
              <p><span>血型：</span>{{healthMsg.bloodType}}</p>
              <p><span>RH阴性：</span>{{healthMsg.rhNegative}}</p>
              <p><span>身高：</span>{{healthMsg.height}}</p>
              <p><span>体重：</span>{{healthMsg.weight}}</p>
              <p><span>腰围：</span>{{healthMsg.waist}}</p>
              <p><span>臀围：</span>{{healthMsg.hip}}</p>
              <p><span>BMI：</span>14.21</p>
              <p><span> 腰：臀：</span>36.1</p>
              <p>
                <span> 药物过敏史：</span
                >{{healthMsg.drugAllergy}}
              </p>
            </div>
            <div class="personal_record">
              <div class="before_history">
                <h6>既往史</h6>
                <p><span>疾病：</span>{{healthMsg.illness}}</p>
                <p><span>手术：</span>{{healthMsg.operation}}</p>
                <p><span>外伤：</span>{{healthMsg.trauma}}</p>
                <p><span>输血：</span>{{healthMsg.transfusion}}</p>
              </div>

              <div class="family_history">
                <h6>既往史</h6>
                <div class="family" v-show="healthMsg.fatherIll == '' ? false : true">
                  <p>父亲：</p>
                  <div class="family_type clearfix">
                    <p>{{healthMsg.fatherIll}}</p>
                  </div>
                </div>
                <div class="family" v-show="healthMsg.motherIll == '' ? false : true">
                  <p>母亲：</p>
                  <div class="family_type clearfix">
                    <p>{{healthMsg.motherIll}}</p>
                  </div>
                </div>
                <div class="family" v-show="healthMsg.siblingIll == '' ? false : true">
                  <p>兄弟姐妹：</p>
                  <div class="family_type clearfix">
                    <p>{{healthMsg.siblingIll}}</p>
                  </div>
                </div>
                <div class="family" v-show="healthMsg.childIll == '' ? false : true">
                  <p>子女：</p>
                  <div class="family_type clearfix">
                    <p>{{healthMsg.childIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>遗传病史：</p>
                  <div class="family_type clearfix">
                    <p>{{healthMsg.inheritIll}}</p>
                  </div>
                </div>
                <div class="family" v-show="healthMsg.disability == '' ? false : true">
                  <p>残疾情况：</p>
                  <div class="family_type clearfix">
                    <p>{{healthMsg.disability}}</p>
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
      healthMsg: {}
    };
  },
  activated() {
    //基本信息
    get(`/health/healthInfo/${localStorage.getItem('userId')}`).then(res=>{
      console.log(res,'基本信息')
      this.healthMsg = JSON.parse(JSON.stringify(res.data.data))
      // this.healthMsg.fatherIll =  this.healthMsg.fatherIll.split('其他').join(' ')
      // this.healthMsg.motherIll =  this.healthMsg.motherIll.split('其他').join(' ')
      // this.healthMsg.childIll =  this.healthMsg.childIll.split('其他').join(' ')
      // this.healthMsg.siblingIll =  this.healthMsg.siblingIll.split('其他').join(' ')
      // this.healthMsg.disability =  this.healthMsg.disability.split('其他残疾').join(' ')
    }).catch(error => {
      console.log(error)
    })
  },
  methods:{
    edit(){
      this.$router.push({ name: 'PatientEdit', query: {editIndex:'3',editData:JSON.parse(JSON.stringify(this.healthMsg))}})
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