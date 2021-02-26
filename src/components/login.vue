<template>
  <div class="loginPage">
    <div class="container">
      <div class="login_img">
        <img src="../assets/images/login/login_left_img.png" alt="" />
      </div>
      <div class="login_table">
        <div class="system_name">
          <p>医帆家医云平台</p>
          <p>YIFANJIAYIYUNPINGTAI</p>
        </div>
        <div class="phone_login_type" v-show="isPhoneLogin">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="phoneNum">
              <el-input
                type="input"
                v-model="ruleForm.phoneNum"
                placeholder="请输入手机号"
                maxlength="11"
              ></el-input>
            </el-form-item>
            <el-form-item prop="pictureCodes">
              <el-input
                type="password"
                v-model="ruleForm.pictureCodes"
                placeholder="请输入验证码"
                style="width: 70%"
              ></el-input>
              <VerificationCode
                class="verifycode"
                :changeCode.sync="identifyCode"
                v-on:pictureCode="pictureCode"
              ></VerificationCode>
            </el-form-item>
            <el-form-item prop="phone_verify_code" class="note_codes">
              <el-input
                v-model.number="ruleForm.phone_verify_code"
                placeholder="请输入短信验证码"
              ></el-input>
              <p
                class="obtain_phone_codes"
                @click="phoneCode"
                v-show="sendAuthCode"
              >
                <span>|</span> 获取验证码
              </p>
              <p class="obtain_phone_codes" v-show="!sendAuthCode">
                <span>|</span> {{ auth_time }} 秒后重新发送
              </p>
            </el-form-item>
            <p class="login_rules">
              <a href="#">登录即代表同意《用户协议》《隐私条款》</a>
            </p>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="login_btn"
                >提交</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="qrCode_login_type" v-show="isQrLogin">
          <div class="qr_code">
            <p id="qrcode">请使用微信扫描二维码登录</p>
          </div>
        </div>
        <div class="change_login_icon">
          <div class="change_img">
            <div class="change_words">
              <span v-show="isQrLogin">手机号登录</span>
              <span v-show="isPhoneLogin">扫码登录</span>
            </div>
            <div class="change_pic" @click="change_methods">
              <img
                v-show="isPhoneLogin"
                src="../assets/images/login/qr_login.png"
                alt=""
              />
              <img
                v-show="isQrLogin"
                src="../assets/images/login/phone_login.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "../request/http";
