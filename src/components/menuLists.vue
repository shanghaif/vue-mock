<template>
  <div class="Home">
    <el-container class="main">
      <el-aside class="asideContainer" style="width:auto;">
        <div class="logo" :class="{'logoCollapse':isCollapse}">
          <span></span>
          <strong>
            <i v-if="!isCollapse">医帆家医</i>
            <i v-else></i>
          </strong>
        </div>
        <el-menu :unique-opened="true" :default-active="defaultActive" router :collapse="isCollapse"
         background-color="#121432" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="statistics">
          <i class="el-icon-setting"></i>
          <span slot="title" >首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">资讯管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="aPage" >咨询记录</el-menu-item>
            <el-menu-item index="bPage">咨询设置</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="statistics">
          <i class="el-icon-setting"></i>
          <span slot="title" >预警数据</span>
        </el-menu-item>
        <el-menu-item index="statistics">
          <i class="el-icon-setting"></i>
          <span slot="title" >健康讲座</span>
        </el-menu-item>
        <el-submenu index="2-1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">患者管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="aPage" >患者列表</el-menu-item>
            <el-menu-item index="bPage">待续约</el-menu-item>
            <el-menu-item index="bPage">检测记录</el-menu-item>
            <el-menu-item index="aPage" >待随访</el-menu-item>
            <el-menu-item index="bPage">健康消息</el-menu-item>
            <el-menu-item index="bPage">生日提醒</el-menu-item>
            <el-menu-item index="aPage" >广播通知</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">设备管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="aPage" >居间宝设备</el-menu-item>
            <el-menu-item index="bPage">诊间宝设备</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">权限设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="aPage" >机构认证</el-menu-item>
            <el-menu-item index="bPage">用户设置</el-menu-item>
            <el-menu-item index="bPage">角色设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header class="loginBox">
          <div class="collapse" @click="collapseBtn">
            <el-button icon="el-icon-s-fold" v-if="isCollapse">展开</el-button>
            <el-button icon="el-icon-s-unfold" v-else>收起</el-button>
          </div>
          <div class="loginContainer">
            <span class="userImg">
                <img src="" alt="">
            </span>
            <span class="userName" v-if="userName">hi! {{userName}}</span>
            <router-link v-else to="/login">登录</router-link>
            <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px;margin-left: 10px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="changePsw">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
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
  data () {
    return {
      userName:'',
      isCollapse:false
    }
  },
  computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
  methods:{
    collapseBtn(){
      this.isCollapse = !this.isCollapse
    },
    changePsw(){
      this.$router.push('/changePassword')
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
  created(){
    let user = window.localStorage.getItem('AccountName');
    if(user){
      this.userName = user
    }
  },
  
}
</script>

<style lang='less' scoped>
.Home{
  height: 100%;
  .main{
    border:1px solid #eee;
    height: 100%;
    min-width: 800px;
    min-height: 600px;
  }
  .asideContainer{
    background-color: rgb(238, 241, 246);
    .menuTitle{
      vertical-align:top;
    }
    .logo{
      height: 60px;
      background-color: rgba(18, 20, 50, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      span{
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url(../assets/images/login/qr_code.png) no-repeat;
        background-size: 100% 100%;
        margin-right: 5px;
      }
      strong{
        color: #fff;
        i{
          font-style: normal;
        }
      }
    }
    .logoCollapse{
      width: auto;
     
    }
  }
  .el-header {
    background-color: #3c8dbc;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    background-color:  rgba(18, 20, 50, 1);
  }
  .el-menu{
    border: none;
  }
  .el-submenu__title i{
    color: #fff;
  }

  .userName{
    font-size: 20px;
    color: #fff;
  }
  .loginBox{
    display: flex;
    align-items: center;
    justify-content:space-between;
    .loginContainer{
      .userImg{
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        // background: url(../assets/images/logo.png) no-repeat;
        background-size: contain;
        vertical-align: top;
      }
      .el-icon-setting{
        color: #fff;
      }
    }
  }
  .mainContainer{
    padding-top: 0;
  }
  
  
}
/deep/ .el-menu-item{
  color: white !important;
}
</style>
