<template>
  <div>
    <div class="patient_contents">
      <div class="edit_msg">
        <!-- <editHealth :editblock="editblock"></editHealth> -->
        <!-- <editHealth :editblock="editblock"></editHealth> -->
      </div>
      <div class="gain_msg">
        <div class="user_block" v-show="blocks.labels == true ? true : false">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>用户标签</p>
            <el-button plain @click="editblock == 1">编辑</el-button>
          </div>
          <div class="user_label_msg">
            <div class="photo_contanier">
              <div class="user_photo">
                <img src="@/assets/images/login/qr_code.png" alt="" />
              </div>
              <div class="user_detail clearfix">
                <p><span>昵称：</span>爷爷</p>
                <p><span>会员级别：</span>Vip</p>
                <p><span>邀请人：</span>细小没</p>
                <p><span>会员有效期：</span>2019-11-12至2020-11-12日</p>
              </div>
            </div>
            <p class="label"><span>标签：</span>脆性糖尿病，容易愤怒，很有钱</p>
            <p class="label">
              <span>下次随访：</span>2020年11月20日通知复诊血常规检查，系主任
              2020-10-29 10:23
            </p>
          </div>
        </div>
        <!--  基本信息-->
        <div class="user_block"  v-show="blocks.baseMsg == true ? true : false">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>基本信息</p>
            <el-button plain @click="healthBase_edit(2,healthBase)">编辑</el-button>
          </div>
          <div class="base_msg_container clearfix" >
            <p><span>姓名：</span>{{healthBase.name}}</p>
            <p><span>籍贯：</span>{{healthBase.birthplace}}</p>
            <p><span>性别：</span>{{healthBase.sex}}</p>
            <p><span>文化程度：</span>{{healthBase.education}}</p>
            <p><span>身份证号：</span>{{healthBase.idCard}}</p>
            <p><span>民族：</span>{{healthBase.nation}}</p>
            <p><span>手机号：</span>{{healthBase.phoneNumber}}</p>
            <p><span>职业：</span>{{healthBase.profession}}</p>
            <p><span>出生日期：</span>{{healthBase.birthday}}</p>
            <p><span> 现住址：</span>{{healthBase.presentAddr}}</p>
            <p><span> 通讯地址：</span>{{healthBase.correspondenceAddr}}</p>
            <p><span> 国籍：</span>{{healthBase.nationality}}</p>
            <p><span>工作单位：</span>{{healthBase.company}}</p>
            <p><span>婚姻状况：</span>{{healthBase.marriage}}</p>
            <p><span>定点医疗单位：</span>{{healthBase.fixMedicalUnit}}</p>
            <div class="fill_more">
              <p>特殊类型人群：</p>
              <div class="fill_more_type">
                <p>{{healthBase.specialPeople}}</p>
              </div>
            </div>
            <div class="fill_more">
              <p>医疗费用类型：</p>
              <div class="fill_more_type">
                <p>{{healthBase.expenseType}}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!--  健康信息-->
        <div class="user_block" v-show="blocks.healthMsg == true ? true : false">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>健康信息</p>
            <el-button plain @click="healthBase_edit(3,healthInfo)">编辑</el-button>
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
        
        <!-- 生活习惯 -->
        <div class="user_block" v-show="blocks.lifeHabit == true ? true : false">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>生活习惯</p>
            <el-button plain @click="healthBase_edit(4,healthLife)">编辑</el-button>
          </div>
          <div class="life_msg_container clearfix">
            <div class="life_left">
              <div class="historyBlock smoking_history">
                <h6>吸烟史</h6>
                <p><span>开始吸烟时间：</span>{{healthLife.beginSmokeTime}}</p>
                <p><span>吸烟量：</span>{{healthLife.smokeAmount}}</p>
              </div>

              <div class="historyBlock smoking_history">
                <h6>饮酒史</h6>
                <p><span>饮酒类型：</span>{{healthLife.drinkType}}</p>
                <p><span>饮酒量：</span>{{healthLife.drinkAmount}}</p>
                <p><span>饮酒频率：</span>{{healthLife.drinkFrequency}}</p>
              </div>
            </div>
            <div class="life_right">
              <div class="historyBlock smoking_history">
                <h6>体育锻炼情况</h6>
                <p><span>是否锻炼：</span>{{healthLife.exerciseRegular}}</p>
                <p><span>锻炼情况：</span>{{healthLife.exerciseSituation}}</p>
                <p><span>每次锻炼时间：</span>{{healthLife.exerciseTime}}</p>
                <p><span>锻炼类型：</span>{{healthLife.exerciseType}}</p>
                <p><span>饮食习惯类型：</span>{{healthLife.eatType}}</p>
                <p><span>睡眠情况：</span>{{healthLife.sleepSituation}}</p>
                <p><span>其他习惯：</span>{{healthLife.otherRegular}}</p>
              </div>
            </div>
          </div>
        </div>
        
        
        <!-- 其他信息 -->
        <div class="user_block" v-show="blocks.otherMsg == true ? true : false">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>其他信息</p>
            <el-button plain @click="healthBase_edit(5,healthOther)">编辑</el-button>
          </div>
          <div class="other_msg_container clearfix">
            <p><span> 户籍类型：</span>{{healthOther.householdType}}</p>
            <p><span> 所属派出所：</span>{{healthOther.policeStation}}</p>
            <p><span>邮政编码：</span>{{healthOther.postalCode}}</p>
            <p><span> Email：</span>{{healthOther.email}}</p>
            <p><span> 住宅电话：</span>{{healthOther.homePhone}}</p>
            <p><span>联系人电话：</span>{{healthOther.contactPhone}}</p>
            <p><span> 联系人姓名：</span>{{healthOther.contactName}}</p>
            <p><span> 暂住证：</span>{{healthOther.kitas}}</p>
            <p><span> 户别：</span>{{healthOther.householdCategory}}</p>
            <p><span> 所属居委会：</span>{{healthOther.committee}}</p>
          </div>
        </div>
        
        <!-- 血糖习惯 -->
        <div class="user_block" v-show="blocks.bloodData == true ? true : false">
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
        <!-- 血压数据 -->
        <div class="user_block" v-show="blocks.bloodData == true ? true : false">
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
        <!-- 心电数据 -->
        <div class="user_block" v-show="blocks.bloodData == true ? true : false">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>血压数据</p>
            <div class="detail_more_btn">
              <el-button type="primary" round>更多资料</el-button>
            </div>
          </div>
          <div class="blood_msg_container clearfix">
            <egcChart></egcChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import bloodSugar from "./bloodSugar";
