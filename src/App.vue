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


</style>
