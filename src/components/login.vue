<template>
  <div class="loginPage">
    <div class="login_container clearfix">
      <div class="login_left_pic">
        <img src="../assets/images/login/login_left_img.png" alt="" />
      </div>
      <div class="login_methods">
        <div class="inner_login_methods">
          <div class="system_name">
            <p>医帆家医云平台</p>
            <p>YIFANJIAYIYUNPINGTAI</p>
          </div>
          <div class="phone_login_container" v-show="isPhoneLogin">
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  style="width: 70%"
                  placeholder="请输入验证码"
                ></el-input>
                <VerificationCode
                  class="verifycode"
                  :changeCode.sync="identifyCode"
                  :fistCode="verify_Code"
                ></VerificationCode>
              </el-form-item>
              <el-form-item prop="age" class="note_codes">
                <el-input
                  v-model.number="ruleForm.age"
                  placeholder="请输入短信验证码"
                ></el-input>
                <p class="obtain_phone_codes"><span>|</span> 获取验证码</p>
              </el-form-item>
              <p class="login_rules">
                <a href="#">登录即代表同意《用户协议》《隐私条款》</a>
              </p>
              <el-form-item>
                <el-button
                  type="primary"
                  class="login_btn"
                  style="width: 100%; height: 56px"
                  @click="submitForm('ruleForm')"
                  >提交</el-button
                >
              </el-form-item>
            </el-form>
          </div>
          <div class="scan_login_container" v-show="isQrLogin">
            <div class="qr_code">
              <p id="qrcode">请使用微信扫描二维码登录</p>
            </div>
          </div>
        </div>
        <div class="change_login_methods">
          <div class="change_img">
            <div class="change_words">
              <span v-show="isQrLogin">手机号登录</span>
              <span v-show="isPhoneLogin">扫码登录</span>
            </div>
            <div class="change_pic" @click="change_methods">
              <img v-show="isPhoneLogin" src="../assets/images/login/qr_login.png" alt="" />
              <img v-show="isQrLogin" src="../assets/images/login/phone_login.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shadow_one"></div>
    <div class="shadow_two"></div>
  </div>
</template>

<script>
import VerificationCode from "../components/verificate.vue";
export default {
  components: {
    VerificationCode,
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入短信验证码"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        console.log(this.ruleForm.pass)
        callback(new Error("请输入验证码"));
      } 
    };
    return {
       identifyCode:'',    //当前生成的验证码,
      isPhoneLogin: false,
      isQrLogin: true,
      characterCode:'',
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },

  methods: {
    // 切换登录方式
    change_methods() {
      this.isPhoneLogin = !this.isPhoneLogin;
      this.isQrLogin = !this.isQrLogin;
    },
    // 获取字符验证码
    verify_Code(data){
      this.characterCode = data
      console.log(data,this.characterCode)
    },
    // 
    wxlogin(){
    //用于生成二维码的方法
        var obj=new WxLogin({
            self_redirect:false,
            id:'qrcode',//显示二维码的容器id
            appid:'wx1b82d6e42f678943',//在开放平台申请到的appid
            scope:'snsapi_login',
            redirect_uri:encodeURIComponent('http://127.0.0.1/:8080/menuLists'),//扫码后跳转的链接，网址必须是在开放平台申请时填写的那个
            state:'123456',
            style:'black',
            href:'LmltcG93ZXJCb3ggLnRpdGxlIHsKIGRpc3BsYXk6IG5vbmU7Cn0KLmltcG93ZXJCb3ggLnN0YXR1cy5zdGF0dXNfYnJvd3NlciB7CiBkaXNwbGF5OiBub25lOwp9Ci5pbXBvd2VyQm94IC5xcmNvZGUgewogYm9yZGVyOiBub25lOwogd2lkdGg6IDIwMHB4OwogaGVpZ2h0OiAyMDBweDsKfQouaW1wb3dlckJveCAuc3RhdHVzewogZGlzcGxheTogbm9uZQp9',
        })
    },
     getUrlCode() {
      // 截取url中的code方法
      var url = location.search;
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
        }
      }
      return theRequest;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          
        } else {
          console.log("error submit!!");
          this.$router.push('/menuLists')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted(){
    this.wxlogin()//当页面加载成功后执行，生成微信二维码
    console.log(window.location.href,this.getUrlCode().code)

  },
};
</script>

