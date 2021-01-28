<template>
    <div>
        <!-- 健康信息--编辑 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>健康信息</p>
      </div>
      <div class="user_label_msg">
       <el-form ref="form" :model="form" label-width="100px">
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
              <el-input v-model="editData.height" placeholder="身高" style="width:6%"></el-input><span>cm</span>
            </el-form-item>
            <el-form-item label="体重">
              <el-input v-model="editData.weight" placeholder="体重" style="width:6%"></el-input><span>kg</span>
            </el-form-item>
            <el-form-item label="腰围">
              <el-input v-model="editData.waist" placeholder="腰围" style="width:6%"></el-input><span>cm</span>
            </el-form-item>
            <el-form-item label="臀围">
              <el-input v-model="editData.hip" placeholder="臀围" style="width:6%"></el-input><span>cm</span>
            </el-form-item>
            <el-form-item label="BMI">
                <div>24.14</div>
            </el-form-item>
             <el-form-item label="腰:臀">
              <div>24.14</div>
            </el-form-item>
            <el-form-item label="药物过敏史">
                <el-radio-group v-model="editData.drugAllergy">
                   <el-radio label="0">无</el-radio>
                    <el-radio label="1">磺胺</el-radio>
                    <el-radio label="2">青霉素</el-radio>
                    <el-radio label="3">链霉素</el-radio>
                    <el-radio label="4">不详</el-radio>
                    <el-radio label="5">其他过敏药物质(请注明)</el-radio>
                </el-radio-group>
                <input type="text" v-model="editData.drugAllergyInfo" v-show="editData.drugAllergy !== '5' ? false : true"  placeholder="请填写其他药物过敏史"  style="border:none;outline:none;margin-left:1%">
                <!-- <input type="text" :value="healDatatest.oprations.password" v-show="healDatatest.oprations.ischecked !== '其他过敏药物质(请注明)' ? false : true"  placeholder="请填写其他药物过敏史"  style="border:none;outline:none;margin-left:1%"> -->
            </el-form-item>
            <h4>既往史</h4>
            <el-form-item label="疾病">
                 <el-radio-group v-model="editData.illness">
                   <el-radio label="无">无</el-radio>
                    <el-radio label="">有</el-radio>
                </el-radio-group>
              <input type="text" :value="editData.illness[0]" v-show="editData.illness == '无' ? false : true" placeholder="请填写疾病名1称"  style="border:none;outline:none;margin-left:1%">
              <el-date-picker  v-model="editData.illness" v-show="editData.illness == '无' ? false : true" type="date" placeholder="请选择确诊时间" style="margin-left:1%"></el-date-picker>
            </el-form-item>
           <el-form-item label="手术">
                <el-radio-group v-model="editData.operation">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
              <input type="text"  placeholder="请填写手术名称"  style="border:none;outline:none;margin-left:1%">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择确诊时间" style="margin-left:1%"></el-date-picker>
            </el-form-item>
            <el-form-item label="外伤">
                <el-radio-group v-model="editData.trauma">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
              <input type="text"  placeholder="请填写外伤名称"  style="border:none;outline:none;margin-left:1%">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择确诊时间" style="margin-left:1%"></el-date-picker>
            </el-form-item>
            <el-form-item label="输血">
                 <el-radio-group v-model="editData.transfusion">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
              
              <input type="text"  placeholder="请填写输血原因"  style="border:none;outline:none;margin-left:1%">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择时间" style="margin-left:1%"></el-date-picker>
            </el-form-item>
            <h4>家族病史</h4>
             <!-- <el-form-item label="父亲">
                  <el-radio-group v-model="healDatatest.fathered.ischecked">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
             
               <el-checkbox-group v-model="healDatatest.fathered.illTest" v-show="healDatatest.fathered.ischecked == '有' ? true : false">
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病" v-show="healDatatest.fathered.illTest.indexOf('其他')>=0 ? true : false"  style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item> -->
            <el-form-item label="母亲">
                 <el-radio-group v-model="editData.motherIll">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
              
               <el-checkbox-group>
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病" style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="兄弟姐妹">
                 <el-radio-group v-model="editData.siblingIll">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>

              <el-checkbox-group >
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病"   style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="子女">
                 <el-radio-group v-model="editData.childIll">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
               <el-checkbox-group >
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病"   style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="遗传病史">
                 <el-radio-group v-model="editData.inheritIll">
                   <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
              <input type="text"  placeholder="请填写其他遗传病史"  v-show="editData.inheritIll == '有' ? true : false"  style="border:none;outline:none;margin-left:2%">
            </el-form-item>
            <el-form-item label="残疾情况">
                 <el-radio-group v-model="editData.disability">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
               <el-checkbox-group v-model="editData.disability" v-show="editData.disability == '有' ? true : false">
                    <el-checkbox v-for="(item,index) in disabledCase" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text"  placeholder="请填写其他残疾" v-show="editData.inheritIll.indexOf('其他残疾')>= 0 ? true : false"  style="border:none;outline:none;margin-left:2%">
                </el-checkbox-group>
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
         fathersIll:['糖尿病','高血压','冠心病','脑猝中','高脂血症','精神病','肿瘤','其他'],
      disabledCase:['视力残疾','听力残疾','言语残疾','肢体残疾','智力残疾','精神残疾','其他残疾'],
    };
  },
  created(){
      this.editData = this.editDataList
      console.log(this.editDataList,'健康信息--编辑值')
  },
  methods:{
      savebBseMsg(){
          console.log('保存编辑信息')
      }
  }
};
</script>

<style lang="less" scoped>
.user_label_msg {
    padding: 3%;
    background: white;
  }
   h4{
      padding-bottom: 2%;
  }
</style>