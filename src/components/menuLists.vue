<template>
  <div class="homePage">
    <div class="leftAside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds='selectedIndexs'
        router
      >
        <el-menu-item index="2" class="systemName">
          <i class="el-icon-menu"></i>
          <span slot="title">后台管理系统</span>
        </el-menu-item>
        <el-menu-item index="statistics">
          <i class="el-icon-setting"></i>
          <span slot="title" >首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">记录好友</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="aPage" >获取好友列表</el-menu-item>
            <el-menu-item index="bPage">敏感词汇删查</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
         <!-- <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">记录好友</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="aPage">获取好友列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
    </div>
    <div class="contentTrunk">
      <header>
        <div class="isShow">
          <el-button
            type="primary"
            v-if="isCollapse"
            icon="el-icon-s-unfold"
            @click="btnLeft"
            >收起</el-button
          >
          <el-button
            type="primary"
            v-else
            icon="el-icon-s-fold"
            @click="btnLeft"
            >展开</el-button
          >
        </div>
        <div class="tools">
          <!-- <img src="@/assets/images/logo.png" alt="" /> -->
          <el-dropdown>
            <el-button>
              你好！欢迎登陆<i class="el-icon-setting el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>立即登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="trunk">
        <div class="coreTrunk">
          <!-- <breadCrumb></breadCrumb> -->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedIndexs:['1'],
      isCollapse: true,
      setBlock: false,
    };
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    btnLeft() {
      this.isCollapse = !this.isCollapse;
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.homePage {
  display: flex;
  background: rgba(246, 249, 253, 1);
  .leftAside {
    width: auto;
    height: 100vh;
    background: #304156;
    float: left;
    .systemName {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background: #3c8dbc;
      text-align: center;
    }
  }
  .contentTrunk {
    flex: 1;
    height: 60px;
    background: white;
    header {
      padding: 0 20px;
      display: flex;
      .isShow {
        width: 20%;
        line-height: 58px;
        float: left;
      }
      .tools {
        flex: 1;
        line-height: 60px;
        text-align: right;
        img {
          width: 24px;
          height: 24px;
          border-radius: 20px;
          vertical-align: middle;
        }
        .el-button {
          background: transparent;
          border: none;
        }
      }
    }
    .trunk {
      width: calc(100% - 28px);
      padding: 14px;
      .coreTrunk {
        padding: 10px;
        background: white;
        /deep/.el-breadcrumb {
          padding-bottom: 10px;
        }
      }
    }
  }
}
/deep/ .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// /deep/ .el-menu-item,
// .el-submenu,
// .el-submenu__title {
//   color: white;
// }
// /deep/ .el-menu {
//   background: #304156 !important;
// }
</style>