import bloodPress from "./bloodPress";
// import healthBar from './health'
import egcChart from './ecgChart'
import bus from '../../../components/bus';
import { get, post } from "@/request/http";
export default {
  props:['selectMsg'],
  components:{
    bloodSugar,
    bloodPress,
    egcChart
  },
  data(){
    return{
      healthBase:null,
      healthInfo:null,
      healthLife:null,
      healthOther:null,
      showEditBlock:null,
      blocks:{
        labels:true,
        baseMsg:true,
        healthMsg:true,
        lifeHabit:false,
        otherMsg:false,
        bloodData:true,
        bloodPressData:false,
        heartData:false,
        testReport:false,
        healthData:false,
      },
      showWatch:false
    }
  },
   created() {
     console.log(bloodPress,'血压的数据：：：：：：：')
    //基本信息
    get('/api/healthBase/11111').then(res=>{
      this.healthBase = res.data
    })
    // // 将抗信息
     get('/api/healthInfo/11111').then(res=>{
      this.healthInfo = res.data
    })
    // 生活习惯
     get('/api/healthLife/11111').then(res=>{
      this.healthLife = res.data
    })
    // 其他习惯
    get('/api/healthOther/11111').then(res=>{
      this.healthOther = res.data
    })

  },
  watch:{
    selectMsg:{
      handler(newVal,oldVal){
        console.log(newVal,oldVal,'newVal,oldValnewVal,oldValnewVal,oldVal')
        this.showBlockIndex = newVal.selectblockMsg.id
        let ischeckMsg = JSON.parse(JSON.stringify(newVal.selectblockMsg));
        // if(){
          if(newVal.selectIndex == true && ischeckMsg.id == 1)  this.blocks.labels = true
          if(newVal.selectIndex == true && ischeckMsg.id == 2)  this.blocks.baseMsg = true
          if(newVal.selectIndex == true && ischeckMsg.id == 3)  this.blocks.healthMsg = true
          if(newVal.selectIndex == true && ischeckMsg.id == 4)  this.blocks.lifeHabit = true
          if(newVal.selectIndex == true && ischeckMsg.id == 5)  this.blocks.otherMsg = true
          if(newVal.selectIndex == true && ischeckMsg.id == 6)  this.blocks.bloodData = true
          if(newVal.selectIndex == true && ischeckMsg.id == 7)  this.blocks.bloodPressData = true
          if(newVal.selectIndex == true && ischeckMsg.id == 8)  this.blocks.heartData = true
          if(newVal.selectIndex == true && ischeckMsg.id == 9)  this.blocks.testReport = true
        // }else{
          if(newVal.selectIndex == false && ischeckMsg.id == 1)  this.blocks.labels = false
          if(newVal.selectIndex == false && ischeckMsg.id == 2)  this.blocks.baseMsg = false
          if(newVal.selectIndex == false && ischeckMsg.id == 3)  this.blocks.healthMsg = false
          if(newVal.selectIndex == false && ischeckMsg.id == 4)  this.blocks.lifeHabit = false
          if(newVal.selectIndex == false && ischeckMsg.id == 5)  this.blocks.otherMsg = false
          if(newVal.selectIndex == false && ischeckMsg.id == 6)  this.blocks.bloodData = false
          if(newVal.selectIndex == false && ischeckMsg.id == 7)  this.blocks.bloodPressData = false
          if(newVal.selectIndex == false && ischeckMsg.id == 8)  this.blocks.heartData = false
          if(newVal.selectIndex == false && ischeckMsg.id == 9)  this.blocks.testReport = false
        // }
      }
    }

  },
  methods:{
    // 编辑
    healthBase_edit(id,healthBase) {
      // console.log(id,healthBase,'点击对应的值')
      this.showEditBlock = {
          edit_id:id,
          healthBase:healthBase
      }
      // 给edit传值
      bus.$emit('healthEditMsg',this.showEditBlock)
      // 给父组件传值
      this.showEditBlock == null ? '' : this.$emit('isShow',this.showWatch)
    },
  }
}
</script>

