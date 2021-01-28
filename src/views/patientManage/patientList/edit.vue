<template>
  <div class="health_watch">
    <div class="content">
      <!-- <editHealthBase v-show="editIndex == '2' || defaultVal.includes('2') ? true : false" :editDataList = editData ></editHealthBase> -->
      <editHealthBase
        v-if="editIndex == '2' ? true : false"
        :editDataList="editData"
      ></editHealthBase>
      <editHealthMsg
        v-if="editIndex == '3' ? true : false"
        :editDataList="editData"
      ></editHealthMsg>
      <editLifeHabit
        v-if="editIndex == '4' ? true : false"
        :editDataList="editData"
      ></editLifeHabit>
      <editOtherMsg
        v-if="editIndex == '5' ? true : false"
        :editDataList="editData"
      ></editOtherMsg>
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
import editHealthBase from "./editHealthBlock/editHealthBase";
import editHealthMsg from "./editHealthBlock/editHealthMsg";
import editLifeHabit from "./editHealthBlock/editLifeHabit";
import editOtherMsg from "./editHealthBlock/editOtherMsg";
export default {
  components: {
    editHealthBase,
    editHealthMsg,
    editLifeHabit,
    editOtherMsg,
  },
  data() {
    return {
      defaultVal: "",
      editData: {},
      editIndex: "",
    };
  },
  watch: {
    editIndex:function(newVal,oldVal){
      console.log(newVal,oldVal)
    }
  },
  created() {
    console.log(this.$route.params, "传过来的编辑值");
  },
  activated(){
    this.editIndex = this.$route.params.editIndex;
    this.editData = this.$route.params.editData;  
  },
  methods: {
    defaultBlock(defaultVal) {
      this.defaultVal = defaultVal;
      console.log(this.defaultVal);
    },
    showBlockList(val) {
      this.defaultVal = val;
    },
  },
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