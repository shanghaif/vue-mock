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
        <el-form ref="lifeHabit" :model="editData" label-width="100px">
          <h4>吸烟史</h4>
          <el-form-item label="是否吸烟">
            <el-radio-group v-model="editData.smoking" v-show="true">
              <el-radio label="是">是</el-radio>
              <el-radio label="否">否</el-radio>
              <el-radio label="已戒">已戒</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="开始吸烟时间"
            v-show="
              editData.smoking == '是' || editData.smoking == '已戒'
                ? true
                : false
            "
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
            v-show="
              editData.smoking == '是' || editData.smoking == '已戒'
                ? true
                : false
            "
          >
            <el-radio-group v-model="editData.smokeAmount" v-show="true">
              <el-radio label="偶尔（<3支/周）">偶尔(<3支/周)</el-radio>
              <el-radio label="少量（1-4支/日）">少量(<1-4支/日)</el-radio>
              <el-radio label="经常（≥支/日）">经常(≥支/日)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="开始戒烟时间"
            v-show="editData.smoking == '已戒' ? true : false"
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
            <el-radio-group v-model="editData.drinking" v-show="true">
              <el-radio label="是">是</el-radio>
              <el-radio label="否">否</el-radio>
              <el-radio label="已戒">已戒</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="饮酒类型"
            v-show="drinking == '是' ? true : false"
          >
            <el-radio-group v-model="editData.drinkType">
              <el-radio label="色酒（酒精含量<15）">色酒(酒精含量<15)</el-radio>
              <el-radio label="啤酒（酒精含量15-40，色酒100-150ml）"
                >啤酒(酒精含量15-40,色酒100-150ml)</el-radio
              >
              <el-radio label="白酒（酒精含量≥45）">白酒(酒精含量≥45)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="饮酒量"
            v-show="editData.drinking == '是' ? true : false"
          >
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
            v-show="editData.drinking == '是' ? true : false"
          >
            <el-radio-group v-model="editData.drinkFrequency">
              <el-radio label="偶尔（每年<3-4次）">偶尔(每年<3-4次)</el-radio>
              <el-radio label="少量（每年<3次）">少量(每年<3次)</el-radio>
              <el-radio label="经常（每天喝）">经常(每天喝)</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="戒酒日期"
            v-show="editData.drinking == '已戒' ? true : false"
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
              <el-radio label="<30分钟"><30分钟</el-radio>
              <el-radio label="30-60分钟">30-60分钟</el-radio>
              <el-radio label="1小时以上">1小时以上</el-radio>
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
                :label="item"
                >{{ item }}</el-radio
              >
            </el-radio-group>

            <input
              type="text"
              v-model="editData.eatTypeInfo"
              v-show="editData.eatType == '其他' ? true : false"
              placeholder="饮食习惯类型"
              style="border: none; outline: none; margin-left: 2%"
            />
            <input
              type="text"
              v-model="editData.eatKilo"
              placeholder="克/次"
              style="border: none; outline: none; margin-left: 1%"
            />
          </el-form-item>
          <el-form-item label="睡眠情况">
            <el-radio-group v-model="editData.sleepSituation">
              <el-radio
                v-for="(item, index) in sleepCase"
                :key="index"
                :label="item"
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
              v-show="editData.sleepSituation == '其他' ? true : false"
              placeholder="请输入其他睡眠情况"
              style="border: none; outline: none"
            />
          </el-form-item>
          <el-form-item label="其他习惯">
            <el-radio-group v-model="editData.otherRegular">
              <el-radio
                v-for="(item, index) in otherHabit"
                :key="index"
                :label="item"
                >{{ item }}</el-radio
              >
            </el-radio-group>

            <input
              type="text"
              v-model="editData.otherRegularInfo"
              placeholder="请输入其他习惯"
              v-show="editData.otherRegular == '无' ? true : false"
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
      editData: this.editDataList,
      smoking: "",
      drinking: "",
      beginSmokingTime: "1956",
      eatType: ["偏咸", "偏甜", "偏油", "素食", "辛辣", "嗜热食", "其他"],
      sleepCase: ["睡眠困难", "入睡困难", "早醒", "没有", "其他"],
      otherHabit: ["有", "无"],
    };
  },
  created() {
    console.log(this.editData, "编辑生活习惯-");
    // 睡眠请款
    this.editData.sleepSituation = this.getSleepSituation(
      this.editData.sleepSituation
    );
    // 其他习惯
    this.editData.otherRegular = this.getOtherRegular(
      this.editData.otherRegular
    );
    // 饮食类型
    this.editData.eatType = this.getEatType(this.editData.eatType);
    // 饮酒史
    if (
      this.editData.drinkAmount !== "" ||
      this.editData.drinkFrequency !== ""
    ) {
      this.$set(this.editData, "drinking", "是");
    } else if (this.editData.endDrinkTime !== "") {
      this.$set(this.editData, "drinking", "已戒");
    } else {
      this.$set(this.editData, "drinking", "否");
    }
    // 戒烟
    if (
      this.editData.beginSmokeTime !== "" ||
      this.editData.smokeAmount !== ""
    ) {
      this.$set(this.editData, "smoking", "是");
    } else if (this.editData.endSmokeTime !== "") {
      this.$set(this.editData, "smoking", "已戒");
    } else {
      this.$set(this.editData, "smoking", "否");
    }
  },
  methods: {
    getSleepSituation(val) {
      let otherData = val.split(" ")[0];
      let idx = this.sleepCase.indexOf(val);
      if (idx == -1) {
        this.editData.sleepSituationInfo = otherData;
        return "其他";
      } else {
        this.editData.sleepSituationInfo = "";
        return val;
      }
    },
    getOtherRegular(val) {
      let list = ["有", "无"];
      let idx = list.indexOf(val);
      if (idx === -1) {
        this.editData.otherRegularInfo = val;
        return "无";
      } else {
        this.editData.otherRegularInfo = "";
        return val;
      }
    },
    getEatType(val) {
      // 还缺少一个克数------！！！！！！！
      let otherEatType = val.split(" ")[0];
      let eatKilo = val.split(" ")[1];
      let idx = this.eatType.indexOf(val);
      if (idx === -1) {
        this.editData.eatTypeInfo = otherEatType;
        this.editData.eatKilo = eatKilo;
        return "其他";
      } else {
        this.editData.eatTypeInfo = "";
        return val;
      }
    },
    savebBseMsg(lifeHabit) {
      // 是否锻炼
      if (this.editData.exerciseRegular == "否") {
        this.editData.exerciseTime = "";
        this.editData.exerciseSituation = "";
      }
      // 是否饮酒
      if (this.editData.drinking == "否") {
        this.editData.drinkAmount = "";
        this.editData.drinkFrequency = "";
        this.editData.drinkType = "";
        this.editData.endDrinkTime = "";
      } else if (this.editData.drinking == "已戒") {
        this.editData.drinkAmount = "";
        this.editData.drinkFrequency = "";
        this.editData.drinkType = "";
      }
      // 是否戒烟
      if (this.editData.smoking == "否") {
        this.editData.beginSmokeTime = "";
        this.editData.smokeAmount = "";
        this.editData.endSmokeTime = "";
      } else if (this.editData.smoking == "是") {
        this.editData.endSmokeTime = "";
      }
      // 饮食习惯
      this.editData.eatType = this.editData.eatTypeInfo + ',' + this.editData.eatKilo + '克'

      this.$refs[lifeHabit].validate((valid) => {
        if (valid) {
          put(`/health/healthLife/${this.editData.id}`, {
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
            sleepSituation: this.editData.sleepSituationInfo,
            otherRegular: this.editData.otherRegularInfo,
          }).then((res) => {
            // console.log(res, this.editData,'修改生活习惯：：：：');
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