<template>
  <div class="edit_health_document">
      <!-- 用户标签--编辑 -->
    <div class="user_block" v-show="editIndex == 1 ? true : ''">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>用户标签</p>
        <el-button plain>编辑</el-button>
      </div>
      <div class="user_label_msg">
        <el-input
          v-model="input"
          placeholder="糖尿病高压患者"
          suffix-icon="el-icon-edit"
          style="width: auto"
        ></el-input>
      </div>
    </div>
    <!-- 基本信息--编辑 -->
    <div class="user_block" v-show="editIndex == 2 ? true : ''">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>基本信息</p>
        <el-button plain>编辑</el-button>
      </div>
      <div class="base_msg clearfix">
        <el-form ref="form" :model="form" label-width="100px">
          <!-- <div class="base_msg_left"> -->
            <!-- <el-form-item label="姓名"> -->
            <el-form-item label="姓名" style="width:30%;float:left;">
              <div>{{editData.name}}</div>
            </el-form-item>
            <el-form-item label="性别" style="width:30%;float:left;">
              <div>{{editData.sex}}</div>
            </el-form-item>
            <el-form-item label="身份证号" style="width:40%;float:left;">
              <div>{{editData.idCard}}</div>
            </el-form-item>
            <el-form-item label="手机" style="width:50%;float:left;">
              <div>{{editData.phoneNumber}}</div>
            </el-form-item>
             <el-form-item label="出生日期"> 
              <div>{{editData.birthday}}</div>
            </el-form-item>
            <el-form-item label="国籍">
                 <el-radio-group v-model="editData.nationality">
                    <el-radio label="中国">中国</el-radio>
                    <el-radio label="其他">其他</el-radio>
                </el-radio-group>
              <input type="text" placeholder="请填写其他国籍"  style="border:none;outline:none;margin-left:2%;">
            </el-form-item>
             <el-form-item label="籍贯">
              <el-input v-model="editData.birthplace" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="民族">
                 <el-radio-group v-model="editData.nation">
                    <el-radio label="汉族">汉族</el-radio>
                    <el-radio label="蒙族">蒙族</el-radio>
                    <el-radio label="回族">回族</el-radio>
                    <el-radio label="藏族">藏族</el-radio>
                    <el-radio label="其他">其他</el-radio>
                </el-radio-group>
              <input type="text"  placeholder="请填写其他民族"  style="border:none;outline:none;">
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
              <el-input v-model="editData.presentAddr" placeholder="请填写到详细通讯地址"></el-input>
            </el-form-item>
            <el-form-item label="通讯地址">
              <el-input v-model="editData.correspondenceAddr" placeholder="请填写到详细通讯地址"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                 
                  <el-radio-group v-model="editData.profession">
                        <el-radio label="学生">学生</el-radio>
                        <el-radio label="家务">家务</el-radio>
                        <el-radio label="农民劳动者">农民劳动者</el-radio>
                        <el-radio label="科学研究人员">科学研究人员</el-radio>
                        <el-radio label="工、农技术人">工、农技术人员</el-radio>
                        <el-radio label="卫生技术人员">卫生技术人员</el-radio>
                        <el-radio label="法律工作人员">法律工作人员</el-radio>
                        <el-radio label="教学人员">教学人员</el-radio>
                        <el-radio label="文化工作人员">文化工作人员</el-radio>
                        <el-radio label="待业">待业</el-radio>
                        <el-radio label="不详">不详</el-radio>
                        <el-radio v-model="baseMsgLists.nation" label="其他">其他</el-radio>
                </el-radio-group>
             
              <input type="text"  placeholder="请填写其他职业"  style="border:none;outline:none;">
            </el-form-item>
            <el-form-item label="工作单位">
              <el-input v-model="editData.company" placeholder="工作单位名称"></el-input>
            </el-form-item>
             <el-form-item label="医疗费用类型">
                   <el-checkbox-group v-model="editData.expenseType">
                        <el-checkbox label="工费">工费</el-checkbox>
                        <el-checkbox label="自费">自费</el-checkbox>
                        <el-checkbox label="新农合">新农合</el-checkbox>
                        <el-checkbox label="商业医疗保险" >商业医疗保险</el-checkbox>
                        <el-checkbox label="贫困救助" >贫困救助</el-checkbox>
                        <el-checkbox label="社会医疗保险">社会医疗保险</el-checkbox>
                        <el-checkbox label="其他">其他</el-checkbox>
                    </el-checkbox-group>
              <input type="text"  placeholder="请填写其他医疗费用类型"  style="border:none;outline:none; margin-left:2%">
            </el-form-item>
            <el-form-item label="定点医疗单位">
              <el-input v-model="editData.fixMedicalUnit" placeholder="单位名称"></el-input>
            </el-form-item>
             <el-form-item label="特殊类型人群">
                 <el-checkbox-group v-model="editData.specialPeople">
                        <el-checkbox label="低保">低保</el-checkbox>
                        <el-checkbox label="特困">特困</el-checkbox>
                        <el-checkbox label="残疾">残疾</el-checkbox>
                        <el-checkbox label="医保签约" >医保签约</el-checkbox>
                        <el-checkbox label="持慈善卡" >持慈善卡</el-checkbox>
                        <el-checkbox label="其他" >其他</el-checkbox>
                    </el-checkbox-group>
              <input type="text"  placeholder="请填写其他特殊类型人群"  style="border:none;outline:none;margin-left:2%">
            </el-form-item>
          <!-- </div> -->
          <!-- <div class="base_msg_right">
            <el-form-item label="民族"> 
              <div>汉</div>
            </el-form-item>
          </div> -->
          <el-form-item>
            <el-button type="primary" @click="savebBseMsg">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 健康信息--编辑 -->
    <div class="user_block" v-if="editIndex == 3 ? true : ''">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>健康信息</p>
        <el-button plain>编辑</el-button>
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
                 <el-radio-group v-model="healDatatest.oprations.ischecked">
                   <el-radio label="无">无</el-radio>
                    <el-radio label="磺胺">磺胺</el-radio>
                    <el-radio label="青霉素">青霉素</el-radio>
                    <el-radio label="链霉素">链霉素</el-radio>
                    <el-radio label="不详">不详</el-radio>
                    <el-radio label="其他过敏药物质(请注明)">其他过敏药物质(请注明)</el-radio>
                </el-radio-group>
              <input type="text" :value="healDatatest.oprations.password" v-show="healDatatest.oprations.ischecked !== '其他过敏药物质(请注明)' ? false : true"  placeholder="请填写其他药物过敏史"  style="border:none;outline:none;margin-left:1%">
            </el-form-item>
            <h4>既往史</h4>
            <el-form-item label="疾病test">
                 <el-radio-group v-model="healDatatest.ills.ischecked">
                   <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
                
              <input type="text" :value="healDatatest.ills.password[0]" v-show="healDatatest.ills.ischecked == '无' ? false : true" placeholder="请填写疾病名1称"  style="border:none;outline:none;margin-left:1%">
              <el-date-picker  v-model="healDatatest.ills.password[1]" v-show="healDatatest.ills.ischecked == '无' ? false : true" type="date" placeholder="请选择确诊时间" style="margin-left:1%"></el-date-picker>
            </el-form-item>
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
             <el-form-item label="父亲">
                  <el-radio-group v-model="healDatatest.fathered.ischecked">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
             
               <el-checkbox-group v-model="healDatatest.fathered.illTest" v-show="healDatatest.fathered.ischecked == '有' ? true : false">
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text" v-model="healDatatest.fathered.inputText"  placeholder="请填写其他疾病" v-show="healDatatest.fathered.illTest.indexOf('其他')>=0 ? true : false"  style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="母亲">
                 <el-radio-group v-model="editData.motherIll">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
              
               <el-checkbox-group v-model="healDatatest.fathered.illTest" v-show="healDatatest.fathered.ischecked == '有' ? true : false">
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text" v-model="healDatatest.fathered.inputText"  placeholder="请填写其他疾病" v-show="healDatatest.fathered.illTest.indexOf('其他')>=0 ? true : false"  style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="兄弟姐妹">
                 <el-radio-group v-model="editData.siblingIll">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>

              <el-checkbox-group v-model="healDatatest.fathered.illTest" v-show="healDatatest.fathered.ischecked == '有' ? true : false">
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text" v-model="healDatatest.fathered.inputText"  placeholder="请填写其他疾病" v-show="healDatatest.fathered.illTest.indexOf('其他')>=0 ? true : false"  style="border:none;outline:none;margin-left:1%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="子女">
                 <el-radio-group v-model="editData.childIll">
                    <el-radio label="无">无</el-radio>
                    <el-radio label="有">有</el-radio>
                </el-radio-group>
               <el-checkbox-group v-model="healDatatest.fathered.illTest" v-show="healDatatest.fathered.ischecked == '有' ? true : false">
                    <el-checkbox v-for="(item,index) in fathersIll" :key="index" :label="item">{{item}}</el-checkbox>
                    <input type="text" v-model="healDatatest.fathered.inputText"  placeholder="请填写其他疾病" v-show="healDatatest.fathered.illTest.indexOf('其他')>=0 ? true : false"  style="border:none;outline:none;margin-left:1%">
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
     <!-- 生活习惯--编辑 -->
    <div class="user_block" v-show="editIndex == 4 ? true : ''">
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
     <!-- 其他习惯--编辑 -->
    <div class="user_block" v-show="editIndex == 5 ? true : ''">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>其他习惯</p>
      </div>
      <div class="user_label_msg">
          <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="户籍类型">
            <el-radio v-model="editData.householdType" label="本阜">本阜</el-radio>
            <el-radio v-model="editData.householdType" label="外阜">外阜</el-radio>
        </el-form-item>
        <el-form-item label="户别">
            <el-radio v-model="editData.householdCategory" label="农业">农业</el-radio>
            <el-radio v-model="editData.householdCategory" label="非农业">非农业</el-radio>
        </el-form-item>
         <el-form-item label="暂住证">
            <el-radio v-model="editData.kitas" label="A类">A类</el-radio>
            <el-radio v-model="editData.kitas" label="B类">B类</el-radio>
        </el-form-item>
         <el-form-item label="来京日期">
              <el-date-picker
                v-model="editData.accessBjTime"
                type="date"
                placeholder="选择来京日期">
                </el-date-picker>
        </el-form-item>
        <el-form-item label="邮政编码">
            <el-input v-model="editData.postalCode" placeholder="请填写邮政编码"></el-input>
        </el-form-item>
        <el-form-item label="所属派出所">
            <el-input v-model="editData.policeStation" placeholder="请填写所属派出所"></el-input>
        </el-form-item>
        <el-form-item label="所属居委会">
            <el-input v-model="editData.committee" placeholder="请填写所属居委会"></el-input>
        </el-form-item>
        <el-form-item label="住宅电话">
            <el-input v-model="editData.homePhone" placeholder="请填写所住宅电,包括区号"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="editData.email" placeholder="请填写Email地址"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名">
            <el-input v-model="editData.contactName" placeholder="请填写联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话">
            <el-input v-model="editData.contactPhone" placeholder="请填写联系人电话"></el-input>
        </el-form-item>
         <el-form-item>
    <el-button type="primary" @click="otherMsgSave">保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
        </el-form>
      </div>
    </div>
    
  </div>
