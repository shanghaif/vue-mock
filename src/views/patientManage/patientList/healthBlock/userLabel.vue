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
  </div>
</template>

<script>
import { get,post } from '@/request/http'
export default {
  data() {
    return {
    };
  },
  created() {
  },
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
}
</style>