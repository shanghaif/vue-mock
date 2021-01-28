<template>
  <div class="lifeHabit">
    <!-- 生活习惯 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>生活习惯</p>
        <el-button plain @click="edit"
          >编辑</el-button
        >
      </div>
      <div class="life_msg_container clearfix">
        <div class="life_left">
          <div class="historyBlock smoking_history">
            <h6>吸烟史</h6>
            <p><span>开始吸烟时间：</span>{{ healthLife.beginSmokeTime }}</p>
            <p><span>吸烟量：</span>{{ healthLife.smokeAmount }}</p>
          </div>

          <div class="historyBlock smoking_history">
            <h6>饮酒史</h6>
            <p><span>饮酒类型：</span>{{ healthLife.drinkType }}</p>
            <p><span>饮酒量：</span>{{ healthLife.drinkAmount }}</p>
            <p><span>饮酒频率：</span>{{ healthLife.drinkFrequency }}</p>
          </div>
        </div>
        <div class="life_right">
          <div class="historyBlock smoking_history">
            <h6>体育锻炼情况</h6>
            <p><span>是否锻炼：</span>{{ healthLife.exerciseRegular }}</p>
            <p><span>锻炼情况：</span>{{ healthLife.exerciseSituation }}</p>
            <p><span>每次锻炼时间：</span>{{ healthLife.exerciseTime }}</p>
            <p><span>锻炼类型：</span>{{ healthLife.exerciseType }}</p>
            <p><span>饮食习惯类型：</span>{{ healthLife.eatType }}</p>
            <p><span>睡眠情况：</span>{{ healthLife.sleepSituation }}</p>
            <p><span>其他习惯：</span>{{ healthLife.otherRegular }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "@/request/http";
export default {
  data() {
    return {
      healthLife: {},
    };
  },
  created() {
    //生活习惯
    get('/api/healthLife/11111').then(res=>{
      this.healthLife = res.data
    })
  },
  methods:{
    edit(){
      this.$router.push({ name: 'PatientEdit', params: {editIndex:'4',editData:this.healthLife}})
    }
  }
};
</script>

<style lang="less" scoped>
.lifeHabit {
  // 生活习惯---板块
    .life_msg_container {
      display: flex;
      padding: 3%;
      .historyBlock {
        margin-bottom: 2%;
        h6 {
          font-size: 20px;
          color: #666699;
        }
      }
      .life_left {
        width: 50%;
        float: left;
        p {
          line-height: 42px;
        }
        .smoking_history {
          p {
            line-height: 42px;
          }
        }
      }
      .life_right {
        width: 50%;
        float: right;
        p {
          line-height: 42px;
        }
      }
    }
}
</style>