</template>

<script>
import {get,post,put} from '@/request/http'
import bus from '@/components/bus'
export default {
  props: ["editblock"],
  data() {
    return {
        bb:'',
        form:{},
        input:'',
        value1:'',
        value3:'',
      editIndex: "",
      healDatatest:{},
      editData:{},
      DefaultMsg:'',
      baseMsgLists:{
          name:'',
          sex:'',
          idCard:'',
          phoneNumber:'',
          birthday:'',
          nationality:'',
          birthplace:'',
          nation:'',
          marriage:'',
          education:'',
          presentAddr:'',
          correspondenceAddr:'',
          profession:'',
          company:'',
          expenseType:'',
          fixMedicalUnit:'',
          specialPeople:'',
          userId:''
      },
      healthMsgLists:{
          bloodType:'',
          rhNegative:'',
          height:'',
          weight:'',
          waist:'',
          hip:'',
          drugAllergy:'',
          illness:'',
          operation:'',
          trauma:'',
          transfusion:'',
          fatherIll:'',
          motherIll:'',
          siblingIll:'',
          childIll:'',
          inheritIll:'',
          disability:'',
          userId:''
      },
      lifeMsgLists:{
          beginSmokeTime:'',
          smokeAmount:'',
          drinkType:'',
          drinkAmount:'',
          drinkFrequency:'',
          exerciseRegular:'',
          exerciseSituation:'',
          exerciseTime:'',
          exerciseType:'',
          eatType:'',
          sleepSituation:'',
          otherRegular:'',
          userId:''
      },
      otherMsgLists:{
          householdType:'',
          householdCategory:'',
          kitas:'',
          accessBjTime:'',
          postalCode:'',
          policeStation:'',
          committee:'',
          homePhone:'',
          email:'',
          contactName:'',
          contactPhone:'',
          userId:''
      },
      fathersIll:['糖尿病','高血压','冠心病','脑猝中','高脂血症','精神病','肿瘤','其他'],
      disabledCase:['视力残疾','听力残疾','言语残疾','肢体残疾','智力残疾','精神残疾','其他残疾'],
    //   生活习惯
    sleepCase:['睡眠困难','入睡困难','早醒','没有','其他'],
    //   
    healthMsgId:''
    };
  },
  computed:{
  },
  created() {
      bus.$on('healthEditMsg',data => {
          this.editIndex = data.edit_id;
          this.editData = data.healthBase
          console.log(data,'通组件传来的值')

          if(this.editIndex == 2){
              this.editData.expenseType = this.editData.expenseType.split(' ')
            this.editData.specialPeople = this.editData.specialPeople.split(' ')
          }else if(this.editIndex == 3){
              this.editData.childIll = this.editData.childIll.split(' ')
              this.editData.motherIll = this.editData.motherIll.split(' ')
              this.editData.siblingIll = this.editData.siblingIll.split(' ')
              this.editData.fatherIll = this.editData.fatherIll.split(' ')
              this.editData.illness = this.editData.illness.split(' ')
              this.editData.illness.push('有')
              this.editData.disability = this.editData.disability.split(' ')

              console.log(this.editData.illness.includs('有'),']]]]]')
          }
        })
        get('/api/checkbox').then(res => {
            console.log(res,'checked测试数据mock')
            this.healDatatest = res.healData
            if(this.healDatatest.fathered.inputText !== '') this.healDatatest.fathered.illTest.push('其他')
        })

        // 对比父亲里的数据
        // this.fathersIll
        // healDatatest.fathered.illTest
        
  },
  watch: {
  },
  methods:{
    //   获取国籍
    // nationalityChange(val){
    //     console.log(val,'获取国籍的shuju')
    //     this.editData.nationality = val
    // },
    //   保存基本信息
      savebBseMsg(){
          
      console.log(this.healDatatest.oprations.password,';;;;;;;;;')
      window.location.reload()
        //   console.log(this.editData.birthplace,this.editData.nationality,'保存基本信息')
        //   put('/api/healthBase/11111',{
        //       nationality:this.editData.nationality,
        //       birthplace:this.editData.birthplace,
        //       nation:this.editData.nation,
        //       marriage:this.editData.marriage,
        //       education:this.editData.education,
        //       presentAddr:this.editData.presentAddr,
        //       correspondenceAddr:this.editData.correspondenceAddr,
        //       profession:this.editData.profession,
        //       company:this.editData.company,
        //       expenseType:this.editData.expenseType,
        //       fixMedicalUnit:this.editData.fixMedicalUnit,
        //       specialPeople:this.editData.specialPeople,
        //   }).then(res=>{
        //       console.log(res,'编辑过后的基本信息')
        //   })
      },
    //   其他信息保存
    otherMsgSave(){
        console.log('其他信息保存')
    }
  }
};
</script>

<style lang="less" scoped>
.edit_health_document {
  .user_block {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 2%;
    // 查看信息中的bar
    .user_msg_bar {
      height: 70px;
      position: relative;
      display: flex;
      img {
        width: 100%;
      }
      p {
        font-size: 20px;
        color: white;
        position: absolute;
        left: 100px;
        top: 50%;
        transform: translate(0, -50%);
      }
      .el-button {
        position: absolute;
        right: 3%;
        top: 50%;
        transform: translate(0, -50%);
      }
      .detail_more_btn {
        position: absolute;
        right: 3.2%;
        top: 50%;
        transform: translate(0, -50%);
        /deep/ .el-button--primary {
          background: rgba(255, 255, 255, 0.8) !important;
          border: none !important;
          color: rgba(88, 142, 207, 1);
        }
      }
    }
  }
  .user_label_msg {
    padding: 3%;
    background: white;
  }
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
  h4{
      padding-bottom: 2%;
  }
}
</style>