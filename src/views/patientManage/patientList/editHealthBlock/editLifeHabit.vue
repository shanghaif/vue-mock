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
          <el-form ref="form" :model="form" label-width="100px">
          <h4>吸烟史</h4>
          <el-form-item label="是否吸烟">
               <el-radio-group v-model="editData.disability" v-show="true">
                   <el-radio label="是">是</el-radio>
                    <el-radio label="否">否</el-radio>
                    <el-radio label="已戒">已戒</el-radio>
               </el-radio-group>
              
            </el-form-item>
            <el-form-item label="开始吸烟时间" v-show="editData.disability == '是' || editData.disability == '已戒' ? true : false">
               <el-date-picker
                    v-model="editData.beginSmokeTime"
                    type="year"
                    placeholder="选择时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="吸烟量" v-show="editData.disability == '是'? true : false">
                <el-radio-group v-model="editData.disability" v-show="true">
                     <el-radio label="偶尔(<3支/周)">偶尔(<3支/周)</el-radio>
                    <el-radio label="少量(<1-4支/日)">少量(<1-4支/日)</el-radio>
                    <el-radio label="经常(≥支/日)">经常(≥支/日)</el-radio>
               </el-radio-group>
             
              <input type="text"  placeholder="请填写其他国籍"  style="border:none;outline:none;">
            </el-form-item>
             <el-form-item label="开始戒烟时间" v-show="editData.disability == '已戒' ? true : false">
               <el-date-picker
                    v-model="value3"
                    type="year"
                    placeholder="选择时间">
                </el-date-picker>
            </el-form-item>
            <h4>饮酒史</h4>
             <el-form-item label="是否饮酒">
                 <el-radio-group v-model="editData.disability" v-show="true">
                          <el-radio label="是">是</el-radio>
                        <el-radio label="否">否</el-radio>
                        <el-radio label="已戒">已戒</el-radio>
               </el-radio-group>
         
            </el-form-item>
            <el-form-item label="饮酒类型">
                <el-radio-group v-model="editData.drinkType" v-show="true">
                    <el-radio label="色酒(酒精含量<15)">色酒(酒精含量<15)</el-radio>
              <el-radio label="啤酒(酒精含量15-40,色酒100-150ml)">啤酒(酒精含量15-40,色酒100-150ml)</el-radio>
              <el-radio label="白酒(酒精含量≥45)">白酒(酒精含量≥45)</el-radio>
               </el-radio-group>
              
            </el-form-item>
               <el-form-item label="饮酒量">
                   <el-radio-group v-model="editData.drinkAmount" v-show="true">
                        <el-radio label="少量(啤酒<250-500ml/次,色酒100-150ml/次,白酒50-250ml/次)">少量(啤酒<250-500ml/次,色酒100-150ml/次,白酒50-250ml/次)</el-radio>
              <el-radio label="中量(啤酒500-2500ml/次,色酒150-250ml/次,白酒50-250ml/次)">中量(啤酒500-2500ml/次,色酒150-250ml/次,白酒50-250ml/次)</el-radio>
              <el-radio label="大量(啤酒>2500ml/次,其他酒>250ml/次)">大量(啤酒>2500ml/次,其他酒>250ml/次)</el-radio>
               </el-radio-group>
             
            </el-form-item>
             <el-form-item label="饮酒频率">
                 <el-radio-group v-model="editData.drinkFrequency" v-show="true">
                     <el-radio label="偶尔(每年<3-4次)">偶尔(每年<3-4次)</el-radio>
              <el-radio label="少量(每年<3次)">少量(每年<3次)</el-radio>
              <el-radio label="经常(每天喝)">经常(每天喝)</el-radio>
               </el-radio-group>
              
            </el-form-item>
             <el-form-item label="戒酒日期" v-show="editData.disability == '已戒' ? true : false">
              <el-date-picker
                    v-model="value3"
                    type="year"
                    placeholder="选择戒酒日期">
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
            <el-form-item label="锻炼情况" v-show="editData.exerciseRegular == '是' || editData.exerciseRegular == '无规律' ? true : false">
                <el-radio-group v-model="editData.exerciseSituation" v-show="true">
                     <el-radio label="每天锻炼">每天锻炼</el-radio>
                    <el-radio label="每周3次及以上">每周3次及以上</el-radio>
                    <el-radio label="每周1-2次">每周1-2次</el-radio>
               </el-radio-group>
             
            </el-form-item>
            <el-form-item label="每次锻炼时间" v-show="editData.exerciseRegular == '是' || editData.exerciseRegular == '无规律' ? true : false">
                <el-radio-group v-model="editData.exerciseTime" v-show="true">
                    <el-radio label="<30分钟"><30分钟</el-radio>
                    <el-radio label="30-60分钟">30-60分钟</el-radio>
                    <el-radio label="1小时以上">1小时以上</el-radio>
               </el-radio-group>
              
            </el-form-item>
            <el-form-item label="锻炼类型" v-show="editData.exerciseRegular == '是' || editData.exerciseRegular == '无规律' ? true : false">
                <el-radio-group v-model="editData.exerciseType" v-show="true">
                    <el-radio label="有氧运动(慢跑、气功、极拳、跳舞、散步、游泳、登山)">有氧运动(慢跑、气功、极拳、跳舞、散步、游泳、登山)</el-radio>
                    <el-radio label="无氧运动(速跑、篮球、排球、足球等剧烈运动)">无氧运动(速跑、篮球、排球、足球等剧烈运动)</el-radio>
                    <el-radio label="无规律">无规律</el-radio>
               </el-radio-group>
              
            </el-form-item>

            <el-form-item label="饮食习惯类型">
                <el-radio-group v-model="editData.eatType" v-show="true">
                    <el-radio label="偏咸">偏咸</el-radio>
                    <el-radio label="偏甜">偏甜</el-radio>
                    <el-radio label="偏油">偏油</el-radio>
                    <el-radio label="素食">素食</el-radio>
                    <el-radio label="辛辣">辛辣</el-radio>
                    <el-radio label="嗜热食">嗜热食</el-radio>
                    <el-radio label="其他">其他</el-radio>
               </el-radio-group>
              
              <input type="text"  placeholder="饮食习惯类型" v-show="editData.eatType == '其他' ? true : false"  style="border:none;outline:none;margin-left:2%;">
              <input type="text"  placeholder="克/次"  style="border:none;outline:none;margin-left:1%;">
            </el-form-item>
            <el-form-item label="睡眠情况">
                <el-radio-group v-model="editData.sleepSituation">
                    <el-radio v-for="(item,index) in sleepCase" :key="index" :label="item">{{item}}</el-radio>
               </el-radio-group>
              
              <input type="text"  placeholder="8小时/天" v-show="editData.sleepSituation == '其他' ? true : false"   style="border:none;outline:none;margin-left:2%;">
                </el-form-item>
                <el-form-item label="其他习惯">
                    <el-radio-group v-model="editData.otherRegular">
                        <el-radio label="无">无</el-radio>
                        <el-radio label="有">有</el-radio>
                </el-radio-group>
                
                <input type="text"  placeholder="请输入其他习惯"  v-show="editData.otherRegular == '有' ? true : false"  style="border:none;outline:none;margin-left:2%;">
                </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="savebBseMsg">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: ["editDataList"],
  data() {
    return {
      form: {},
      editData: {},
    };
  },
  created(){
      this.editData = this.editDataList
  },
  methods:{
      savebBseMsg(){
          console.log('保存编辑内容')
      }
  }
};
</script>

<style lang="less" scoped>
.user_label_msg {
    padding: 3%;
    background: white;
  }
</style>