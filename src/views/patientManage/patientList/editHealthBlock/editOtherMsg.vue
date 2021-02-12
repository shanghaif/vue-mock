<template>
  <div>
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>其他习惯</p>
      </div>
      <div class="user_label_msg">
        <el-form :model="form" ref="otherMsg" label-width="100px">
          <el-form-item label="户籍类型">
            <el-radio v-model="editData.householdType" label="本阜"
              >本阜</el-radio
            >
            <el-radio v-model="editData.householdType" label="外阜"
              >外阜</el-radio
            >
          </el-form-item>
          <el-form-item label="户别">
            <el-radio v-model="editData.householdCategory" label="农业"
              >农业</el-radio
            >
            <el-radio v-model="editData.householdCategory" label="非农业"
              >非农业</el-radio
            >
          </el-form-item>
          <el-form-item label="暂住证">
            <el-radio v-model="editData.kitas" label="A类">A类</el-radio>
            <el-radio v-model="editData.kitas" label="B类">B类</el-radio>
          </el-form-item>
          <el-form-item label="来京日期">
            <el-date-picker
              v-model="editData.accessBjTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择来京日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="邮政编码">
            <el-input
              v-model="editData.postalCode"
              placeholder="请填写邮政编码"
            ></el-input>
          </el-form-item>
          <el-form-item label="所属派出所">
            <el-input
              v-model="editData.policeStation"
              placeholder="请填写所属派出所"
            ></el-input>
          </el-form-item>
          <el-form-item label="所属居委会">
            <el-input
              v-model="editData.committee"
              placeholder="请填写所属居委会"
            ></el-input>
          </el-form-item>
          <el-form-item label="住宅电话">
            <el-input
              v-model="editData.homePhone"
              placeholder="请填写所住宅电,包括区号"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input
              v-model="editData.email"
              placeholder="请填写Email地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人姓名">
            <el-input
              v-model="editData.contactName"
              placeholder="请填写联系人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人电话">
            <el-input
              v-model="editData.contactPhone"
              placeholder="请填写联系人电话"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="otherMsgSave('otherMsg')"
              >保存</el-button
            >
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post, put } from "@/request/http";
export default {
  props: ["editDataList"],
  data() {
    return {
      form: {},
      editData: this.editDataList,
    };
  },
  created() {
    console.log(this.editDataList)
    // this.editData = this.editDataList;
  },
  methods: {
    otherMsgSave(otherMsg) {
      this.$refs[otherMsg].validate((valid) => {
        if (valid) {
          put(`/health/healthOther/${this.editData.id}`, {
            householdType: this.editData.householdType,
            householdCategory: this.editData.householdCategory,
            kitas: this.editData.kitas,
            accessBjTime: this.editData.accessBjTime,
            postalCode: this.editData.postalCode,
            policeStation: this.editData.policeStation,
            committee: this.editData.committee,
            homePhone: this.editData.homePhone,
            email: this.editData.email,
            contactName: this.editData.contactName,
            contactPhone: this.editData.contactPhone
          }).then((res) => {
            console.log(res, this.editData);
            this.$router.push("/Patientwatch");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.user_label_msg {
  padding: 3%;
  background: white;
}
</style>