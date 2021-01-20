<template>
  <div class="askSet">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="视频咨询医护人员设置" required>
        <el-input
          v-model="form.name"
          placeholder="请输入医护人员姓名或手机号，多个医护人员请以“，”号隔开"
          style="width: 700px"
        ></el-input>
      </el-form-item>
      <el-form-item label="视频咨询服务限制" required>
        <el-radio-group v-model="form.resource">
          <el-radio label="不限用户"></el-radio>
          <el-radio label="仅限用户"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="视频咨询服务时间" required class="ask_date" >
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
        <span>至</span>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime,
          }"
        >
        </el-time-select>
      </el-form-item>
      <el-form-item label="视频咨询服务工作日" required>
        <el-checkbox-group v-model="form.type">
          <el-checkbox
            v-for="(item, index) in weekendList"
            :key="index"
            :label="item"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="会员费用(视频咨询服务)" class="member_money" required>
        <el-input
          v-model="input"
          placeholder="请输入金额"
          style="width: 110px"
        ></el-input>
        <span>/年</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="ask_save">保存</el-button>
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
      //   开始时间和结束时间
      startTime: "",
      endTime: "",
      weekendList: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
.askSet {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  /deep/.el-input__inner {
    border: none;
    background: rgba(18, 20, 50, 0.04);
  }
  .ask_date {
    span {
      padding: 0 16px;
    }
  }
  .member_money {
    span {
      padding: 0 10px;

      color: #666699;
    }
  }
}
/deep/ .el-form-item__label{
    color: rgba(51, 51, 102, 1);
}
/deep/ .el-checkbox__inner {
  border-radius: 4px;
}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background: linear-gradient(180deg, #228ffe, #50edff) !important;
  border: none;
}
/deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #333366;
}

/deep/ .el-button {
  border-radius: 8px;
  border: none;
}
/deep/.el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{
    color: rgba(255, 90, 9, 1);
}
/deep/.el-checkbox{
    color: rgba(51, 51, 102, 1);
}
/deep/.el-radio{
    color: rgba(51, 51, 102, 1);
}
// input获取焦点出现边框
/deep/.el-input__inner:focus,/deep/.el-textarea__inner:focus  {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
</style>