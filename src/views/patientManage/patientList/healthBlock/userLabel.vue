<template>
  <div class="healthBase">
    <!--  用户标签-->
    <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>用户标签</p>
            <el-button plain @click="editblock == 1">编辑</el-button>
          </div>
          <div class="user_label_msg">
            <div class="photo_contanier">
              <div class="user_photo">
                <img :src="userInfo.avatar" alt="" />
              </div>
              <div class="user_detail clearfix">
                <p><span>昵称：</span>{{userInfo.nickname}}</p>
                <p><span>会员级别：</span>{{userInfo.memberLevel == "0" ? 'VIP' : ''}}</p>
                <p><span>邀请人：</span>{{userInfo.inviter}}</p>
                <p><span>会员有效期：</span>{{userInfo.memberStart}}至{{userInfo.memberEnd}}</p>
              </div>
            </div>
            <p class="label"><span>标签：</span>{{labelListData}}</p>
            <p class="label">
              <span>下次随访：</span>
              {{nextVisitContent}}
            </p>
          </div>
        </div>
  </div>
</template>

<script>
import { get,post } from '@/request/http'
export default {
  data() {
    return {
      userInfo:{},
      labelListData:null,
      nextVisitContent:""
    };
  },
  activated() {
    this.getUerInfo()
    this.getLabelList()
    this.getNextVisit()
  },
  methods:{
    async getUerInfo(){
      let res = await get(`/login/userInfo/${localStorage.getItem('userId')}`)
      console.log(res)
      try {
        if(res.data.code === 0){
          this.userInfo = res.data.data
        }else{
          console.log('用户标签err');
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getLabelList(){
      let listData = await post(`/health/tag/list?userId=${localStorage.getItem('userId')}`)
      try {
        if(listData.data.code === 0){
          let labelArr = []
          let labelIdArr = []
          for(let item of listData.data.data){
            labelArr.push(item.name)
            labelIdArr.push(item.id)
            this.labelListData = labelArr.join(',')
            let labelId = labelIdArr.join(',')
            window.localStorage.setItem('visitedLabelId',labelId)
          }
        }else{
          console.log('标签列表err');
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getNextVisit(){
      let res = await get(`/health/followUp/${localStorage.getItem('userId')}`)
      let nextVisitData = res.data
      try {
        if(nextVisitData.code === 0){
          this.nextVisitContent = nextVisitData.data.followUpDate + '  ' + nextVisitData.data.followUpContent + ' , ' + nextVisitData.data.name + ' ' + nextVisitData.data.updateTime
        }else{
          console.log('标签列表err');
        }
      } catch (error) {
        console.log(error)
      }
    },
  }
};
</script>

<style lang="less" scoped>
.healthBase {
  
  // 用户标签---板块
    .user_label_msg {
      padding: 3%;
      background: white;
      .photo_contanier {
        display: flex;
        margin-bottom: 1%;
        .user_photo {
          width: 100px;
          height: 100px;
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
            width: 44%;
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
}
</style>