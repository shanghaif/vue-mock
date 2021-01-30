<template>
  <div class="otherMsg">
    <!-- 其他信息 -->
        <div class="user_block">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>其他信息</p>
            <el-button plain @click="edit">编辑</el-button>
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
   get('/health/healthOther/11111').then(res=>{
      this.healthOther = res.data
    })
  },
  methods:{
    edit(){
      this.$router.push({ name: 'PatientEdit', params: {editIndex:'5',editData:this.healthOther}})
    }
  }
};
</script>

<style lang="less" scoped>
.otherMsg {
  
  // 其他信息--板块
  .other_msg_container {
    padding: 3%;
    p {
      width: 50%;
      float: left;
      line-height: 42px;
    }
  }
}
</style>