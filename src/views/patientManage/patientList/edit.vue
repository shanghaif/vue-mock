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
              <div>张三</div>
            </el-form-item>
            <el-form-item label="性别" style="width:30%;float:left;">
              <div>男</div>
            </el-form-item>
            <el-form-item label="身份证号" style="width:40%;float:left;">
              <div>汉</div>
            </el-form-item>
            <el-form-item label="手机" style="width:50%;float:left;">
              <div>汉</div>
            </el-form-item>
             <el-form-item label="出生日期">
              <div>1956-2-3</div>
            </el-form-item>
            <el-form-item label="国籍">
              <el-radio v-model="baseMsgLists.nationality" label="1">中国</el-radio>
              <el-radio v-model="baseMsgLists.nationality" label="2">其他</el-radio>
              <input type="text"  placeholder="请填写其他国籍"  style="border:none;outline:none;">
            </el-form-item>
             <el-form-item label="籍贯">
              <el-input v-model="baseMsgLists.birthplace" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="民族">
              <el-radio v-model="baseMsgLists.nation" label="1">汉族</el-radio>
              <el-radio v-model="baseMsgLists.nation" label="2">蒙族</el-radio>
              <el-radio v-model="baseMsgLists.nation" label="3">回族</el-radio>
              <el-radio v-model="baseMsgLists.nation" label="4">藏族</el-radio>
              <el-radio v-model="baseMsgLists.nation" label="5">其他</el-radio>
              <input type="text"  placeholder="请填写其他民族"  style="border:none;outline:none;">
            </el-form-item>
            <el-form-item label="婚姻状况">
              <el-radio v-model="baseMsgLists.marriage" label="1">未婚</el-radio>
              <el-radio v-model="baseMsgLists.marriage" label="2">已婚</el-radio>
              <el-radio v-model="baseMsgLists.marriage" label="3">离婚</el-radio>
              <el-radio v-model="baseMsgLists.marriage" label="4">丧偶</el-radio>
              <el-radio v-model="baseMsgLists.marriage" label="5">不详</el-radio>
            </el-form-item>
            <el-form-item label="文化程度">
              <el-radio v-model="baseMsgLists.education" label="1">小学</el-radio>
              <el-radio v-model="baseMsgLists.education" label="2">初中</el-radio>
              <el-radio v-model="baseMsgLists.education" label="3">高中/中专</el-radio>
              <el-radio v-model="baseMsgLists.education" label="4">大专以上学历</el-radio>
              <el-radio v-model="baseMsgLists.education" label="5">研究生以上学历</el-radio>
              <el-radio v-model="baseMsgLists.education" label="6">文盲/没上过学</el-radio>
              <el-radio v-model="baseMsgLists.education" label="7">不详</el-radio>
            </el-form-item>
            <el-form-item label="现住址">
              <el-input v-model="baseMsgLists.presentAddr" placeholder="请填写到详细通讯地址"></el-input>
            </el-form-item>
            <el-form-item label="通讯地址">
              <el-input v-model="baseMsgLists.correspondenceAddr" placeholder="请填写到详细通讯地址"></el-input>
            </el-form-item>
            <el-form-item label="职业">
              <el-radio v-model="baseMsgLists.profession" label="1">学生</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="2">家务</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="3">农民劳动者</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="4">科学研究人员</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="5">工、农技术人员</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="6">卫生技术人员</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="7">法律工作人员</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="8">教学人员</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="9">文化工作人员</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="10">待业</el-radio>
              <el-radio v-model="baseMsgLists.profession" label="11">不详</el-radio>
              <el-radio v-model="baseMsgLists.nation" label="12">其他</el-radio>
              <input type="text"  placeholder="请填写其他职业"  style="border:none;outline:none;">
            </el-form-item>
            <el-form-item label="工作单位">
              <el-input v-model="baseMsgLists.company" placeholder="工作单位名称"></el-input>
            </el-form-item>
             <el-form-item label="医疗费用类型">
                   <!-- <el-checkbox-group v-model="checkList"> -->
                        <el-checkbox label="复选框 A">工费</el-checkbox>
                        <el-checkbox label="复选框 B">自费</el-checkbox>
                        <el-checkbox label="复选框 C">新农合</el-checkbox>
                        <el-checkbox label="禁用" >商业医疗保险</el-checkbox>
                        <el-checkbox label="选中且禁用" >贫困救助</el-checkbox>
                        <el-checkbox label="选中且禁用">社会医疗保险</el-checkbox>
                        <el-checkbox label="选中且禁用">其他</el-checkbox>
                    <!-- </el-checkbox-group> -->
              <input type="text"  placeholder="请填写其他医疗费用类型"  style="border:none;outline:none; margin-left:2%">
            </el-form-item>
            <el-form-item label="定点医疗单位">
              <el-input v-model="baseMsgLists.fixMedicalUnit" placeholder="单位名称"></el-input>
            </el-form-item>
             <el-form-item label="特殊类型人群">
                 <!-- <el-checkbox-group v-model="checkList"> -->
                        <el-checkbox label="低保">低保</el-checkbox>
                        <el-checkbox label="特困">特困</el-checkbox>
                        <el-checkbox label="残疾">残疾</el-checkbox>
                        <el-checkbox label="医保签约" >医保签约</el-checkbox>
                        <el-checkbox label="持慈善卡" >持慈善卡</el-checkbox>
                        <el-checkbox label="其他" >其他</el-checkbox>
                    <!-- </el-checkbox-group> -->
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
    <div class="user_block" v-show="editIndex == 3 ? true : ''">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>用户标签</p>
        <el-button plain>编辑</el-button>
      </div>
      <div class="user_label_msg">
       <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="血型">
              <el-radio v-model="healthMsgLists.bloodType" label="1">A</el-radio>
              <el-radio v-model="healthMsgLists.bloodType" label="2">B</el-radio>
              <el-radio v-model="healthMsgLists.bloodType" label="3">O</el-radio>
              <el-radio v-model="healthMsgLists.bloodType" label="4">AB</el-radio>
              <el-radio v-model="healthMsgLists.bloodType" label="5">不详</el-radio>
            </el-form-item>
            <el-form-item label="RH阴性">
              <el-radio v-model="healthMsgLists.rhNegative" label="1">是</el-radio>
              <el-radio v-model="healthMsgLists.rhNegative" label="2">否</el-radio>
              <el-radio v-model="healthMsgLists.rhNegative" label="3">不详</el-radio>
            </el-form-item>
            <el-form-item label="身高">
              <el-input v-model="healthMsgLists.height" placeholder="身高" style="width:6%"></el-input><span>cm</span>
            </el-form-item>
            <el-form-item label="体重">
              <el-input v-model="healthMsgLists.weight" placeholder="体重" style="width:6%"></el-input><span>kg</span>
            </el-form-item>
            <el-form-item label="腰围">
              <el-input v-model="healthMsgLists.waist" placeholder="腰围" style="width:6%"></el-input><span>cm</span>
            </el-form-item>
            <el-form-item label="臀围">
              <el-input v-model="healthMsgLists.hip" placeholder="臀围" style="width:6%"></el-input><span>cm</span>
            </el-form-item>
            <el-form-item label="BMI">
                <div>24.14</div>
            </el-form-item>
             <el-form-item label="腰:臀">
              <div>24.14</div>
            </el-form-item>
            <el-form-item label="药物过敏史">
              <el-radio v-model="healthMsgLists.drugAllergy" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.drugAllergy" label="2">磺胺</el-radio>
              <el-radio v-model="healthMsgLists.drugAllergy" label="3">青霉素</el-radio>
              <el-radio v-model="healthMsgLists.drugAllergy" label="4">链霉素</el-radio>
              <el-radio v-model="healthMsgLists.drugAllergy" label="5">不详</el-radio>
              <el-radio v-model="healthMsgLists.drugAllergy" label="7">其他过敏药物质(请注明)</el-radio>
              <input type="text"  placeholder="请填写其他药物过敏史"  style="border:none;outline:none;">
            </el-form-item>
            <h4>既往史</h4>
            <el-form-item label="疾病">
              <el-radio v-model="healthMsgLists.illness" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.illness" label="2">有</el-radio>
              <input type="text"  placeholder="请填写疾病名称"  style="border:none;outline:none;">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择确诊时间"></el-date-picker>
            </el-form-item>
           <el-form-item label="手术">
              <el-radio v-model="healthMsgLists.operation" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.operation" label="2">有</el-radio>
              <input type="text"  placeholder="请填写手术名称"  style="border:none;outline:none;">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择确诊时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="外伤">
              <el-radio v-model="healthMsgLists.trauma" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.trauma" label="2">有</el-radio>
              <input type="text"  placeholder="请填写外伤名称"  style="border:none;outline:none;">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择确诊时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="输血">
              <el-radio v-model="healthMsgLists.transfusion" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.transfusion" label="2">有</el-radio>
              <input type="text"  placeholder="请填写输血原因"  style="border:none;outline:none;">
              <el-date-picker  v-model="value1" type="date" placeholder="请选择时间"></el-date-picker>
            </el-form-item>
            <h4>家族病史</h4>
             <el-form-item label="父亲">
              <el-radio v-model="healthMsgLists.fatherIll" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.fatherIll" label="2">有</el-radio>
               <el-checkbox-group v-model="healthMsgLists.fatherIll" v-show="true">
                    <el-checkbox label="糖尿病">糖尿病</el-checkbox>
                    <el-checkbox label="高血压">高血压</el-checkbox>
                    <el-checkbox label="冠心病">冠心病</el-checkbox>
                    <el-checkbox label="脑猝中" >脑猝中</el-checkbox>
                    <el-checkbox label="高脂血症" >高脂血症</el-checkbox>
                    <el-checkbox label="精神病" >精神病</el-checkbox>
                    <el-checkbox label="肿瘤" >肿瘤</el-checkbox>
                    <el-checkbox label="其他" >其他</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病"  style="border:none;outline:none;margin-left:2%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="母亲">
              <el-radio v-model="healthMsgLists.motherIll" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.motherIll" label="2">有</el-radio>
               <el-checkbox-group v-model="healthMsgLists.fatherIll" v-show="true">
                    <el-checkbox label="糖尿病">糖尿病</el-checkbox>
                    <el-checkbox label="高血压">高血压</el-checkbox>
                    <el-checkbox label="冠心病">冠心病</el-checkbox>
                    <el-checkbox label="脑猝中" >脑猝中</el-checkbox>
                    <el-checkbox label="高脂血症" >高脂血症</el-checkbox>
                    <el-checkbox label="精神病" >精神病</el-checkbox>
                    <el-checkbox label="肿瘤" >肿瘤</el-checkbox>
                    <el-checkbox label="其他" >其他</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病"  style="border:none;outline:none;margin-left:2%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="兄弟姐妹">
              <el-radio v-model="healthMsgLists.siblingIll" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.siblingIll" label="2">有</el-radio>
               <el-checkbox-group v-model="healthMsgLists.fatherIll" v-show="true">
                    <el-checkbox label="糖尿病">糖尿病</el-checkbox>
                    <el-checkbox label="高血压">高血压</el-checkbox>
                    <el-checkbox label="冠心病">冠心病</el-checkbox>
                    <el-checkbox label="脑猝中" >脑猝中</el-checkbox>
                    <el-checkbox label="高脂血症" >高脂血症</el-checkbox>
                    <el-checkbox label="精神病" >精神病</el-checkbox>
                    <el-checkbox label="肿瘤" >肿瘤</el-checkbox>
                    <el-checkbox label="其他" >其他</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病"  style="border:none;outline:none;margin-left:2%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="子女">
              <el-radio v-model="healthMsgLists.childIll" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.childIll" label="2">有</el-radio>
               <el-checkbox-group v-model="healthMsgLists.fatherIll" v-show="true">
                    <el-checkbox label="糖尿病">糖尿病</el-checkbox>
                    <el-checkbox label="高血压">高血压</el-checkbox>
                    <el-checkbox label="冠心病">冠心病</el-checkbox>
                    <el-checkbox label="脑猝中" >脑猝中</el-checkbox>
                    <el-checkbox label="高脂血症" >高脂血症</el-checkbox>
                    <el-checkbox label="精神病" >精神病</el-checkbox>
                    <el-checkbox label="肿瘤" >肿瘤</el-checkbox>
                    <el-checkbox label="其他" >其他</el-checkbox>
                    <input type="text"  placeholder="请填写其他疾病"  style="border:none;outline:none;margin-left:2%">
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="遗传病史">
              <el-radio v-model="healthMsgLists.inheritIll" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.inheritIll" label="2">有</el-radio>
              <input type="text"  placeholder="请填写其他遗传病史"  style="border:none;outline:none;">
            </el-form-item>
            <el-form-item label="残疾情况">
              <el-radio v-model="healthMsgLists.disability" label="1">无</el-radio>
              <el-radio v-model="healthMsgLists.disability" label="2">有</el-radio>
               <el-checkbox-group v-model="healthMsgLists.fatherIll" v-show="true">
                    <el-checkbox label="视力残疾">视力残疾</el-checkbox>
                    <el-checkbox label="听力残疾">听力残疾</el-checkbox>
                    <el-checkbox label="言语残疾">言语残疾</el-checkbox>
                    <el-checkbox label="肢体残疾" >肢体残疾</el-checkbox>
                    <el-checkbox label="智力残疾" >智力残疾</el-checkbox>
                    <el-checkbox label="精神残疾" >精神残疾</el-checkbox>
                    <el-checkbox label="其他残疾" >其他残疾</el-checkbox>
                    <input type="text"  placeholder="请填写其他残疾"  style="border:none;outline:none;margin-left:2%">
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
        <p>用户标签</p>
        <el-button plain>编辑</el-button>
      </div>
      <div class="user_label_msg">
          <el-form ref="form" :model="form" label-width="100px">
          <h4>吸烟史</h4>
          <el-form-item label="是否吸烟">
              <el-radio v-model="lifeMsgLists.nationality" label="1">中国</el-radio>
              <el-radio v-model="lifeMsgLists.nationality" label="2">其他</el-radio>
              <input type="text"  placeholder="请填写其他国籍"  style="border:none;outline:none;">
            </el-form-item>
            <el-form-item label="开始吸烟时间">
               <el-date-picker
                    v-model="value3"
                    type="year"
                    placeholder="选择时间">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="吸烟量">
              <el-radio v-model="lifeMsgLists.smokeAmount" label="1">偶尔(<3支/周)</el-radio>
              <el-radio v-model="lifeMsgLists.smokeAmount" label="2">少量(<1-4支/日)</el-radio>
              <el-radio v-model="lifeMsgLists.smokeAmount" label="2">经常(≥支/日)</el-radio>
              <input type="text"  placeholder="请填写其他国籍"  style="border:none;outline:none;">
            </el-form-item>
             <el-form-item label="开始戒烟时间">
               <el-date-picker
                    v-model="value3"
                    type="year"
                    placeholder="选择时间">
                </el-date-picker>
            </el-form-item>
            <h4>饮酒史</h4>
             <el-form-item label="是否饮酒">
              <el-radio v-model="lifeMsgLists.nationality" label="1">是</el-radio>
              <el-radio v-model="lifeMsgLists.nationality" label="2">否</el-radio>
              <el-radio v-model="lifeMsgLists.nationality" label="3">已戒</el-radio>
            </el-form-item>
            <el-form-item label="饮酒类型">
              <el-radio v-model="lifeMsgLists.drinkType" label="1">色酒(酒精含量<15)</el-radio>
              <el-radio v-model="lifeMsgLists.drinkType" label="2">啤酒(酒精含量15-40,色酒100-150ml)</el-radio>
              <el-radio v-model="lifeMsgLists.drinkType" label="3">白酒(酒精含量≥45)</el-radio>
            </el-form-item>
               <el-form-item label="饮酒量">
              <el-radio v-model="lifeMsgLists.drinkAmount" label="1">少量(啤酒<250-500ml/次,色酒100-150ml/次,白酒50-250ml/次)</el-radio>
              <el-radio v-model="lifeMsgLists.drinkAmount" label="2">中量(啤酒500-2500ml/次,色酒150-250ml/次,白酒50-250ml/次)</el-radio>
              <el-radio v-model="lifeMsgLists.drinkAmount" label="3">大量(啤酒>2500ml/次,其他酒>250ml/次)</el-radio>
            </el-form-item>
             <el-form-item label="饮酒频率">
              <el-radio v-model="lifeMsgLists.drinkFrequency" label="1">偶尔(每年<3-4次)</el-radio>
              <el-radio v-model="lifeMsgLists.drinkFrequency" label="2">少量(每年<3次)</el-radio>
              <el-radio v-model="lifeMsgLists.drinkFrequency" label="3">经常(每天喝)</el-radio>
            </el-form-item>
             <el-form-item label="戒酒日期">
              <el-date-picker
                    v-model="value3"
                    type="year"
                    placeholder="选择戒酒日期">
                </el-date-picker>
            </el-form-item>


            <h4>体育训练情况</h4>
            <el-form-item label="是否锻炼">
              <el-radio v-model="lifeMsgLists.exerciseRegular" label="1">是</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseRegular" label="2">否</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseRegular" label="3">无规律</el-radio>
            </el-form-item>
            <el-form-item label="锻炼情况">
              <el-radio v-model="lifeMsgLists.exerciseSituation" label="1">每天锻炼</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseSituation" label="2">每周3次及以上</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseSituation" label="3">每周1-2次</el-radio>
            </el-form-item>
            <el-form-item label="每次锻炼时间">
              <el-radio v-model="lifeMsgLists.exerciseTime" label="1"><30分钟</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseTime" label="2">30-60分钟</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseTime" label="3">1小时以上</el-radio>
            </el-form-item>
            <el-form-item label="锻炼类型">
              <el-radio v-model="lifeMsgLists.exerciseType" label="1">有氧运动(慢跑、气功、极拳、跳舞、散步、游泳、登山)</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseType" label="2">无氧运动(速跑、篮球、排球、足球等剧烈运动)</el-radio>
              <el-radio v-model="lifeMsgLists.exerciseType" label="3">无规律</el-radio>
            </el-form-item>

            <el-form-item label="饮食习惯类型">
              <el-radio v-model="lifeMsgLists.eatType" label="1">偏咸</el-radio>
              <el-radio v-model="lifeMsgLists.eatType" label="2">偏甜</el-radio>
              <el-radio v-model="lifeMsgLists.eatType" label="3">偏油</el-radio>
              <el-radio v-model="lifeMsgLists.eatType" label="4">素食</el-radio>
              <el-radio v-model="lifeMsgLists.eatType" label="5">辛辣</el-radio>
              <el-radio v-model="lifeMsgLists.eatType" label="6">嗜热食</el-radio>
              <el-radio v-model="lifeMsgLists.eatType" label="7">其他</el-radio>
              <input type="text"  placeholder="饮食习惯类型"  style="border:none;outline:none;">克/次
            </el-form-item>
            <el-form-item label="睡眠情况">
              <el-radio v-model="lifeMsgLists.sleepSituation" label="1">睡眠困难</el-radio>
              <el-radio v-model="lifeMsgLists.sleepSituation" label="2">入睡困难</el-radio>
              <el-radio v-model="lifeMsgLists.sleepSituation" label="3">早醒</el-radio>
              <el-radio v-model="lifeMsgLists.sleepSituation" label="4">没有</el-radio>
              <el-radio v-model="lifeMsgLists.sleepSituation" label="7">其他</el-radio>
              <input type="text"  placeholder="8小时/天"  style="border:none;outline:none;">
            </el-form-item>
             <el-form-item label="其他习惯">
              <el-radio v-model="lifeMsgLists.otherRegular" label="1">无</el-radio>
              <el-radio v-model="lifeMsgLists.otherRegular" label="2">有</el-radio>
              <input type="text"  placeholder="请输入其他习惯"  style="border:none;outline:none;">
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
        <p>用户标签</p>
      </div>
      <div class="user_label_msg">
          <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="户籍类型">
            <el-radio v-model="otherMsgLists.householdType" label="1">本阜</el-radio>
            <el-radio v-model="otherMsgLists.householdType" label="2">外阜</el-radio>
        </el-form-item>
        <el-form-item label="户别">
            <el-radio v-model="otherMsgLists.householdCategory" label="1">农业</el-radio>
            <el-radio v-model="otherMsgLists.householdCategory" label="2">非农业</el-radio>
        </el-form-item>
         <el-form-item label="暂住证">
            <el-radio v-model="otherMsgLists.kitas" label="1">A类</el-radio>
            <el-radio v-model="otherMsgLists.kitas" label="2">B类</el-radio>
        </el-form-item>
         <el-form-item label="来京日期">
              <el-date-picker
                v-model="otherMsgLists.accessBjTime"
                type="date"
                placeholder="选择来京日期">
                </el-date-picker>
        </el-form-item>
        <el-form-item label="邮政编码">
            <el-input v-model="otherMsgLists.postalCode" placeholder="请填写邮政编码"></el-input>
        </el-form-item>
        <el-form-item label="所属派出所">
            <el-input v-model="otherMsgLists.policeStation" placeholder="请填写所属派出所"></el-input>
        </el-form-item>
        <el-form-item label="所属居委会">
            <el-input v-model="otherMsgLists.committee" placeholder="请填写所属居委会"></el-input>
        </el-form-item>
        <el-form-item label="住宅电话">
            <el-input v-model="otherMsgLists.homePhone" placeholder="请填写所住宅电,包括区号"></el-input>
        </el-form-item>
        <el-form-item label="Email">
            <el-input v-model="otherMsgLists.email" placeholder="请填写Email地址"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名">
            <el-input v-model="otherMsgLists.contactName" placeholder="请填写联系人姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话">
            <el-input v-model="otherMsgLists.contactPhone" placeholder="请填写联系人电话"></el-input>
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
export default {
  props: ["editblock"],
  data() {
    return {
        form:{},
        input:'',
        value1:'',
        value3:'',
      editIndex: "",
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
      }
    };
  },
  created() {
    
  },
  watch: {
    editblock: {
      handler(newval, oldval) {
          console.log(newval, "编辑健康档案");
        if (newval !== "") {
          this.editIndex = newval.edit_index;
          this.DefaultMsg = newval.healthBase;
        }
      },
    },
  },
  methods:{
    //   保存基本信息
      savebBseMsg(){
          console.log('保存基本信息')
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