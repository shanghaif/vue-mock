<template>
  <div class="health_watch">
    <div class="content">
      <userLabel v-show="defaultVal.includes('1') ? true : false"></userLabel>
      <healthBase v-show="defaultVal.includes('2') ? true : false"></healthBase>
      <healthMsg v-show="defaultVal.includes('3') ? true : false"></healthMsg>
      <lifeHabit v-show="defaultVal.includes('4') ? true : false"></lifeHabit>
      <otherMsg v-show="defaultVal.includes('5') ? true : false"></otherMsg>
      <bloodSugar v-show="defaultVal.includes('6') ? true : false"></bloodSugar>
      <bloodPress v-show="defaultVal.includes('7') ? true : false"></bloodPress>
      <egcChart v-show="defaultVal.includes('8') ? true : false"></egcChart>
      <testReport  v-show="defaultVal.includes('9') ? true : false"></testReport>
      <healthInfo  v-show="defaultVal.includes('10') ? true : false"></healthInfo>
      <medicineWarn  v-show="defaultVal.includes('11') ? true : false"></medicineWarn>
    </div>
    <div class="bar">
      <healthBar
        @defaultBlock="defaultBlock"
        @showBlockList="showBlockList"
      ></healthBar>
    </div>
  </div>
</template>


<script>
import userLabel from "./healthBlock/userLabel";
import healthBase from "./healthBlock/healthBase";
import healthMsg from "./healthBlock/healthMsg";
import lifeHabit from "./healthBlock/lifeHabit";
import otherMsg from "./healthBlock/otherMsg";
import bloodSugar from "./healthBlock/bloodSugar";
import bloodPress from "./healthBlock/bloodPress";
import egcChart from "./healthBlock/egcChart";
import testReport from "./healthBlock/testReport";
import healthInfo from "./healthBlock/healthInfo";
import medicineWarn from "./healthBlock/medicineWarn";
export default {
  components: {
    userLabel,
    healthBase,
    healthMsg,
    lifeHabit,
    otherMsg,
    bloodSugar,
    bloodPress,
    egcChart,
    testReport,
    healthInfo,
    medicineWarn,
  },
  data() {
    return {
      defaultVal: [],
    };
  },
  methods: {
    defaultBlock(defaultVal) {
      this.defaultVal = defaultVal;
    },
    showBlockList(val) {
      this.defaultVal = val;
    },
  }
};
</script>

<style lang="less" scoped>
.health_watch {
  height: calc(100% - 2%);
  padding: 0% 10% 0% 1%;
  display: flex;
  .content {
    width: 80%;
    margin-right: 2%;
  }
  .bar {
    flex: 1;
  }
}
</style>