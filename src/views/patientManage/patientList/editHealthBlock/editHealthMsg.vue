<template>
  <div>
    <!-- 健康信息--编辑 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>健康信息</p>
      </div>
      <div class="user_label_msg">
        <el-form ref="healthMsg" :model="editData" label-width="100px">
          <el-form-item label="血型">
            <el-radio-group v-model="editData.bloodType">
              <el-radio label="A">A</el-radio>
              <el-radio label="B">B</el-radio>
              <el-radio label="O">O</el-radio>
              <el-radio label="AB">AB</el-radio>
              <el-radio label="不详">不详</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="RH阴性">
            <el-radio-group v-model="editData.rhNegative">
              <el-radio label="是">是</el-radio>
              <el-radio label="否">否</el-radio>
              <el-radio label="不详">不详</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="身高">
            <el-input
              v-model="editData.height"
              placeholder="身高"
              style="width: 8%"
            ></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input
              v-model="editData.weight"
              placeholder="体重"
              style="width: 8%"
            ></el-input>
          </el-form-item>
          <el-form-item label="腰围">
            <el-input
              v-model="editData.waist"
              placeholder="腰围"
              style="width: 8%"
            ></el-input>
          </el-form-item>
          <el-form-item label="臀围">
            <el-input
              v-model="editData.hip"
              placeholder="臀围"
              style="width: 8%"
            ></el-input>
          </el-form-item>
          <el-form-item label="BMI">
            <div>{{ editData.bmi }}</div>
          </el-form-item>
          <el-form-item label="腰:臀">
            <div>{{ editData.waistHip }}</div>
          </el-form-item>
          <el-form-item label="药物过敏史">
            <el-radio-group v-model="editData.drugAllergy">
              <el-radio
                v-for="(item, index) in medicine"
                :key="index"
                :label="item"
                >{{ item }}</el-radio
              >
            </el-radio-group>
            <input
              type="text"
              v-model="editData.drugAllergyInfo"
              v-show="
                editData.drugAllergy !== '其他过敏药物质(请注明)' ? false : true
              "
              placeholder="请填写其他药物过敏史"
              style="border: none; outline: none; margin-left: 1%"
            />
          </el-form-item>
          <h4>既往史</h4>
          <el-form-item label="疾病">
            <el-radio-group v-model="editData.illness" @change="illnessChange">
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.illnessName"
              v-show="editData.illness == '无' ? false : true"
              placeholder="请填写疾病名称"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.illnessTime"
              v-show="editData.illness == '无' ? false : true"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择确诊时间"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="手术">
            <el-radio-group
              v-model="editData.operation"
              @change="operationChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.operationName"
              v-show="editData.operation == '无' ? false : true"
              placeholder="请填写手术名称"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.operationTime"
              v-show="editData.operation == '无' ? false : true"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择确诊时间"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="外伤">
            <el-radio-group v-model="editData.trauma" @change="traumaChange">
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.traumaName"
              v-show="editData.trauma == '无' ? false : true"
              placeholder="请填写外伤名称"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.traumaTime"
              type="date"
              v-show="editData.trauma == '无' ? false : true"
              value-format="yyyy-MM-dd"
              placeholder="请选择确诊时间"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="输血">
            <el-radio-group
              v-model="editData.transfusion"
              @change="transfusionChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>

            <input
              type="text"
              v-model="editData.transfusionName"
              v-show="editData.transfusion == '无' ? false : true"
              placeholder="请填写输血原因"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.transfusionTime"
              v-show="editData.transfusion == '无' ? false : true"
              type="date"
              placeholder="请选择时间"
              value-format="yyyy-MM-dd"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <h4>家族病史</h4>
          <el-form-item label="父亲">
            <el-radio-group
              v-model="editData.fatherRadio"
              @change="fatherIllChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.fatherIll"
              v-show="editData.fatherRadio == '有' ? true : false"
            >
              <el-checkbox
                v-for="item in familyIlls"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.fatherIllInfo"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="母亲">
            <el-radio-group
              v-model="editData.motherRadio"
              @change="motherIllChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.motherIll"
              v-show="editData.motherRadio == '有' ? true : false"
            >
              <el-checkbox
                v-for="item in familyIlls"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.motherIllInfo"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="兄弟姐妹">
            <el-radio-group
              v-model="editData.siblingRadio"
              @change="siblingIllChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.siblingIll"
              v-show="editData.siblingRadio == '有' ? true : false"
            >
              <el-checkbox
                v-for="item in familyIlls"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.siblingIllInfo"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="子女">
            <el-radio-group
              v-model="editData.childRadio"
              @change="childIllChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.childIll"
              v-show="editData.childRadio == '有' ? true : false"
            >
              <el-checkbox
                v-for="item in familyIlls"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.childIllInfo"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="遗传病史">
            <el-radio-group v-model="editData.inheritIll">
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.inheritIllInfo"
              placeholder="请填写其他遗传病史"
              v-show="editData.inheritIll == '有' ? true : false"
              style="border: none; outline: none; margin-left: 2%"
            />
          </el-form-item>

          <el-form-item label="残疾情况">
            <el-radio-group
              v-model="editData.disabilityRadio"
              @change="disabilityIllChange"
            >
              <el-radio label="无">无</el-radio>
              <el-radio label="有">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.disability"
              v-show="editData.disabilityRadio == '有' ? true : false"
            >
              <el-checkbox
                v-for="item in disabledCase"
                :label="item"
                :key="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.disabilityInfo"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="savebBseMsg('healthMsg')"
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
import { put } from "@/request/http";
export default {
  props: ["editDataList"],
  data() {
    return {
      editData: this.editDataList,
      arr: [],
      medicine: [
        "无",
        "磺胺",
        "青霉素",
        "链霉素",
        "不详",
        "其他过敏药物质(请注明)",
      ],
      familyIlls: [
        "糖尿病",
        "高血压",
        "冠心病",
        "脑猝中",
        "高脂血症",
        "精神病",
        "肿瘤",
        "其他",
      ],
      disabledCase: [
        "视力残疾",
        "听力残疾",
        "言语残疾",
        "肢体残疾",
        "智力残疾",
        "精神残疾",
        "其他残疾",
      ],
      familyOther: null,
    };
  },
  activated() {
    this.editData.illness = this.getIllness(this.editData.illness);
    this.editData.operation = this.getOperation(this.editData.operation);
    this.editData.trauma = this.getTrauma(this.editData.trauma);
    this.editData.transfusion = this.getTransfusion(this.editData.transfusion);
  },
  created() {
    // bmi
    this.editData.bmi = parseFloat(
      this.editData.weight.replace(/[^0-9]/gi, "") /
        Math.pow(this.editData.height.replace(/[^0-9]/gi, "") / 100, 2)
    ).toFixed(2);
    this.editData.waistHip = parseFloat(
      this.editData.waist.replace(/[^0-9]/gi, "") /
        this.editData.hip.replace(/[^0-9]/gi, "")
    ).toFixed(2);
    console.log(this.editData, "4444");

    // 既往史
    this.editData.illness = this.getIllness(this.editData.illness);
    this.editData.operation = this.getOperation(this.editData.operation);
    this.editData.trauma = this.getTrauma(this.editData.trauma);
    this.editData.transfusion = this.getTransfusion(this.editData.transfusion);
    // 家族病史
    if (
      this.editData.fatherIll == undefined ||
      this.editData.motherIll == undefined ||
      this.editData.siblingIll == undefined ||
      this.editData.childIll == undefined ||
      this.editData.disability == undefined
    ) {
      this.editData.fatherIll = JSON.parse([]);
      this.editData.motherIll = JSON.parse([]);
      this.editData.siblingIll = JSON.parse([]);
      this.editData.childIll = JSON.parse([]);
      this.editData.disability = JSON.parse([]);
    }
    this.editData.fatherIll = this.getFatherIll(this.editData.fatherIll);
    this.editData.motherIll = this.getMotherIll(this.editData.motherIll);
    this.editData.siblingIll = this.getSiblingIll(this.editData.siblingIll);
    this.editData.childIll = this.getChildIll(this.editData.childIll);
    this.editData.inheritIll = this.getInheritIll(this.editData.inheritIll);
    this.editData.disability = this.getDisabilityIll(this.editData.disability);

    // 药物过敏史
    this.editData.drugAllergy = this.getDrugAllergy(this.editData.drugAllergy);
  },
  methods: {
    // 既往史
    getIllness(val) {
      if (val == "无" || val == undefined) {
        return "无";
      } else {
        let splitVal = val.split(" ");
        this.editData.illnessName = val.split(" ")[0];
        this.$set(this.editData, "illnessTime", val.split(" ")[1]);
        return "有";
      }
    },
    illnessChange(val) {
      if (val == "无") {
        this.editData.illnessName = "";
        this.editData.illnessTime = "";
      }
    },
    getOperation(val) {
      console.log(val);
      if (val == "无" || val == undefined) {
        return "无";
      } else {
        let splitVal = val.split(" ");
        this.editData.operationName = val.split(" ")[0];
        this.$set(this.editData, "operationTime", val.split(" ")[1]);
        return "有";
      }
    },
    operationChange(val) {
      if (val == "无") {
        this.editData.operationName = "";
        this.editData.operationTime = "";
      }
    },
    getTrauma(val) {
      console.log(val);
      if (val == "无" || val == undefined) {
        return "无";
      } else {
        let splitVal = val.split(" ");
        this.editData.traumaName = val.split(" ")[0];
        this.$set(this.editData, "traumaTime", val.split(" ")[1]);
        return "有";
      }
    },
    traumaChange(val) {
      if (val == "无") {
        this.editData.traumaName = "";
        this.editData.traumaTime = "";
      }
    },
    getTransfusion(val) {
      console.log(val);
      if (val == "无" || val == undefined) {
        return "无";
      } else {
        let splitVal = val.split(" ");
        this.editData.transfusionName = val.split(" ")[0];
        this.$set(this.editData, "transfusionTime", val.split(" ")[1]);
        return "有";
      }
    },
    transfusionChange(val) {
      if (val == "无") {
        this.editData.transfusionName = "";
        this.editData.transfusionTime = "";
      }
    },
    // 家族病史
    getFatherIll(val) {
      let splitVal = val.split(" ");
      console.log(val, val == "");
      if (val == "") {
        this.$set(this.editData, "fatherRadio", "无");
      } else if (splitVal.length > 0) {
        this.$set(this.editData, "fatherRadio", "有");
      }
      if (this.disabledCase.indexOf("其他残疾"))
        this.editData.fatherIllInfo = "";
      for (let item of splitVal) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.fatherIllInfo = item;
          // splitVal.push('其他')
        }
      }
      return splitVal;
    },
    fatherIllChange(val) {
      if (val == "无") {
        this.editData.fatherIll = [];
      } else {
        this.editData.fatherIll.join(" ");
      }
    },
    getMotherIll(val) {
      let splitVal = val.split(" ");
      if (val == "") {
        this.$set(this.editData, "motherRadio", "无");
      } else if (splitVal.length > 0) {
        this.$set(this.editData, "motherRadio", "有");
      }
      if (this.disabledCase.indexOf("其他残疾"))
        this.editData.motherIllInfo = "";
      for (let item of splitVal) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.motherIllInfo = item;
        }
      }
      return splitVal;
    },
    motherIllChange(val) {
      if (val == "无") {
        this.editData.motherIll = [];
      } else {
        this.editData.motherIll.join(" ");
      }
    },
    getSiblingIll(val) {
      let splitVal = val.split(" ");
      if (val == "") {
        this.$set(this.editData, "siblingRadio", "无");
      } else if (splitVal.length > 0) {
        this.$set(this.editData, "siblingRadio", "有");
      }
      if (this.disabledCase.indexOf("其他残疾"))
        this.editData.siblingIllInfo = "";
      for (let item of splitVal) {
        console.log(item);
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.siblingIllInfo = item;
        }
      }
      return splitVal;
    },
    siblingIllChange(val) {
      if (val == "无") {
        this.editData.siblingIll = [];
      } else {
        this.editData.siblingIll.join(" ");
      }
    },
    getChildIll(val) {
      let splitVal = val.split(" ");
      if (val == "") {
        this.$set(this.editData, "childRadio", "无");
      } else if (splitVal.length > 0) {
        this.$set(this.editData, "childRadio", "有");
      }
      if (this.disabledCase.indexOf("其他残疾"))
        this.editData.childIllInfo = "";
      for (let item of splitVal) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.childIllInfo = item;
        }
      }
      return splitVal;
    },
    childIllChange(val) {
      if (val == "无") {
        this.editData.childIll = [];
      } else {
        this.editData.childIll.join(" ");
      }
    },
    getInheritIll(val) {
      if (val !== "无") {
        this.editData.inheritIll = "有";
        this.editData.inheritIllInfo = val;
      }
      this.editData.inheritIllInfo = "";
      return "无";
    },
    getDisabilityIll(val) {
      let splitVal = val.split(" ");
      if (val == "") {
        this.$set(this.editData, "disabilityRadio", "无");
      } else if (splitVal.length > 0) {
        this.$set(this.editData, "disabilityRadio", "有");
      }
      if (this.disabledCase.indexOf("其他残疾"))
        this.editData.disabilityInfo = "";
      for (let item of splitVal) {
        if (this.disabledCase.indexOf(item) == -1) {
          this.editData.disabilityInfo = item;
        }
      }
      return splitVal;
    },
    disabilityIllChange(val) {
      if (val == "无") {
        this.editData.disability = [];
      } else {
        this.editData.disability.join(" ");
      }
    },
    getDrugAllergy(val) {
      if (val !== "无" || val !== undefined) {
        if (this.medicine.indexOf(val) == -1) {
          this.$set(this.editData, "drugAllergy", "其他过敏药物质(请注明)");
          this.editData.drugAllergyInfo = val;
        }
      }
      return "无";
    },
    // 数组去重
    fun(arr) {
      let lose = new Set(arr);
      return [...lose];
    },
    savebBseMsg(healthMsg) {
      for (let item of this.editData.fatherIll) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.fatherIll.splice(
            this.editData.fatherIll.indexOf(item),
            1,
            this.editData.fatherIllInfo
          );
          this.editData.fatherIll = this.fun(this.editData.fatherIll);
        } else {
          if (this.editData.fatherIllInfo !== "") {
            this.editData.fatherIll.push(this.editData.fatherIllInfo);
            this.editData.fatherIll = this.fun(this.editData.fatherIll);
          }
        }
      }

      for (let item of this.editData.motherIll) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.motherIll.splice(
            this.editData.motherIll.indexOf(item),
            1,
            this.editData.motherIllInfo
          );
          console.log(
            this.editData.motherIll.indexOf(item),
            this.editData.motherIll
          );
        } else {
          if (this.editData.motherIllInfo !== "") {
            this.editData.motherIll.push(this.editData.motherIllInfo);
            this.editData.motherIll = this.fun(this.editData.motherIll);
          }
        }
      }

      for (let item of this.editData.siblingIll) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.siblingIll.splice(
            this.editData.siblingIll.indexOf(item),
            1,
            this.editData.siblingIllInfo
          );
          console.log(
            this.editData.siblingIll.indexOf(item),
            this.editData.siblingIll
          );
        } else {
          if (this.editData.siblingIllInfo !== "") {
            this.editData.siblingIll.push(this.editData.siblingIllInfo);
            this.editData.siblingIll = this.fun(this.editData.siblingIll);
          }
        }
      }

      for (let item of this.editData.childIll) {
        if (this.familyIlls.indexOf(item) == -1) {
          this.editData.childIll.splice(
            this.editData.childIll.indexOf(item),
            1,
            this.editData.childIllInfo
          );
          console.log(
            this.editData.childIll.indexOf(item),
            this.editData.childIll
          );
        } else {
          if (this.editData.childIllInfo !== "") {
            this.editData.childIll.push(this.editData.childIllInfo);
            this.editData.childIll = this.fun(this.editData.childIll);
          }
        }
      }

      for (let item of this.editData.disability) {
        if (this.disabledCase.indexOf(item) == -1) {
          this.editData.disability.splice(
            this.editData.disability.indexOf(item),
            1,
            this.editData.disabilityInfo
          );
          console.log(
            this.editData.disability.indexOf(item),
            this.editData.disability
          );
        } else {
          if (this.editData.disabilityInfo !== "") {
            this.editData.disability.push(this.editData.disabilityInfo);
            this.editData.disability = this.fun(this.editData.disability);
          }
        }
      }

      this.$refs[healthMsg].validate((valid) => {
        if (valid) {
          put(`/health/healthInfo/${this.editData.id}`, {
            bloodType: this.editData.bloodType,
            rhNegative: this.editData.rhNegative,
            height: this.editData.height,
            weight: this.editData.weight,
            waist: this.editData.waist,
            hip: this.editData.hip,
            drugAllergy: this.editData.drugAllergy,
            illness:
              this.editData.illness == "有"
                ? this.editData.illnessName + " " + this.editData.illnessTime
                : "无",
            operation:
              this.editData.operation == "有"
                ? this.editData.operationName +
                  " " +
                  this.editData.operationTime
                : "无",
            trauma:
              this.editData.trauma == "有"
                ? this.editData.traumaName + " " + this.editData.traumaTime
                : "无",
            transfusion:
              this.editData.transfusion == "有"
                ? this.editData.transfusionName +
                  " " +
                  this.editData.transfusionTime
                : "无",
            fatherIll: this.editData.fatherIll.join(" "),
            motherIll: this.editData.motherIll.join(" "),
            siblingIll: this.editData.siblingIll.join(" "),
            childIll: this.editData.childIll.join(" "),
            inheritIll: this.editData.inheritIll,
            disability: this.editData.disability.join(" "),
          }).then((res) => {
            console.log(res, "健康信息的保存按钮", this.editData);
            // this.$router.push("/Patientwatch");
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
h4 {
  padding-bottom: 2%;
}
</style>