<style lang="less" scoped>
.loginPage {
  width: 100%;
  height: 100%;
  background: url(../assets/images/login/login_bg.png) no-repeat left top;
  background-size: cover;
  background-size: 100% 100%;
  .login_container {
    width: 80%;
    height: 718px;
    background: white;
    border-radius: 18px;
    position: relative;
    left: 50%;
    top: 49%;
    transform: translate(-50%, -51%);
    z-index: 6;
    .login_left_pic {
      width: 50%;
      float: left;
      img {
        display: block;
        width: 100%;
      }
    }
    .login_methods {
      width: 50%;
      height: 100%;
      float: right;
      position: relative;
      .inner_login_methods {
        width: calc(100% - 32%);
        height: calc(100% - 17.1%);
        padding: 16% 16% 10% 16%;
        .system_name {
          margin-bottom: 42px;
          p {
            text-align: center;
          }
          p:nth-child(1) {
            font-size: 48px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #6672fb;
          }
          p:nth-child(2) {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #222222;
            opacity: 0.17;
          }
        }
        .phone_login_container {
          /deep/ input::-webkit-input-placeholder {
            color: rgba(165, 165, 165, 1);
            font-size: 18px;
          }
          /deep/ .el-input__inner {
            border: none;
            background: rgba(238, 238, 238, 1);
            border-radius: 10px;
          }
          /deep/ .el-button{
            span{
              font-size: 18px;
              color: rgba(255, 255, 255, 1);
            }
          }
          .verifycode {
            width: 26%;
            height: 56px;
            float: right;
          }
          .login_rules {
            margin-top: 30px;
            a {
              color: rgba(153, 153, 153, 1);
              font-size: 16px;
            }
            a:hover {
              color: rebeccapurple;
            }
          }
          .login_btn {
            border: none;
            background: linear-gradient(90deg, #6672fb 0%, #7b66fb 100%);
            box-shadow: 0px 10px 24px 0px rgba(97, 127, 230, 0.3);
            border-radius: 35px;
            margin-top: 44px;
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
              span {
                color: rgba(153, 153, 153, 1);
              }
            }
          }
        }
        .scan_login_container {
          width: 100%;
          height: 100%;
          .qr_code {
            text-align: center;
            #qrcode{
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
      }
      .change_login_methods {
        width: 100%;
        height: 80px;
        margin-top: 50px;
        position: absolute;
        left: -1px;
        bottom: 4px;
        .change_img {
          width: 30%;
          height: 80px;
          float: right;
          .change_words {
            width: 60%;
            height: 80px;
            background: url(../assets/images/login/words_border.png) no-repeat right center;
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
  }
  .shadow_one{
    height: 10%;
    width: 76%;
    background: #FFFFFF;
    opacity: 0.7;
    position: relative;
    left: 50%;
    transform: translate(-50%,40%);
    border-radius: 18px;
    z-index: 4;
  }
  .shadow_two{
    height: 10%;
    width: 72%;
    background: #FFFFFF;
    opacity: 0.35;
    position: relative;
    left: 50%;
    transform: translate(-50%,-36%);
    border-radius: 18px;
  }
}
/deep/ .el-form-item__content {
  margin-left: 0 !important;
}
/deep/ .el-form-item {
  margin-bottom: 20px;
}
/deep/ .el-input__inner {
  height: 56px;
}
/deep/ .el-form-item__error{
  color: #fe653c;
}
</style>