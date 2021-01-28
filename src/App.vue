<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #333333;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.active {
  background: rgba(102, 114, 251, 1) !important;
}
/deep/ .el-pagination .is-background .el-pager li:not(.disabled):hover {
  color: rgba(102, 114, 251, 1);
}

// 设置保存和取消的样式

.ask_save,
.ask_cancel {
  width: 140px;
  height: 40px;
  border-radius: 8px;
}
.ask_save {
  color: white;
  background: linear-gradient(270deg, #6672fb, #7b66fb);
}
.ask_cancel {
  background: rgba(102, 114, 251, 0.1) !important;
  border-radius: 8px;
  color: #6672fb;
}
// input 的边框和背景
/deep/.el-input__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-input__inner:focus,
/deep/.el-textarea__inner:focus {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
// input默认去除边框，获取焦点时显示边框
// .el-input__inner {
//   border: none !important;
//   background: rgba(102, 114, 251, 0.05) !important;
// }
// .el-input__inner:focus, .el-textarea__inner:focus  {
//   border: 1px solid rgba(102, 114, 251, 1) !important;
//   background: rgba(102, 114, 251, 0.05) !important;
// }

// 改变全选ckecbox框
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: #6672fb !important;
  border: 2px solid #6672fb;
  border: none;
}

// 弹出框的确定按钮的样式--修改
.el-button--primary {
  color: white;
  background: linear-gradient(270deg, #6672fb, #7b66fb) !important;
  border: 1px solid #7b66fb  !important;
}

// 修改多选框-选中字体样式
.el-checkbox__input.is-checked+.el-checkbox__label{
  color: rgba(102, 114, 251, 1) !important;
}
.el-radio__input.is-checked .el-radio__inner{
  background: rgba(102, 114, 251, 1) !important;
  border-color: rgba(102, 114, 251, 1) !important;
}
.el-radio__input.is-checked+.el-radio__label{
  color: rgba(102, 114, 251, 1) !important;
}


// 将抗档案板块
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
</style>
