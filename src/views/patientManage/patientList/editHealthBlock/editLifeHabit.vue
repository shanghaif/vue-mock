<template>
  <div>
    <!-- 生活习惯--编辑 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>生活习惯</p>
        <el-button plain>编辑</el-button>
      </div>
      <div class="user_label_msg">
        <el-form ref="lifeHabit" :model="form" label-width="100px">
          <h4>吸烟史</h4>
          <el-form-item label="是否吸烟">
            <el-radio-group v-model="smoking" v-show="true">
              <el-radio label="0">是</el-radio>
              <el-radio label="1">否</el-radio>
              <el-radio label="2">已戒</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="开始吸烟时间"
            v-show="smoking == '0' || smoking == '2' ? true : false"
          >
            <el-date-picker
              v-model="editData.beginSmokeTime"
              type="year"
              value-format="yyyy"
              placeholder="选择时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="吸烟量"
            v-show="smoking == '0' || smoking == '2' ? true : false"
          >
            <el-radio-group v-model="editData.smokeAmount" v-show="true">
              <el-radio label="偶尔（<3支/周）">偶尔(<3支/周)</el-radio>
              <el-radio label="少量（1-4支/日）">少量(<1-4支/日)</el-radio>
              <el-radio label="经常（≥支/日）">经常(≥支/日)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="开始戒烟时间"
            v-show="smoking == '2' ? true : false"
          >
            <el-date-picker
              v-model="editData.endSmokeTime"
              type="year"
              value-format="yyyy"
              placeholder="选择时间"
            >
            </el-date-picker>
          </el-form-item>
          <h4>饮酒史</h4>
          <el-form-item label="是否饮酒">
            <el-radio-group v-model="drinking" v-show="true">
              <el-radio label="0">是</el-radio>
              <el-radio label="1">否</el-radio>
              <el-radio label="2">已戒</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="饮酒类型"
            v-show="drinking == '0' ? true : false"
          >
            <el-radio-group v-model="editData.drinkType">
              <el-radio label="色酒（酒精含量<15）">色酒(酒精含量<15)</el-radio>
              <el-radio label="啤酒（酒精含量15-40，色酒100-150ml）"
                >啤酒(酒精含量15-40,色酒100-150ml)</el-radio
              >
              <el-radio label="白酒（酒精含量≥45）">白酒(酒精含量≥45)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="饮酒量" v-show="drinking == '0' ? true : false">
            <el-radio-group v-model="editData.drinkAmount">
              <el-radio
                label="少量（啤酒<250-500ml/次，色酒100-150ml/次，白酒50-250ml/次）"
                >少量(啤酒<250-500ml/次,色酒100-150ml/次,白酒50-250ml/次)</el-radio
              >
              <el-radio
                label="中量（啤酒500-2500ml/次，色酒150-250ml/次，白酒50-250ml/次）"
                >中量(啤酒500-2500ml/次,色酒150-250ml/次,白酒50-250ml/次)</el-radio
              >
              <el-radio label="大量（啤酒>2500ml/次，其他酒>250ml/次）"
                >大量(啤酒>2500ml/次,其他酒>250ml/次)</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="饮酒频率"
            v-show="drinking == '0' ? true : false"
          >
            <el-radio-group v-model="editData.drinkFrequency">
              <el-radio label="偶尔（每年<3-4次）">偶尔(每年<3-4次)</el-radio>
              <el-radio label="少量（每年<3次）">少量(每年<3次)</el-radio>
              <el-radio label="经常（每天喝）">经常(每天喝)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="戒酒日期"
            v-show="drinking == '2' ? true : false"
          >
            <el-date-picker
              v-model="editData.endDrinkTime"
              type="year"
              value-format="yyyy"
              placeholder="选择戒酒日期"
            >
            </el-date-picker>
          </el-form-item>

          <h4>体育训练情况</h4>
          <el-form-item label="是否锻炼">
            <el-radio-group v-model="editData.exerciseRegular" v-show="true">
              <el-radio label="是">是</el-radio>
              <el-radio label="否">否</el-radio>
              <el-radio label="无规律">无规律</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="锻炼情况"
            v-show="
              editData.exerciseRegular == '是' ||
              editData.exerciseRegular == '无规律'
                ? true
                : false
            "
          >
            <el-radio-group v-model="editData.exerciseSituation" v-show="true">
              <el-radio label="每天锻炼">每天锻炼</el-radio>
              <el-radio label="每周3次及以上">每周3次及以上</el-radio>
              <el-radio label="每周1-2次">每周1-2次</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="每次锻炼时间"
            v-show="
              editData.exerciseRegular == '是' ||
              editData.exerciseRegular == '无规律'
                ? true
                : false
            "
          >
            <el-radio-group v-model="editData.exerciseTime">
              <el-radio label="0"><30分钟</el-radio>
              <el-radio label="1">30-60分钟</el-radio>
              <el-radio label="2">1小时以上</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="锻炼类型"
            v-show="
              editData.exerciseRegular == '是' ||
              editData.exerciseRegular == '无规律'
                ? true
                : false
            "
          >
            <el-radio-group v-model="editData.exerciseType" v-show="true">
              <el-radio
                label="有氧运动（慢跑、气功、极拳、跳舞、散步、游泳、登山）"
                >有氧运动(慢跑、气功、极拳、跳舞、散步、游泳、登山)</el-radio
              >
              <el-radio label="无氧运动（速跑、篮球、排球、足球等剧烈运动）"
                >无氧运动(速跑、篮球、排球、足球等剧烈运动)</el-radio
              >
              <el-radio label="无规律">无规律</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="饮食习惯类型">
            <el-radio-group v-model="editData.eatType">
              <el-radio
                v-for="(item, index) in eatType"
                :key="index"
                :label="index"
                >{{ item }}</el-radio
              >
            </el-radio-group>

            <input
              type="text"
              v-model="editData.eatTypeInfo"
              v-show="editData.eatType == '6' ? true : false"
              placeholder="饮食习惯类型"
              style="border: none; outline: none; margin-left: 2%"
            />
            <input
              type="text"
              v-model="editData.kg"
              placeholder="克/次"
              style="border: none; outline: none; margin-left: 1%"
            />
          </el-form-item>
          <el-form-item label="睡眠情况">
            <el-radio-group v-model="editData.sleepSituation">
              <el-radio
                v-for="(item, index) in sleepCase"
                :key="index"
                :label="index"
                >{{ item }}</el-radio
              >
            </el-radio-group>
            <input
              type="text"
              v-model="editData.hourOfDay"
              placeholder="8小时/天"
              style="width: 100px; border: none; outline: none; margin-left: 2%"
            />
            <input
              type="text"
              v-model="editData.sleepSituationInfo"
              v-show="editData.sleepSituation == '4' ? true : false"
              placeholder="请输入其他睡眠情况"
              style="border: none; outline: none"
            />
          </el-form-item>
          <el-form-item label="其他习惯">
            <el-radio-group v-model="editData.otherRegular">
              <el-radio label="0">无</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>

            <input
              type="text"
              v-model="editData.otherRegularInfo"
              placeholder="请输入其他习惯"
              v-show="editData.otherRegular == '1' ? true : false"
              style="border: none; outline: none; margin-left: 2%"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="savebBseMsg('lifeHabit')"
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
      smoking: "",
      drinking: "",
      beginSmokingTime: "1956",
      editData: this.editDataList,
      eatType: ["偏咸", "偏甜", "偏油", "素食", "辛辣", "嗜热食", "其他"],
      sleepCase: ["睡眠困难", "入睡困难", "早醒", "没有", "其他"],
    };
  },
  watch: {
    smoking(newVal, oldVal) {
      switch (newVal) {
        case "0":
          this.editData.endSmokeTime = "";
          break;
        case "1":
          this.editData.beginSmokeTime = "";
          this.editData.endSmokeTime = "";
          this.editData.smokeAmount = "";
          break;
        default:
          break;
      }
    },
    drinking(newVal, oldVal) {
      switch (newVal) {
        case "1":
          this.editData.drinkType = "";
          this.editData.drinkAmount = "";
          this.editData.drinkFrequency = "";
          break;
        case "2":
          this.editData.drinkType = "";
          this.editData.drinkAmount = "";
          this.editData.drinkFrequency = "";
          this.editData.endDrinkTime = "";
          break;
        default:
          break;
      }
    },
    editData: {
      handler(newVal, oldVal) {
        console.log(newVal.eatType, oldVal);
        switch (newVal.exerciseRegular) {
          case "否":
            this.editData.exerciseSituation = "";
            this.editData.exerciseTime = "";
            this.editData.exerciseType = "";
            break;
          default:
            break;
        }

        switch (newVal.exerciseTime) {
          case 0:
            this.editData.exerciseTime = "<30分钟";
            break;
          case 1 :
            this.editData.exerciseTime = "30-60分钟";
            break;
          case 2:
            this.editData.exerciseTime = "每周1-2次";
            break;
          default:
            break;
        }
      },
      deep: true,
    },
  },
  created() {
    // this.editData = this.editDataList;
    //   是否吸烟
    this.editData.beginSmokeTime = this.getYearData(
      this.editData.beginSmokeTime
    );
    this.editData.endSmokeTime = this.getYearData(this.editData.endSmokeTime);
    this.smoking = this.getSmoking(
      this.editData.smokeAmount,
      this.editData.endSmokeTime
    );

    // 是否饮酒
    this.editData.endDrinkTime = this.getYearData(this.editData.endDrinkTime);
    this.drinking = this.getDrinking(
      this.editData.endDrinkTime,
      this.editData.drinkType,
      this.editData.drinkAmount,
      this.editData.drinkFrequency
    );

    console.log(this.editData, "生活习惯");
    //   每日锻炼时间
    this.editData.exerciseTime = this.getExerciseTime(
      this.editData.exerciseTime
    );
    //   饮食习惯类型
    // this.editData.eatType = "偏甜"
    this.editData.eatTypeInfo = this.getEatTypeInfo(this.editData.eatType);
    this.editData.kg = this.getKg(this.editData.eatType);
    this.editData.eatType = this.getEatType(this.editData.eatType);
    // 睡眠请跨
    this.editData.sleepSituationInfo = this.getSleepSituationInfo(
      this.editData.sleepSituation
    );
    this.editData.hourOfDay = this.getHourOfDay(this.editData.sleepSituation);
    this.editData.sleepSituation = this.getSleepSituation(
      this.editData.sleepSituation
    );
    // 其他习惯
    this.editData.otherRegularInfo = this.getOtherRegularInfo(
      this.editData.otherRegular
    );
    this.editData.otherRegular = this.getOtherRegular(
      this.editData.otherRegular
    );
  },
  methods: {
    // //   是否吸烟
    getSmoking(smokeValue, endSmokeValue) {
      if (smokeValue.length >= 1 && endSmokeValue.length >= 1) {
        return "2";
      } else if (smokeValue.length >= 1) {
        return "0";
      } else if (smokeValue.length <= 1 && endSmokeValue.length <= 1) {
        return "1";
      }
    },
    // 是否饮酒
    getDrinking(endDrinkingDate, drinkType, drinkAmount, drinkFrequency) {
      if (
        drinkType.length >= 1 &&
        drinkAmount.length >= 1 &&
        drinkFrequency.length >= 1
      ) {
        return "0";
      } else if (
        drinkType.length >= 1 ||
        drinkAmount.length >= 1 ||
        drinkFrequency.length >= 1
      ) {
        return "0";
      }
      if (
        drinkType.length <= 1 &&
        drinkAmount.length <= 1 &&
        drinkFrequency.length <= 1
      ) {
        return "1";
      } else if (endDrinkingDate.length >= 1) {
        return "2";
      }
    },
    // 切割时间
    getYearData(value) {
      return value.split("").slice(0, 4).join("");
    },
    // 锻炼时间
    getExerciseTime(value) {
      const list = ["<30分钟", "30-60分钟", "1小时以上"];
      let idx = list.indexOf(value);
      return idx == -1 ? "" : idx;
    },
    // 饮食习惯类型
    getEatType(value) {
      value.split(" ");
      let idx = this.eatType.indexOf(value.split(" ")[0]);
      return idx == -1 ? 6 : idx;
    },
    getEatTypeInfo(v) {
      v.split(" ");
      let idx = this.eatType.indexOf(v.split(" ")[0]);
      return idx == -1 ? v.split(" ")[0] : "";
    },
    getKg(v) {
      v.split(" ");
      let idx = v.split(" ")[1];
      return idx !== undefined ? idx : "";
    },
    saveEatType() {
      if (this.editData.eatType == "6") {
        return this.editData.eatTypeInfo;
      }else{
        this.editData.eatTypeInfo = ""
      return this.eatType[~~this.editData.eatType];
      }
    },
    // 睡眠情况
    getSleepSituation(value) {
      value.split(" ");
      console.log(value.split(" ")[0]);
      let idx = this.sleepCase.indexOf(value.split(" ")[0]);
      return idx == -1 ? 4 : idx;
    },
    getSleepSituationInfo(v) {
      v.split(" ");
      let idx = this.sleepCase.indexOf(v.split(" ")[0]);
      return idx == -1 ? v.split(" ")[0] : "";
    },
    getHourOfDay(v) {
      v.split(" ");
      console.log(v.split(" "));
      let idx = v.split(" ")[1];
      return idx !== undefined ? idx : "";
    },
    saveSleepSituation() {
      if (this.editData.sleepSituation == "4") {
        return this.editData.sleepSituationInfo;
      }
      return this.sleepCase[~~this.editData.sleepSituation];
    },
    // 其他习惯
    getOtherRegular(value) {
      const list = ["无", "有"];
      let idx = list.indexOf(value);
      return idx == -1 ? 1 + "" : idx;
    },
    getOtherRegularInfo(v) {
      const list = ["无", "有"];
      let idx = list.indexOf(v);
      return idx == -1 ? v : "";
    },
    saveOtherRegular() {
      if (this.editData.otherRegular == "1") {
        return this.editData.otherRegularInfo;
      }
      const list = ['无','有']
      return list[~~this.editData.otherRegular];
    },
    savebBseMsg(lifeHabit) {
      this.editData.eatType = this.saveEatType();
      this.editData.sleepSituation = this.saveSleepSituation();
      this.editData.otherRegular = this.saveOtherRegular();
      this.$refs[lifeHabit].validate((valid) => {
        if (valid) {
          put("/health/healthLife/11111", {
            beginSmokeTime: this.editData.beginSmokeTime,
            endSmokeTime: this.editData.endSmokeTime,
            smokeAmount: this.editData.smokeAmount,
            drinkType: this.editData.drinkType,
            drinkAmount: this.editData.drinkAmount,
            drinkFrequency: this.editData.drinkFrequency,
            endDrinkTime: this.editData.endDrinkTime,
            exerciseRegular: this.editData.exerciseRegular,
            exerciseSituation: this.editData.exerciseSituation,
            exerciseTime: this.editData.exerciseTime,
            exerciseType: this.editData.exerciseType,
            eatType: this.editData.eatType,
            sleepSituation: this.editData.sleepSituation,
            otherRegular: this.editData.otherRegular,
            userId: "11111",
          }).then((res) => {
            console.log(res, this.editData,'修改生活习惯：：：：');
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