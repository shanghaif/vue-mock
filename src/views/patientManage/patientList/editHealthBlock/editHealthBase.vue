<template>
  <div class="editHealthBase">
    <!-- 基本信息--编辑 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>基本信息</p>
      </div>
      <div class="base_msg clearfix">
        <el-form ref="healBase"  label-width="100px">
          <el-form-item label="姓名" style="width: 30%; float: left">
            <div>{{ editData.name }}</div>
          </el-form-item>
          <el-form-item label="性别" style="width: 30%; float: left">
            <div>{{ editData.sex }}</div>
          </el-form-item>
          <el-form-item label="身份证号" style="width: 40%; float: left">
            <div>{{ editData.idCard }}</div>
          </el-form-item>
          <el-form-item label="手机" style="width: 50%; float: left">
            <div>{{ editData.phoneNumber }}</div>
          </el-form-item>
          <el-form-item label="出生日期">
            <div>{{ editData.birthday }}</div>
          </el-form-item>
          <el-form-item label="国籍">
            <el-radio-group v-model="editData.nationality">
              <el-radio
                v-for="(item, index) in nationality"
                :key="index"
                :label="item"
                >{{ item }}</el-radio
              >
            </el-radio-group>
            <input
              type="text"
              v-model="editData.nationalityInfo"
              placeholder="请填写其他国籍"
              style="border: none; outline: none; margin-left: 2%"
              v-show="editData.nationality == '其他' ? true : false"
            />
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input
              v-model="editData.birthplace"
              placeholder="请输入内容"
            ></el-input>
          </el-form-item>
          <el-form-item label="民族">
            <el-radio-group v-model="editData.nation">
              <el-radio
                v-for="(item, index) in nation"
                :key="index"
                :label="item"
                >{{ item }}</el-radio
              ></el-radio-group
            >
            <input
              type="text"
              v-model="editData.nationInfo"
              v-show="editData.nation != '其他' ? false : true"
              placeholder="请填写其他民族"
              style="border: none; outline: none; margin-left: 2%"
            />
          </el-form-item>
          <el-form-item label="婚姻状况">
            <el-radio-group v-model="editData.marriage">
              <el-radio label="未婚">未婚</el-radio>
              <el-radio label="已婚">已婚</el-radio>
              <el-radio label="离婚">离婚</el-radio>
              <el-radio label="丧偶">丧偶</el-radio>
              <el-radio label="不详">不详</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文化程度">
            <el-radio-group v-model="editData.education">
              <el-radio label="小学">小学</el-radio>
              <el-radio label="初中">初中</el-radio>
              <el-radio label="高中/中专">高中/中专</el-radio>
              <el-radio label="大专以上学历">大专以上学历</el-radio>
              <el-radio label="研究生以上学历">研究生以上学历</el-radio>
              <el-radio label="文盲/没上过学">文盲/没上过学</el-radio>
              <el-radio label="不详">不详</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="现住址">
            <el-input
              v-model="editData.presentAddr"
              placeholder="请填写到详细通讯地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="通讯地址">
            <el-input
              v-model="editData.correspondenceAddr"
              placeholder="请填写到详细通讯地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="职业">
            <el-radio-group v-model="editData.profession">
              <el-radio
                v-for="(item, index) in profession"
                :key="index"
                :label="item"
                >{{ item }}</el-radio
              >
            </el-radio-group>
            <input
              type="text"
              v-model="editData.professionInfo"
              v-show="editData.profession != '其他' ? false : true"
              placeholder="请填写其他职业"
              style="border: none; outline: none"
            />
          </el-form-item>
          <el-form-item label="工作单位">
            <el-input
              v-model="editData.company"
              placeholder="工作单位名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="医疗费用类型">
            <el-checkbox-group v-model="editData.expenseType">
              <el-checkbox
                v-for="(item, index) in expenseType"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
            <input
              type="text"
              v-model="editData.expenseTypeInfo"
              v-show="editData.expenseType.indexOf('其他') == -1 ? false : true"
              placeholder="请填写其他医疗费用类型"
              style="border: none; outline: none; margin-left: 2%"
            />
          </el-form-item>
          <el-form-item label="定点医疗单位">
            <el-input
              v-model="editData.fixMedicalUnit"
              placeholder="单位名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="特殊类型人群">
            <el-checkbox-group v-model="editData.specialPeople">
              <el-checkbox
                v-for="(item, index) in specialPeople"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
            </el-checkbox-group>
            <input
              type="text"
              v-model="editData.specialPeopleInfo"
              v-show="
                editData.specialPeople.indexOf('其他') == -1 ? false : true
              "
              placeholder="请填写其他特殊类型人群"
              style="border: none; outline: none; margin-left: 2%"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="savebBseMsg('healBase')"
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
  props: {
    editDataList: null,
  },
  data() {
    return {
      editData: this.editDataList,
      nationality: ["中国", "其他"],
      nation: ["汉族", "蒙族", "回族", "藏族", "其他"],
      profession: [
        "学生",
        "家务",
        "农民劳动者",
        "科学研究人员",
        "工、农技术人员",
        "卫生技术人员",
        "法律工作人员",
        "教学人员",
        "文化工作人员",
        "待业",
        "不详",
        "其他",
      ],
      expenseType: [
        "公费",
        "自费",
        "新农合",
        "商业医疗保险",
        "贫困救助",
        "社会医疗保险",
        "其他",
      ],
      specialPeople: ["低保", "特困", "残疾", "医保签约", "持慈善卡", "其他"],
    };
  },
  activated() {
    //   国籍
    this.editData.nationalityInfo = this.getNationalityInfo(
      this.editData.nationality
    );
    this.editData.nationality = this.getNationality(this.editData.nationality);
    //   民族
    this.editData.nationInfo = this.getNationInfo(this.editData.nation);
    this.editData.nation = this.getNation(this.editData.nation);
    // 职业
    this.editData.professionInfo = this.getProfessionInfo(
      this.editData.profession
    );
    this.editData.profession = this.getProfession(this.editData.profession);
  },
  created() {
    //   国籍
    this.editData.nationalityInfo = this.getNationalityInfo(
      this.editData.nationality
    );
    this.editData.nationality = this.getNationality(this.editData.nationality);
     //   民族
    this.editData.nationInfo = this.getNationInfo(this.editData.nation);
    this.editData.nation = this.getNation(this.editData.nation);
    // 职业
    this.editData.professionInfo = this.getProfessionInfo(
      this.editData.profession
    );
    this.editData.profession = this.getProfession(this.editData.profession);
    // 医疗商业保险
    this.editData.expenseType = this.editData.expenseType.split(" ");
    this.editData.expenseTypeInfo = "";
    for (let item of this.editData.expenseType) {
      if (this.expenseType.indexOf(item) == -1) {
        this.editData.expenseTypeInfo = item;
        this.editData.expenseType.push("其他");
        this.editData.expenseType = this.fun(this.editData.expenseType);
      }
    }
    this.editData.expenseTypeInfo = this.getExpenseTypeInfo(
      this.editData.expenseTypeInfo
    );
    // 特殊类型人群
    this.editData.specialPeople = this.editData.specialPeople.split(" ");
    this.editData.specialPeopleInfo = "";
    for (let item of this.editData.specialPeople) {
      if (this.specialPeople.indexOf(item) == -1) {
        this.editData.specialPeopleInfo = item;
        this.editData.specialPeople.push("其他");
        this.editData.specialPeople = this.fun(this.editData.specialPeople);
      }
    }
    this.editData.specialPeopleInfo = this.getSpecialPeopleInfo(
      this.editData.specialPeopleInfo
    );
  },
  methods: {
    // 数组去重
    fun(arr) {
      let lose = new Set(arr);
      return [...lose];
    },
    //   国籍
    getNationality(value) {
      const list = ["中国", "其他"];
      const idx = list.indexOf(value);
      return idx == -1 ? "其他" : "中国";
    },
    getNationalityInfo(v) {
      console.log(v);
      const list = ["中国", "其他"];
      const idx = list.indexOf(v);
      console.log(idx);
      return idx == -1 ? v : "";
    },
    // 民族
    getNation(value) {
      const idx = this.nation.indexOf(value);
      return idx === -1 ? "其他" : value;
    },
    getNationInfo(v) {
      const idx = this.nation.indexOf(v);
      return idx === -1 ? v : "";
    },
    // 职业
    getProfession(value) {
      const idx = this.profession.indexOf(value);
      return idx == -1 ? '其他' : value;
    },
    getProfessionInfo(v) {
      const idx = this.profession.indexOf(v);
      return idx == -1 ? v : "";
    },
    // 医疗商业费用类型
    getExpenseTypeInfo(value) {
      let idx = this.expenseType.indexOf(value);
      return idx == -1 ? value : "";
    },
    // 特殊类型人群
    getSpecialPeopleInfo(value) {
      let idx = this.specialPeople.indexOf(value);
      return idx == -1 ? value : "";
    },
    savebBseMsg(healBase) {
      // 国籍
      if (this.editData.nationality == "其他") {
        this.editData.nationality = this.editData.nationalityInfo;
      }
      // 民族
       if (this.editData.nation == "其他") {
        this.editData.nation = this.editData.nationInfo;
      }
      // 职业
       if (this.editData.profession == "其他") {
        this.editData.profession = this.editData.professionInfo;
      }

      // 医疗费用类型
      if (this.editData.expenseType.indexOf("其他") == -1) {
        for (let item of this.editData.expenseType) {
          if (this.expenseType.indexOf(item) == -1) {
            this.editData.expenseType.splice(
              this.editData.expenseType.indexOf(item),
              1
            );
          }
        }
      } else {
        this.editData.expenseType.splice(
          this.editData.expenseType.indexOf(""),
          1
        );
        this.editData.expenseType.push(this.editData.expenseTypeInfo);
      }

      // 特殊类型人群
      if (this.editData.specialPeople.indexOf("其他") == -1) {
        for (let item of this.editData.specialPeople) {
          if (this.specialPeople.indexOf(item) == -1) {
            this.editData.specialPeople.splice(
              this.editData.specialPeople.indexOf(item),
              1
            );
          }
        }
      } else {
        this.editData.specialPeople.splice(
          this.editData.specialPeople.indexOf(""),
          1
        );
        this.editData.specialPeople.push(this.editData.specialPeopleInfo);
      }
      this.$refs[healBase].validate((valid) => {
        if (valid) {
          put(`/health/healthBase/${this.editData.id}`, {
            nationality: this.editData.nationality,
            birthplace: this.editData.birthplace,
            nation: this.editData.nation,
            marriage: this.editData.marriage,
            education: this.editData.education,
            presentAddr: this.editData.presentAddr,
            correspondenceAddr: this.editData.correspondenceAddr,
            profession: this.editData.profession,
            company: this.editData.company,
            expenseType: this.editData.expenseType.join(" "),
            fixMedicalUnit: this.editData.fixMedicalUnit,
            specialPeople: this.editData.specialPeople.join(" "),
          }).then((res) => {
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
.editHealthBase {
  .base_msg {
    padding: 3%;
    background: white;
    .base_msg_left {
      width: 50%;
      float: left;
    }
    .base_msg_right {
      width: 50%;
      float: right;
    }
  }
}
</style>