import VerificationCode from "../components/verificate.vue";
import { mapMutations } from 'vuex'
export default {
  components: {
    VerificationCode,
  },
  data() {
    // let validatorPictureCodes = (rules,value, callback) => {
    //   console.log(rules,value)
    //   if(this.ruleForm.pictureCodes == this.characterCode.toLowerCase() || this.ruleForm.pictureCodes == this.characterCode){
    //     console.log('22222')
    //   }
    // }
    return {
      identifyCode: "", //当前生成的验证码,
      characterCode: "",
      isPhoneLogin: false,
      isQrLogin: true,
      auth_time: 0,
      sendAuthCode: true,
      ruleForm: {
        phoneNum: "",
        pictureCodes: "",
        phone_verify_code: "",
      },
      rules: {
        phoneNum: [
          { required: true, message: "请填写手机号", trigger: "blur" },
          { min: 0, max: 11, message: "长度在 0 到 11个字符", trigger: "blur" },
        ],
        pictureCodes: [
          { required: true, message: "请填写验证码", trigger: "blur" },
           { min: 0, max: 4, message: "只允许4个数字", trigger: "blur" }
        ],
        phone_verify_code: [
          { required: true, message: "请填写手机验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    // 切换登录方式
    change_methods() {
      this.isPhoneLogin = !this.isPhoneLogin;
      this.isQrLogin = !this.isQrLogin;
    },
    // 获取字符验证码
    pictureCode(data) {
      this.characterCode = data;
      console.log(this.characterCode)
    },
    // 获取手机号的验证码
    phoneCode() {
      this.checkMobile(this.ruleForm.phoneNum);
    },
    //验证手机号,错误提示请填写正确手机号，并做60秒倒计时
    checkMobile(phone) {
      console.log(phone);
      const reg_phone = /^[1][3-9][0-9]{9}$/;
      const regPhone = new RegExp(reg_phone);
      if (regPhone.test(phone)) {
        console.log("正确手机号");
        if (this.ruleForm.phoneNum.length != 0) {
          this.sendAuthCode = false;
          this.auth_time = 60;
          let auth_timetimer = setInterval(() => {
            this.auth_time--;
            if (this.auth_time <= 0) {
              this.sendAuthCode = true;
              clearInterval(auth_timetimer);
            }
          }, 1000);
        }
        // 获取手机号验证码
        get(`/login/userInfo/sendCode?phone=${phone}`).then(res => {
          console.log(res,'获取验证码')
          if(res.data.code === 0) console.log('已发送')
        })
      } else {
        console.log("错误手机号", this.rules.phone_verify_code);
        // this.rules.phone_verify_code = [{ required: true, message: "请填写手机验证码1111", trigger: "blur" }]
      }
    },
    wxlogin() {
      // 生成base64==二维码样式
      let content =
        ".impowerBox .qrcode {width: 200px;}.impowerBox .title {display: none;}.impowerBox .info {width: 200px;}";
      let blob = new Blob([content], { type: "text/css;charset=utf-8" });
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      //用于生成二维码的方法
      let obj = new WxLogin({
        self_redirect: false,
        id: "qrcode",
        appid: "wx1b82d6e42f678943", //在开放平台申请到的appid
        scope: "snsapi_login",
        redirect_uri: encodeURIComponent("http://127.0.0.1/:8080/menuLists"), //扫码后跳转的链接，网址必须是在开放平台申请时填写的那个
        state: "123456",
        style: "black",
        href:
          "data:text/css;charset=utf-8;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDIwMHB4O30uaW1wb3dlckJveCAudGl0bGUge2Rpc3BsYXk6IG5vbmU7fS5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMjAwcHg7fQ==",
      });
    },
    // 截取微信code码
    GetQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('8888')
          console.log(this.ruleForm.phoneNum, this.ruleForm.phone_verify_code);
          this.getToken()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 获取token
    getToken() {
      post(
        `/login/userInfo/login?username=${this.ruleForm.phoneNum}&password=${this.ruleForm.phone_verify_code}`
      ).then((res) => {
        console.log(res, "登录接口::::::");
        if(res.data.code === 0){
          this.changeLogin({ Authorization : 'Bearer ' + res.data.token,userId:res.data.id});
          this.$router.push("/statistics");
        }else{
          console.log('获取token失败')
        }
      }).catch(err => {
       this.$message({
          showClose: true,
          message: '验证码已过期',
          type: 'warning'
        });
      })
    },
  },
  mounted() {
    this.wxlogin(); //当页面加载成功后执行，生成微信二维码
    console.log(this.$store.state)
  },
};
</script>

<style lang="less" scoped>
.loginPage {
  width: 100%;
  height: 100vh;
  background: url(../assets/images/login/login_bg.png) no-repeat left top;
  background-size: cover;
  background-size: 100% 100%;
  .container {
    width: 80%;
    height: 80vh;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login_img {
      width: 50%;
      height: 100%;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 960px) {
      .login_img {
        display: none;
      }
    }
    .login_table {
      width: 50%;
      height: calc(100% - 160px);
      background: white;
      float: right;
      border-radius: 0 18px 18px 0;
      padding-top: 160px;
      position: relative;
      .system_name {
        width: 100%;
        height: 100px;
        text-align: center;
        margin-bottom: 34px;
        p:nth-child(1) {
          font-size: 46px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #6672fb;
          line-height: 64px;
        }
        p:nth-child(2) {
          font-size: 22px;
          line-height: 40px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #222222;
          opacity: 0.17;
        }
      }
      .phone_login_type {
        width: calc(100% - 200px);
        height: auto;
        padding: 0 100px 1px 100px;
        .verifycode {
          width: 26%;
          float: right;
        }
        .note_codes {
          position: relative;
          .obtain_phone_codes {
            display: inline-block;
            width: 40%;
            line-height: 56px;
            position: absolute;
            right: -14%;
            font-size: 18px;
            color: rgba(102, 114, 251, 1);
            z-index: 2;
            cursor: pointer;
            span {
              color: rgba(153, 153, 153, 1);
            }
          }
        }
        .login_rules {
          padding: 0 0 30px 0;
          a {
            color: rgba(153, 153, 153, 1);
            font-size: 16px;
          }
          a:hover {
            color: rebeccapurple;
          }
        }
        .login_btn {
          width: 100%;
          height: 56px;
          border: none;
          background: linear-gradient(90deg, #6672fb 0%, #7b66fb 100%);
          box-shadow: 0px 10px 24px 0px rgba(97, 127, 230, 0.3);
          border-radius: 35px;
        }
      }
      @media screen and (min-width: 960px) and (max-width: 1200px) {
        .phone_login_type {
          width: calc(100% - 100px);
          height: auto;
          padding: 0 50px 1px 50px;
        }
      }
      @media screen and (min-width: 960px) {
        .phone_login_type {
          width: calc(100% - 200px);
          height: auto;
          padding: 0 50px 1px 100px;
        }
      }
      .qrCode_login_type {
        width: 100%;
        .qr_code {
          text-align: center;
          #qrcode {
            border: none;
            margin-bottom: 0px;
          }
          img {
            width: 280px;
            display: inline-block;
            margin-bottom: 14px;
          }
          p {
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #666666;
            line-height: 27px;
            margin-bottom: 60px;
          }
        }
      }
      .change_login_icon {
        width: 100%;
        padding: 10px 0;
        border-radius: 0 0 18px 0;
        position: absolute;
        left: 0;
        bottom: 0;
        .change_img {
          width: 30%;
          height: 80px;
          float: right;
          .change_words {
            width: 60%;
            height: 80px;
            background: url(../assets/images/login/words_border.png) no-repeat
              right center;
            background-size: 100%;
            text-align: center;
            float: left;
            span {
              line-height: 80px;
              color: rgba(97, 102, 124, 1);
              font-size: 14px;
            }
          }
          .change_pic {
            width: 40%;
            float: right;
            img {
              width: 80px;
              float: right;
              margin-right: 4px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 960px) {
      .login_table {
        width: 100%;
        height: calc(100% - 120px);
        border-radius: 18px;
        padding-top: 120px;
      }
    }
  }
}
/deep/ .el-form-item__content {
  margin-left: 0px !important;
}
/deep/.el-form-item__content {
  line-height: 0;
}
/deep/ .el-input__inner {
  height: 60px;
}
/deep/ .el-input__inner {
  border: none;
  background: rgba(238, 238, 238, 1);
  border-radius: 10px;
}
/deep/ input::-webkit-input-placeholder {
  color: rgba(165, 165, 165, 1);
  font-size: 16px;
}
/deep/ .el-form-item__error {
  color: #fe653c;
}
/deep/ .el-button {
  color: rgba(102, 114, 251, 1);
  cursor: pointer;
  span {
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
  }
}
</style>