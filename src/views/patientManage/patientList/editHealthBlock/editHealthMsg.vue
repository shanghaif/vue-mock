<template>
  <div>
    <!-- 健康信息--编辑 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>健康信息</p>
      </div>
      <div class="user_label_msg">
        <el-form ref="healthMsg" label-width="100px">
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
            ></el-input
            >
          </el-form-item>
          <el-form-item label="体重">
            <el-input
              v-model="editData.weight"
              placeholder="体重"
              style="width: 8%"
            ></el-input
            >
          </el-form-item>
          <el-form-item label="腰围">
            <el-input
              v-model="editData.waist"
              placeholder="腰围"
              style="width: 8%"
            ></el-input
            >
          </el-form-item>
          <el-form-item label="臀围">
            <el-input
              v-model="editData.hip"
              placeholder="臀围"
              style="width: 8%"
            ></el-input
            >
          </el-form-item>
          <el-form-item label="BMI">
            <div>24.14</div>
          </el-form-item>
          <el-form-item label="腰:臀">
            <div>24.14</div>
          </el-form-item>
          <el-form-item label="药物过敏史">
            <el-radio-group v-model="editData.drugAllergy">
              <el-radio  v-for="(item, index) in medicine"
                :key="index"
                :label="item">{{item}}</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.drugAllergyInfo"
              v-show="editData.drugAllergy !== '其他过敏药物质(请注明)' ? false : true"
              placeholder="请填写其他药物过敏史"
              style="border: none; outline: none; margin-left: 1%"
            />
          </el-form-item>
          <h4>既往史</h4>
          <el-form-item label="疾病">
            <el-radio-group v-model="illness">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.illnessInfo"
              v-show="illness == '0' ? false : true"
              placeholder="请填写疾病名1称"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.illnessTime"
              v-show="illness == '0' ? false : true"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择确诊时间"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="手术">
            <el-radio-group v-model="operation">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.operationInfo"
              v-show="operation == '0' ? false : true"
              placeholder="请填写手术名称"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.operationTime"
              v-show="operation == '0' ? false : true"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择确诊时间"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="外伤">
            <el-radio-group v-model="trauma">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.traumaInfo"
              v-show="trauma == '0' ? false : true"
              placeholder="请填写外伤名称"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.traumaTime"
              type="date"
              v-show="trauma == '0' ? false : true"
              value-format="yyyy-MM-dd"
              placeholder="请选择确诊时间"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="输血">
            <el-radio-group v-model="transfusion">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>

            <input
              type="text"
              v-model="editData.transfusionInfo"
              v-show="transfusion == '0' ? false : true"
              placeholder="请填写输血原因"
              style="border: none; outline: none; margin-left: 1%"
            />
            <el-date-picker
              v-model="editData.transfusionTime"
              v-show="transfusion == '0' ? false : true"
              type="date"
              placeholder="请选择时间"
              value-format="yyyy-MM-dd"
              style="margin-left: 1%"
            ></el-date-picker>
          </el-form-item>
          <h4>家族病史</h4>
          <el-form-item label="父亲">
            <el-radio-group v-model="fatherRadio" @change="fatherChange">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>

            <el-checkbox-group
              v-model="editData.fatherDefault"
              v-show="fatherRadio == '0' ? false : true"
            >
              <el-checkbox
                v-for="(item, index) in fathersIll"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.fatherIllInfo"
                v-show="editData.fatherIll.includes('其他') ? true : false"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

           <el-form-item label="测试">
            <el-radio-group v-model="fatherRadio">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>

            <el-checkbox-group
              v-model="test"
            >
              <el-checkbox
                v-for="(item, index) in familyIlls"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.fatherIllInfo"
                v-show="editData.fatherIll.includes('其他') ? true : false"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>
          <!-- <el-form-item label="母亲">
            <el-radio-group v-model="motherRadio" @change="motherChange">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.motherDefault"
              v-show="motherRadio == '0' ? false : true"
            >
              <el-checkbox
                v-for="(item, index) in fathersIll"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.motherIllInfo"
                v-show="editData.motherIll.includes('其他') ? true : false"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="兄弟姐妹">
            <el-radio-group v-model="siblingRadio" @change="siblingChange">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>

            <el-checkbox-group
              v-model="editData.siblingDefault"
              v-show="siblingRadio == '0' ? false : true"
            >
              <el-checkbox
                v-for="(item, index) in fathersIll"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.siblingIllInfo"
                v-show="editData.siblingIll.includes('其他') ? true : false"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="子女">
            <el-radio-group v-model="childRadio" @change="childChange">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-model="editData.childDefault"
              v-show="childRadio == '0' ? false : true"
            >
              <el-checkbox
                v-for="(item, index) in fathersIll"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.childIllInfo"
                v-show="editData.childIll.includes('其他') ? true : false"
                placeholder="请填写其他疾病"
                style="border: none; outline: none; margin-left: 1%"
              />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="遗传病史">
            <el-radio-group v-model="editData.inheritIll">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <input
              type="text"
              v-model="editData.inheritIllInfo"
              placeholder="请填写其他遗传病史"
              v-show="editData.inheritIll == '1' ? true : false"
              style="border: none; outline: none; margin-left: 2%"
            />
          </el-form-item>

          <el-form-item label="残疾情况">
            <el-radio-group v-model="disabilityRadio">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
            <el-checkbox-group v-model="editData.disability" v-show="disabilityRadio == '0' ? false : true">
              <el-checkbox
                v-for="(item, index) in disabledCase"
                :key="index"
                :label="item"
                >{{ item }}</el-checkbox
              >
              <input
                type="text"
                v-model="editData.disabilityInfo"
                v-show="editData.disability.includes('其他残疾') ? true : false"
                placeholder="请填写其他残疾"
                style="border: none; outline: none; margin-left: 2%"
              />
            </el-checkbox-group>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="savebBseMsg('healthMsg')">保存</el-button>
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
  props: {
    editDataList: null,
  },
  data() {
    return {
      test:[],
      editData: this.editDataList,
      illness: "",
      operation: "",
      trauma: "",
      transfusion: "",
      fatherRadio: "",
      motherRadio: "",
      siblingRadio: "",
      childRadio: "",
      disabilityRadio: "",
      medicine:[
        "无","磺胺","青霉素","链霉素","不详","其他过敏药物质(请注明)"
      ],
      fathersIll: [
        "糖尿病",
        "高血压",
        "冠心病",
        "脑猝中",
        "高脂血症",
        "精神病",
        "肿瘤",
        "其他",
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
    };
  },
  watch: {
    // 监听选择‘无’，清空input框
    // editData: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal.inheritIll, oldVal);
    //     if(newVal.inheritIll == '0') this.editData.inheritIll = ""
    //   },
    //   deep: true,
    // },
    illness(newVal, oldVal) {
      if (newVal == "0") this.editData.illness = "";
    },
    operation(newVal, oldVal) {
      if (newVal == "0") this.editData.operation = "";
    },
    trauma(newVal, oldVal) {
      if (newVal == "0") this.editData.trauma = "";
    },
    transfusion(newVal, oldVal) {
      if (newVal == "0") this.editData.transfusion = "";
    },
  },
  // activated(){
  //   // 药物过敏史
  //   this.editData.drugAllergyInfo = this.getDrugAllergyInfo(
  //     this.editData.drugAllergy
  //   );
  //   this.editData.drugAllergy = this.getDrugAllergy(this.editData.drugAllergy);
  // },
  created() {
   console.log(this.editDataList,'获取来的数据')
    // this.editData = this.editDataList;
    this.editData.drugAllergyInfo = this.getDrugAllergyInfo(
      this.editData.drugAllergy
    );
    this.editData.drugAllergy = this.getDrugAllergy(this.editData.drugAllergy);
    //   疾病
    this.editData.illnessInfo = this.getIllnessInfo(this.editData.illness);
    this.editData.illnessDateInfo = this.getIllnessDateInfo(
      this.editData.illness
    );
    this.$set(this.editData, "illnessTime", this.editData.illnessDateInfo);
    this.illness = this.getIllness(this.editData.illnessInfo);
    // 手术
    this.editData.operationInfo = this.getOperationInfo(
      this.editData.operation
    );
    this.editData.operationDateInfo = this.getOperationDateInfo(
      this.editData.operation
    );
    this.$set(this.editData, "operationTime", this.editData.illnessDateInfo);
    this.operation = this.getOperation(this.editData.operationInfo);
    //  外伤
    this.editData.traumaInfo = this.getTraumaInfo(this.editData.trauma);
    this.editData.traumaDateInfo = this.getTraumaDateInfo(this.editData.trauma);
    this.$set(this.editData, "traumaTime", this.editData.traumaDateInfo);
    this.trauma = this.getTrauma(this.editData.traumaInfo);
    //  输血
    this.editData.transfusionInfo = this.getTransfusionInfo(
      this.editData.transfusion
    );
    this.editData.transfusionDateInfo = this.getTransfusionDateInfo(
      this.editData.transfusion
    );
    this.$set(
      this.editData,
      "transfusionTime",
      this.editData.transfusionDateInfo
    );
    this.transfusion = this.getTransfusion(this.editData.traumaInfo);
    // 父亲
    this.editData.fatherIll = this.editData.fatherIll.split(" ");
    this.editData.fatherIllInfo = "";
    for (let item of this.editData.fatherIll) {
      if (this.fathersIll.indexOf(item) == -1) {
        this.editData.fatherIll.push("其他");
        this.editData.fatherIllInfo = item;
      }
    }
    this.editData.fatherDefault = this.editData.fatherIll;
    this.fatherRadio = this.getFatherIllRadio(this.editData.fatherIll);
    // 母亲
    this.editData.motherIll = this.editData.motherIll.split(" ");

    this.editData.motherIll.push("其他啊--");
    this.editData.motherIllInfo = "";
    for (let item of this.editData.motherIll) {
      if (this.fathersIll.indexOf(item) == -1) {
        this.editData.motherIll.push("其他");
        this.editData.motherIllInfo = item;
      }
    }
    this.editData.motherDefault = this.editData.motherIll;
    this.motherRadio = this.getMotherRadio(this.editData.motherIll);
    //   兄弟姐妹
    this.editData.siblingIll = this.editData.siblingIll.split(" ");
    this.editData.siblingIll.push("其他啊--");
    this.editData.siblingIllInfo = "";
    for (let item of this.editData.siblingIll) {
      if (this.fathersIll.indexOf(item) == -1) {
        this.editData.siblingIll.push("其他");
        this.editData.siblingIllInfo = item;
        this.editData.siblingDefault = this.editData.siblingIll;
      }
    }
    this.siblingRadio = this.getSiblingIllRadio(this.editData.siblingIll);
    //   子女
    this.editData.childIll = this.editData.childIll.split(" ");
    this.editData.childIll.push("其他啊--");
    this.editData.childIllInfo = "";
    for (let item of this.editData.childIll) {
      if (this.fathersIll.indexOf(item) == -1) {
        this.editData.childIll.push("其他");
        this.editData.childIllInfo = item;
      }
    }
    this.editData.childDefault = this.editData.childIll;
    this.childRadio = this.getChildIllRadio(this.editData.childIll);
    //   遗传病史
    this.editData.inheritIllInfo = this.getInheritIllInfo(
      this.editData.inheritIll
    );
    this.editData.inheritIll = this.getDrugAllergy(this.editData.inheritIll);
    //   残疾情况
    this.editData.disability = this.editData.disability.split(" ");
    //   this.editData.disability.push('其他啊--')
    this.editData.disabilityInfo = "";
    for (let item of this.editData.disability) {
      if (this.disabledCase.indexOf(item) == -1) {
        console.log(item);
        this.editData.disability.push("其他残疾");
        this.editData.disabilityInfo = item;
      }
    }
    this.disabilityRadio = this.getDisabilityRadio(this.editData.disability);
  },
  methods: {
    getDrugAllergy(value) {
      console.log(value)
      const list = ["无", "磺胺", "青霉素", "链霉素",'其他过敏物质(请注明)', "不详"];
      const idx = list.indexOf(value);
      return idx == -1 ? '其他过敏物质(请注明)' : value;
    },
    getDrugAllergyInfo(v) {
      console.log(v);
      const list = ["无", "磺胺", "青霉素", "链霉素",'其他过敏物质(请注明)', "不详"];
      const idx = list.indexOf(v);
      return idx === -1 ? v : "";
    },
    // saveDrug() {
    //   if (this.editData.drugAllergy == "5") {
    //     return this.editData.drugAllergyInfo;
    //   }
    //   const list = ["无", "磺胺", "青霉素", "链霉素", "不详"];
    //   return list[~~this.editData.drugAllergy];
    // },
    // 疾病
    getIllness(value) {
      const list = ["无", "有"];
      let idx = list.indexOf(value);
      return idx == -1 ? "1" : idx + "";
    },
    getIllnessInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[0];
    },
    getIllnessDateInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[1];
    },
    // 手术
    getOperation(value) {
      const list = ["无", "有"];
      let idx = list.indexOf(value);
      return idx == -1 ? "1" : idx + "";
    },
    getOperationInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[0];
    },
    getOperationDateInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[1];
    },
    // 外伤
    getTrauma(value) {
      const list = ["无", "有"];
      let idx = list.indexOf(value);
      return idx == -1 ? "1" : idx + "";
    },
    getTraumaInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[0];
    },
    getTraumaDateInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[1];
    },
    // 外伤
    getTransfusion(value) {
      const list = ["无", "有"];
      let idx = list.indexOf(value);
      return idx == -1 ? "1" : idx + "";
    },
    getTransfusionInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[0];
    },
    getTransfusionDateInfo(v) {
      console.log(v);
      v.split(" ");
      return v.split(" ")[1];
    },
    // 父亲
    getFatherIllRadio(value) {
      let idx = value.length >= 0 ? "1" : "0";
      return idx;
    },
    fatherChange(val) {
      if (val == "0") {
        this.editData.fatherIll = "";
      }
    },
    // 母亲
    getMotherRadio(value) {
      let idx = value.length >= 0 ? "1" : "0";
      return idx;
    },
    motherChange() {
      if (val == "0") {
        console.log("666666");
        this.editData.motherIll = "";
      }
    },
    siblingChange() {
      if (val == "0") {
        this.editData.siblingIll = "";
      }
    },
    childChange() {
      if (val == "0") {
        this.editData.childIll = "";
      }
    },
    // 兄弟姐妹
    getSiblingIllRadio(value) {
      let idx = value.length >= 0 ? "1" : "0";
      return idx;
    },
    // 子女
    getChildIllRadio(value) {
      let idx = value.length >= 0 ? "1" : "0";
      return idx;
    },
    // 遗传病史
    getDrugAllergy(value) {
      const list = ["无", "有"];
      const idx = list.indexOf(value);
      return idx == -1 ? 1 + "" : idx + "";
    },
    getInheritIllInfo(v) {
      const list = ["无", "有"];
      const idx = list.indexOf(v);
      return idx === -1 ? v : "";
    },
    getDisabilityRadio(value) {
      let idx = value.length >= 0 ? "1" : "0";
      return idx;
    },
    savebBseMsg(healthMsg) {
      // console.log(this.editData.fatherDefault, this.editData.motherDefault);
      // this.editData.drugAllergy = this.saveDrug();
      // this.editData.fatherIll = this.editData.fatherIll.join(" ");
      // this.editData.motherIll = this.editData.motherIll.join(" ");
      // this.editData.siblingIll = this.editData.siblingIll.join(" ");
      // this.editData.childIll = this.editData.childIll.join(" ");
      // this.editData.disability = this.editData.disability.join(" ");
       console.log(this.editDataList,this.editData,'健康信息的列表');
      // console.log(this.illness,this.editData.fatherIll)
      // 药物过敏史
      if(this.editData.drugAllergy == "其他过敏药物质(请注明)"){
        this.editData.drugAllergy = this.editData.drugAllergyInfo
      }
      // console.log(this.editData.drugAllergy,this.editData.drugAllergyInfo,'药物过敏史');
      // console.log(
      //   this.editData.transfusionTime,
      //   this.editData.transfusionInfo,
      //   "保存编辑信息"
      // );

      this.$refs[healthMsg].validate((valid) => {
        if (valid) {
          // put(`/health/healthInfo/${this.editData.id}`, {
          //   bloodType: this.editData.bloodType,
          //   rhNegative: this.editData.rhNegative,
          //   height: this.editData.height,
          //   weight: this.editData.weight,
          //   waist: this.editData.waist,
          //   hip: this.editData.hip,
          //   drugAllergy: this.editData.drugAllergy,
          //   illness: this.editData.illness,
          //   operation: this.editData.operation,
          //   trauma: this.editData.trauma,
          //   transfusion: this.editData.transfusion,
          //   fatherIll: this.editData.fatherIll,
          //   motherIll: this.editData.motherIll,
          //   siblingIll: this.editData.siblingIll,
          //   childIll: this.editData.childIll,
          //   inheritIll: this.editData.inheritIll,
          //   disability: this.editData.disability
          // }).then((res) => {
          //   console.log(res,'健康信息的保存按钮')
          //   // this.$router.push("/Patientwatch");
          // });
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