<style lang="less" scoped>
  
  .patient_content {
    width: 80%;
    margin-right: 1%;
    border-radius: 20px;
    p {
      font-size: 18px;
      color: #666699;
    }
    .user_block {
      width: 100%;
      border-radius: 20px;
      margin-bottom: 2%;
      // 查看信息中的bar
      .user_msg_bar {
        height: 70px;
        position: relative;
        display: flex;
        img {
          width: 100%;
        }
        p {
          font-size: 20px;
          color: white;
          position: absolute;
          left: 100px;
          top: 50%;
          transform: translate(0, -50%);
        }
        .el-button {
          position: absolute;
          right: 3%;
          top: 50%;
          transform: translate(0, -50%);
        }
        .detail_more_btn {
          position: absolute;
          right: 3.2%;
          top: 50%;
          transform: translate(0, -50%);
          /deep/ .el-button--primary {
            background: rgba(255, 255, 255, 0.8) !important;
            border: none !important;
            color: rgba(88, 142, 207, 1);
          }
        }
      }
    }

    // 用户标签---板块
    .user_label_msg {
      padding: 3%;
      background: white;
      .photo_contanier {
        display: flex;
        margin-bottom: 1%;
        .user_photo {
          width: 100px;
          border-radius: 50%;
          margin-right: 2%;
          border: 1px dashed rgba(102, 114, 251, 1);
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        .user_detail {
          flex: 1;
          padding-top: 1%;
          p:last-child {
            width: 40%;
          }
          p {
            width: 30%;
            font-size: 18px;
            line-height: 40px;
            float: left;
            color: #666699;
          }
        }
      }
    }
    .label {
      line-height: 42px;
    }

    // 基本信息--板块
    .base_msg_container {
      padding: 3%;
      background: white;
      p {
        width: 50%;
        line-height: 42px;
        float: left;
      }
      .fill_more {
        width: 100%;
        display: flex;
        p {
          width: 12%;
        }
        .fill_more_type {
          flex: 1;
          p {
            width: auto;
            margin: 0 1%;
          }
        }
      }
    }

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

    // 生活习惯---板块
    .life_msg_container {
      display: flex;
      padding: 3%;
      .historyBlock {
        margin-bottom: 2%;
        h6 {
          font-size: 20px;
          color: #666699;
        }
      }
      .life_left {
        width: 50%;
        float: left;
        p {
          line-height: 42px;
        }
        .smoking_history {
          p {
            line-height: 42px;
          }
        }
      }
      .life_right {
        width: 50%;
        float: right;
        p {
          line-height: 42px;
        }
      }
    }
  }
  // 其他信息--板块
  .other_msg_container {
    padding: 3%;
    p {
      width: 50%;
      float: left;
      line-height: 42px;
    }
  }
</style>