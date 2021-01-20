<template>
  <div class="addClassManage">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="分类名称" required>
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属分类" required>
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="显示顺序" required style="width: 60%" >
        <el-input v-model="form.name" placeholder="说明：输入0-9之间的数字，数字越小，显示越靠前"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="ask_save"
          >保存</el-button
        >
        <el-button class="ask_cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
.addClassManage {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  
}


//  /deep/.el-input__inner {
//   border: none !important;
//   background: rgba(102, 114, 251, 0.05) !important;
// }
// /deep/.el-input__inner:focus,/deep/.el-textarea__inner:focus  {
//   border: 1px solid rgba(102, 114, 251, 1) !important;
//   background: rgba(102, 114, 251, 0.05) !important;
// }
</style>