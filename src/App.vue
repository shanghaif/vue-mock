<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
*{margin: 0;padding: 0;}
a{text-decoration: none; color: #333333;}
.clearfix:after{
  content: '';
  display: block;
  height:0;
  clear: both;
  visibility:hidden;

}
</style>
