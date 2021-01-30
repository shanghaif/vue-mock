<template>
  <div class="Home">
    <el-container class="main">
      <el-aside class="asideContainer" style="width: auto">
        <div class="logo" :class="{ logoCollapse: isCollapse }">
          <span></span>
          <strong>
            <i v-if="!isCollapse">医帆家医</i>
            <i v-else></i>
          </strong>
        </div>
        <el-menu
          :unique-opened="true"
          :default-active="defaultActive"
          router
          :collapse="isCollapse"
          background-color="#121432"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="statistics">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">资讯管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="AskRecord">咨询记录</el-menu-item>
              <el-menu-item index="AskSet">咨询设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="WarnData">
            <i class="el-icon-setting"></i>
            <span slot="title">预警数据</span>
          </el-menu-item>
          <el-menu-item index="HealthLecture">
            <i class="el-icon-setting"></i>
            <span slot="title">健康讲座</span>
          </el-menu-item>
          <el-submenu index="2-1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">患者管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="PatientList">患者列表</el-menu-item>
              <el-menu-item index="WaitAppointment">待续约</el-menu-item>
              <el-menu-item index="TestRecord">检测记录</el-menu-item>
              <el-menu-item index="WaitVisit">待随访</el-menu-item>
              <el-menu-item index="HealthMsg">健康消息</el-menu-item>
              <el-menu-item index="BirthdayWish">生日提醒</el-menu-item>
              <el-menu-item index="Broadcast">广播通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">设备管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="LiveHome">居间宝设备</el-menu-item>
              <el-menu-item index="TreatHome">诊间宝设备</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">权限设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="ApproveOrganize">机构认证</el-menu-item>
              <el-menu-item index="UserSet">用户设置</el-menu-item>
              <el-menu-item index="RoleSet">角色设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="WarnData">
            <i class="el-icon-setting"></i>
            <span slot="title">退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="loginBox">
          <div class="loginContainer">
            <span class="userImg">
              <img src="" alt="" />
            </span>
            <span class="userName" v-if="userName">hi! {{ userName }}</span>
            <router-link v-else to="/login">登录</router-link>
            <el-dropdown>
              <i
                class="el-icon-setting"
                style="margin-right: 15px; margin-left: 10px"
              ></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="changePsw"
                  >修改密码</el-dropdown-item
                >
                <el-dropdown-item @click.native="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main class="mainContainer">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      isCollapse: false,
    };
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    // collapseBtn(){
    //   this.isCollapse = !this.isCollapse
    // },
    changePsw() {
      this.$router.push("/changePassword");
    },
    // async logout(){
    //   const logoutResult = data => post(`${API}/administrator/logout`);
    //   try{
    //       const detailData = await logoutResult();
    //       if(detailData.data.status == 401){
    //         localStorage.clear()
    //           this.$message({
    //               type: 'success',
    //               message: '退出成功!'
    //           });
    //       }else{
    //           throw new Error('获取数据失败');
    //       }
    //   }catch(err){
    //       console.log('获取数据失败', err);
    //   }
    // }
  },
  created() {
    let user = window.localStorage.getItem("AccountName");
    if (user) {
      this.userName = user;
    }
  },
};
</script>

<style lang='less' scoped>
.Home {
  height: 100%;
  .main {
    border: 1px solid #eee;
    height: 100%;
    min-width: 800px;
    min-height: 600px;
  }
  .asideContainer {
    background-color: rgb(238, 241, 246);
    .menuTitle {
      vertical-align: top;
    }
    .logo {
      height: 60px;
      background-color: rgba(18, 20, 50, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url(../assets/images/login/qr_code.png) no-repeat;
        background-size: 100% 100%;
        margin-right: 5px;
      }
      strong {
        color: #fff;
        i {
          font-style: normal;
        }
      }
    }
    .logoCollapse {
      width: auto;
    }
  }
  .el-header {
    background-color: white;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    background-color: rgba(18, 20, 50, 1);
  }
  .el-menu {
    border: none;
  }
  .el-submenu__title i {
    color: #fff;
  }

  .userName {
    font-size: 20px;
    color: #fff;
  }
  .loginBox {
    display: flex;
    align-items: right;
    justify-content: space-between;
    margin-bottom: 1%;
    position: relative;
    .loginContainer {
      position: absolute;
      right: 20px;
      .userImg {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url("../assets/images/login/login_bg.png") no-repeat;
        background-size: cover;
        vertical-align: -14%;
        margin-right: 10px;
      }
      .el-icon-setting {
        color: rgba(18, 20, 50, 0.6);
      }
    }
  }
  .mainContainer {
    padding-top: 0;
  }
}
/deep/ .el-container {
  background: rgba(246, 249, 253, 1);
}
/deep/ .el-menu-item {
  color: white !important;
}
/deep/ .el-main {
  padding: 0px !important;
}
</style>
