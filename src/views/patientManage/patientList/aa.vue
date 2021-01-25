<template>
  <div class="patient_list_watch">
    <!-- 编辑健康档案 -->
    <div class="patient_content">
      <div class="edit_msg">
        <!-- <editHealth :editblock="editblock"></editHealth> -->
        <editHealth :editblock="editblock"></editHealth>
      </div>
      <div class="gain_msg" v-show="gainShow">
        <!-- 用户标签 -->
        <div class="user_block" v-show="modules_block.user_label_B">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>用户标签</p>
            <el-button plain @click="editblock = 1">编辑</el-button>
          </div>
          <div class="user_label_msg">
            <div class="photo_contanier">
              <div class="user_photo">
                <img src="@/assets/images/login/qr_code.png" alt="" />
              </div>
              <div class="user_detail clearfix">
                <p><span>昵称：</span>爷爷</p>
                <p><span>会员级别：</span>Vip</p>
                <p><span>邀请人：</span>细小没</p>
                <p><span>会员有效期：</span>2019-11-12至2020-11-12日</p>
              </div>
            </div>
            <p class="label"><span>标签：</span>脆性糖尿病，容易愤怒，很有钱</p>
            <p class="label">
              <span>下次随访：</span>2020年11月20日通知复诊血常规检查，系主任
              2020-10-29 10:23
            </p>
          </div>
        </div>
        <!--  基本信息-->
        <div class="user_block" v-show="modules_block.base_msg_B" >
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>基本信息</p>
            <el-button plain @click="healthBase_edit(healthBase)">编辑</el-button>
          </div>
          <div class="base_msg_container clearfix" >
            <p><span>姓名：</span>{{healthBase.name}}</p>
            <p><span>籍贯：</span>{{healthBase.birthplace}}</p>
            <p><span>性别：</span>{{healthBase.sex}}</p>
            <p><span>文化程度：</span>{{healthBase.education}}</p>
            <p><span>身份证号：</span>{{healthBase.idCard}}</p>
            <p><span>民族：</span>{{healthBase.nation}}</p>
            <p><span>手机号：</span>{{healthBase.phoneNumber}}</p>
            <p><span>职业：</span>{{healthBase.profession}}</p>
            <p><span>出生日期：</span>{{healthBase.birthday}}</p>
            <p><span> 现住址：</span>{{healthBase.presentAddr}}</p>
            <p><span> 通讯地址：</span>{{healthBase.correspondenceAddr}}</p>
            <p><span> 国籍：</span>{{healthBase.nationality}}</p>
            <p><span>工作单位：</span>{{healthBase.company}}</p>
            <p><span>婚姻状况：</span>{{healthBase.marriage}}</p>
            <p><span>定点医疗单位：</span>{{healthBase.fixMedicalUnit}}</p>
            <div class="fill_more">
              <p>特殊类型人群：</p>
              <div class="fill_more_type">
                <p>{{healthBase.specialPeople}}</p>
              </div>
            </div>
            <div class="fill_more">
              <p>医疗费用类型：</p>
              <div class="fill_more_type">
                <p>{{healthBase.expenseType}}</p>
              </div>
            </div>
          </div>
        </div>
        <!--  健康信息-->
        <div class="user_block" v-show="modules_block.health_msg_B">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>健康信息</p>
            <el-button plain @click="editblock = 3">编辑</el-button>
          </div>
          <div class="health_msg_container clearfix">
            <div class="personal_msg">
              <p><span>血型：</span>{{healthInfo.bloodType}}</p>
              <p><span>RH阴性：</span>{{healthInfo.rhNegative}}</p>
              <p><span>身高：</span>{{healthInfo.height}}</p>
              <p><span>体重：</span>{{healthInfo.weight}}</p>
              <p><span>腰围：</span>{{healthInfo.waist}}</p>
              <p><span>臀围：</span>{{healthInfo.hip}}</p>
              <p><span>BMI：</span>14.21</p>
              <p><span> 腰：臀：</span>36.1</p>
              <p>
                <span> 药物过敏史：</span
                >{{healthInfo.drugAllergy}}
              </p>
            </div>
            <div class="personal_record">
              <div class="before_history">
                <h6>既往史</h6>
                <p><span>疾病：</span>{{healthInfo.illness}}</p>
                <p><span>手术：</span>{{healthInfo.operation}}</p>
                <p><span>外伤：</span>{{healthInfo.trauma}}</p>
                <p><span>输血：</span>{{healthInfo.transfusion}}</p>
              </div>

              <div class="family_history">
                <h6>既往史</h6>
                <div class="family">
                  <p>父亲：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.fatherIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>母亲：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.motherIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>兄弟姐妹：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.siblingIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>子女：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.childIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>遗传病史：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.inheritIll}}</p>
                  </div>
                </div>
                <div class="family">
                  <p>残疾情况：</p>
                  <div class="family_type clearfix">
                    <p>{{healthInfo.disability}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 生活习惯 -->
        <div class="user_block" v-show="modules_block.life_habit_B">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>生活习惯</p>
            <el-button plain @click="editblock = 4">编辑</el-button>
          </div>
          <div class="life_msg_container clearfix">
            <div class="life_left">
              <div class="historyBlock smoking_history">
                <h6>吸烟史</h6>
                <!-- <p><span>是否吸烟：</span>{{healthLife.}}</p> -->
                <p><span>开始吸烟时间：</span>{{healthLife.beginSmokeTime}}</p>
                <p><span>吸烟量：</span>{{healthLife.smokeAmount}}</p>
                <!-- <p><span>戒烟时间：</span>{{healthLife.}}</p> -->
              </div>

              <div class="historyBlock smoking_history">
                <h6>饮酒史</h6>
                <!-- <p><span>是否饮酒</span>{{healthLife.}}</p> -->
                <p><span>饮酒类型：</span>{{healthLife.drinkType}}</p>
                <p><span>饮酒量：</span>{{healthLife.drinkAmount}}</p>
                <p><span>饮酒频率：</span>{{healthLife.drinkFrequency}}</p>
                <!-- <p><span>戒酒日期：</span>{{healthLife.}}</p> -->
              </div>
            </div>
            <div class="life_right">
              <div class="historyBlock smoking_history">
                <h6>体育锻炼情况</h6>
                <p><span>是否锻炼：</span>{{healthLife.exerciseRegular}}</p>
                <p><span>锻炼情况：</span>{{healthLife.exerciseSituation}}</p>
                <p><span>每次锻炼时间：</span>{{healthLife.exerciseTime}}</p>
                <p><span>锻炼类型：</span>{{healthLife.exerciseType}}</p>
                <p><span>饮食习惯类型：</span>{{healthLife.eatType}}</p>
                <p><span>睡眠情况：</span>{{healthLife.sleepSituation}}</p>
                <p><span>其他习惯：</span>{{healthLife.otherRegular}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 其他习惯 -->
        <div class="user_block" v-show="modules_block.other_msg_B">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>其他习惯</p>
            <el-button plain @click="editblock = 5">编辑</el-button>
          </div>
          <div class="other_msg_container clearfix">
            <p><span> 户籍类型：</span>{{healthOther.householdType}}</p>
            <p><span> 所属派出所：</span>{{healthOther.policeStation}}</p>
            <p><span>邮政编码：</span>{{healthOther.postalCode}}</p>
            <p><span> Email：</span>{{healthOther.email}}</p>
            <p><span> 住宅电话：</span>{{healthOther.homePhone}}</p>
            <p><span>联系人电话：</span>{{healthOther.contactPhone}}</p>
            <p><span> 联系人姓名：</span>{{healthOther.contactName}}</p>
            <p><span> 暂住证：</span>{{healthOther.kitas}}</p>
            <p><span> 户别：</span>{{healthOther.householdCategory}}</p>
            <p><span> 所属居委会：</span>{{healthOther.committee}}</p>
          </div>
        </div>
        <!-- 血糖习惯 -->
        <div class="user_block" v-show="modules_block.blood_data_B">
          <div class="user_msg_bar">
            <img src="@/assets/images/patientList/userLabel.png" alt="" />
            <p>血糖习惯</p>
            <div class="detail_more_btn">
              <el-button type="primary" round>更多资料</el-button>
            </div>
          </div>
          <div class="blood_msg_container clearfix">
            <bloodPress></bloodPress>
          </div>
        </div>
        <!-- 血压数据 -->
      </div>
    </div>
    <div class="patient_tool_bar">
      <div class="set_tool_bar">
        <div
          class="tools_btn"
          v-for="(item, index) in toolsBtnList"
          :key="index"
          @mouseenter="tool_btn_enter(index)"
          @click="dialogShow(index)"
          :style="{
            background:
              btn_index == index
                ? 'linear-gradient(180deg, #6672FB, #7B66FB)'
                : '',
          }"
        >
          <div class="tool_container">
            <div class="tool_img">
              <img :src="item.imgUrl" alt="" />
            </div>
            <span :style="{ color: btn_index == index ? 'white' : '' }">{{
              item.text
            }}</span>
          </div>
        </div>
      </div>
      <div class="patient_base_msg">
        <p>基本信息</p>
        <el-checkbox-group v-model="ischecked">
          <!-- <el-checkbox label="基本信息A" @change="testChecbox"></el-checkbox> -->
          <el-checkbox
            v-for="(base_msg, baseIndex) in baseMsgLists"
            :label="base_msg.id"
            :key="baseIndex"
            v-model="base_msg.checked"
            :checked="base_msg.checked"
            @change="(val) => handleChecked(val, base_msg)"
            >{{ base_msg.label }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
    </div>
    <!-- 发送消息 -->
    <el-dialog
      title="提示"
      :visible.sync="sendMsgDialog"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入消息内容"
        v-model="send_msg_value"
        resize="none"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sendMsgDialog = false">取 消</el-button>
        <el-button type="primary" @click="sendMsgDialog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 设置随访 -->
    <el-dialog
      title="提示"
      :visible.sync="setFollowDialog"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="setFollowTime">
        <span>设置随访时间</span>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入随访内容 / 自定义内容"
        v-model="follow_text"
        resize="none"
      >
      </el-input>
      <div style="margin-top: 15px">
        <el-input
          placeholder="自定义常用语"
          v-model="phrase_text"
          class="customPhrase"
          style="height: 44px"
        >
          <el-button slot="append" @click="addPharse">添加</el-button>
        </el-input>
      </div>
      <div class="phraseContainer">
        <div
          class="phraseBar"
          v-for="(item, index) in phraseLists"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setFollowDialog = false">取 消</el-button>
        <el-button type="primary" @click="setFollowDialog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 新增标签 -->
    <el-dialog
      title="提示"
      :visible.sync="addLabelDialog"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="setFollowTime">
        <span>优先级</span>
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in label_rank"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-input
        v-model="label_text"
        placeholder="请输入标签内容，多个标签以“，”号区隔"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addLabelDialog = false">取 消</el-button>
        <el-button type="primary" @click="addLabelDialog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 服药提醒 -->
    <el-dialog
      title="提示"
      :visible.sync="warnDialog"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="medicine_warn">
        <span>提醒时间</span>
        <el-time-select
          placeholder="起始时间"
          v-model="medicine_start_time"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
        <span class="between">至</span>
        <el-time-select
          placeholder="结束时间"
          v-model="medicine_end_time"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: medicine_end_time,
          }"
        >
        </el-time-select>
      </div>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入标签内容，多个标签以“，”号区隔"
        v-model="medicine_text"
        resize="none"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="warnDialog = false">取 消</el-button>
        <el-button type="primary" @click="warnDialog = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增检测报告 -->
    <el-dialog
      title="提示"
      :visible.sync="testReportDialog"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="addReport">
        <span>报告名称</span>
        <el-input
          v-model="label_text"
          placeholder="请输入报告名称"
          style="width: 80%"
        ></el-input>
      </div>
      <div>
        <span style="margin-right: 2%">上传报告</span>
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          on-success=""
          before-upload=""
        >
          <!-- <img v-if="imageUrl" :src="dialogImageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
          <!-- <img src="@/assets/images/login/qr_code.png" alt=""> -->
        </el-upload>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="testReportDialog = false">取 消</el-button>
        <el-button type="primary" @click="testReportDialog = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import bloodPress from "./bloodPress";
import editHealth from "./edit";
import { get, post } from "@/request/http";
export default {
  components: {
    bloodPress,
    editHealth,
  },
  data() {
    return {
      healthBase:null,
      healthInfo:null,
      healthLife:null,
      healthOther:null,
      // 发送消息
      send_msg_value: "",
      // 随访内容
      follow_text: "",
      // 服药开始和结束时间
      medicine_start_time: "",
      medicine_end_time: "",
      medicine_text: "",
      modules_block: {
        user_label_B: false,
        base_msg_B: false,
        health_msg_B: false,
        life_habit_B: false,
        other_msg_B: false,
        blood_data_B: false,
        BloodPress_data_B: false,
        heart_data_B: false,
        test_report_B: false,
        health_information_B: false,
        medicine_warn: false,
      },
      btn_index: null,
      sendMsgDialog: false,
      setFollowDialog: false,
      addLabelDialog: false,
      warnDialog: false,
      testReportDialog: false,
      ischecked: [],
      allChecked: [],
      toolsBtnList: [
        {
          imgUrl: require("@/assets/images/patientList/sendMsg.png"),
          text: "发送消息",
        },
        {
          imgUrl: require("@/assets/images/patientList/setFollow.png"),
          text: "设置随访",
        },
        {
          imgUrl: require("@/assets/images/patientList/addLabel.png"),
          text: "新增标签",
        },
        {
          imgUrl: require("@/assets/images/patientList/warn.png"),
          text: "服药提醒",
        },
        {
          imgUrl: require("@/assets/images/patientList/testReport.png"),
          text: "新增检测报告",
        },
      ],
      baseMsgLists: [
        {
          id: "1",
          label: "用户标签",
          checked: true,
        },
        {
          id: "2",
          label: "基本信息",
          checked: true,
        },
        {
          id: "3",
          label: "健康信息",
          checked: false,
        },
        {
          id: "4",
          label: "生活习惯",
          checked: false,
        },
        {
          id: "5",
          label: "其他信息",
          checked: false,
        },
        {
          id: "6",
          label: "血糖数据",
          checked: true,
        },
        {
          id: "7",
          label: "血压数据",
          checked: false,
        },
        {
          id: "8",
          label: "心电数据",
        },
        {
          id: "9",
          label: "检测报告",
        },
        {
          id: "10",
          label: "健康消息",
        },
        {
          id: "10",
          label: "服药提醒",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "3天后",
        },
        {
          value: "选项2",
          label: "5天后",
        },
        {
          value: "选项3",
          label: "7天后",
        },
        {
          value: "选项4",
          label: "10天后",
        },
        {
          value: "选项5",
          label: "半个月后",
        },
      ],
      // 新增标签---优先级
      label_rank: [
        {
          value: "选项1",
          label: "一级",
        },
        {
          value: "选项2",
          label: "二级",
        },
        {
          value: "选项3",
          label: "三级",
        },
      ],
      label_text: "",
      value: "",
      // 设置随访--常用语（放一个数组里面，添加就添加到数组里面）
      phrase_text: "",
      phraseLists: ["糖尿病"],
      // 基本信息
      
      // 编辑传过去的id
      editblock:null,
      gainShow: true,
    };
  },
  created() {
    // 判断默认展示的模块
    this.default_checked();
    //基本信息
    get('/api/healthBase/11111').then(res=>{
      this.healthBase = res.data
    })
    // 将抗信息
     get('/api/healthInfo/11111').then(res=>{
      this.healthInfo = res.data
    })
    // 生活习惯
     get('/api/healthLife/11111').then(res=>{
      this.healthLife = res.data
    })
    // 其他习惯
    get('/api/healthOther/11111').then(res=>{
      this.healthOther = res.data
      console.log(res, "其他习惯：：：：")
    })

  },
  mounted() {},
  watch: {
    // 监听编辑时--不等于空，说明有编辑；等于空，说明没有点编辑
    editblock: {
      handler(newVal, oldVal) {
        this.editblock = newVal;
        if (this.editblock !== "") this.gainShow = false;
      },
    },
  },
  methods: {
    // 测试多选框
    testChecbox(val) {
      // console.log(val);
    },
    tool_btn_enter(index) {
      this.btn_index = index;
      // console.log(index);
    },
    // 弹窗
    dialogShow(index) {
      switch (index) {
        case 0:
          this.sendMsgDialog = true;
          break;
        case 1:
          this.setFollowDialog = true;
          break;
        case 2:
          this.addLabelDialog = true;
          break;
        case 3:
          this.warnDialog = true;
          break;
        case 4:
          this.testReportDialog = true;
          break;
        default:
          break;
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 多选框全选
    handleChecked(val, base_msg) {
      let ischeckMsg = JSON.parse(JSON.stringify(base_msg));
      if (val) {
        // console.log(ischeckMsg.label);
        switch (ischeckMsg.label) {
          case (ischeckMsg.label = "用户标签"):
            this.modules_block.user_label_B = true;
            break;
          case (ischeckMsg.label = "基本信息"):
            this.modules_block.base_msg_B = true;
            break;
          case (ischeckMsg.label = "健康信息"):
            this.modules_block.health_msg_B = true;
            break;
          case (ischeckMsg.label = "生活习惯"):
            this.modules_block.life_habit_B = true;
            break;
          case (ischeckMsg.label = "其他信息"):
            this.modules_block.other_msg_B = true;
            break;
          case (ischeckMsg.label = "血糖数据"):
            this.modules_block.blood_data_B = true;
            break;
          case (ischeckMsg.label = "血压数据"):
            this.modules_block.BloodPress_data_B = true;
            break;
          case (ischeckMsg.label = "心电数据"):
            this.modules_block.heart_data_B = true;
            break;
          case (ischeckMsg.label = "检测报告"):
            this.modules_block.test_report_B = true;
            break;
          case (ischeckMsg.label = "健康消息"):
            this.modules_block.health_information_B = true;
            break;
          case (ischeckMsg.label = "服药提醒"):
            this.modules_block.medicine_warn = true;
            break;
          default:
            break;
        }
      } else {
        switch (ischeckMsg.label) {
          case (ischeckMsg.label = "用户标签"):
            this.modules_block.user_label_B = false;
            break;
          case (ischeckMsg.label = "基本信息"):
            this.modules_block.base_msg_B = false;
            break;
          case (ischeckMsg.label = "健康信息"):
            this.modules_block.health_msg_B = false;
            break;
          case (ischeckMsg.label = "生活习惯"):
            this.modules_block.life_habit_B = false;
            break;
          case (ischeckMsg.label = "其他信息"):
            this.modules_block.other_msg_B = false;
            break;
          case (ischeckMsg.label = "血糖数据"):
            this.modules_block.blood_data_B = false;
            break;
          case (ischeckMsg.label = "血压数据"):
            this.modules_block.BloodPress_data_B = false;
            break;
          case (ischeckMsg.label = "心电数据"):
            this.modules_block.heart_data_B = false;
            break;
          case (ischeckMsg.label = "检测报告"):
            this.modules_block.test_report_B = false;
            break;
          case (ischeckMsg.label = "健康消息"):
            this.modules_block.health_information_B = false;
            break;
          case (ischeckMsg.label = "服药提醒"):
            this.modules_block.medicine_warn = false;
            break;
          default:
            break;
        }
      }
      // }
    },
    // 默认选中
    default_checked() {
      for (let i = 0; i < this.baseMsgLists.length; i++) {
        // console.log(this.baseMsgLists[i].checked == true);
        if (this.baseMsgLists[i].checked) {
          this.allChecked.push(this.baseMsgLists[i]);
          // console.log(this.allChecked);
        }
      }
      for (let i in this.allChecked) {
        if (
          this.allChecked[0].checked == true &&
          this.allChecked[1].checked == true &&
          this.allChecked[2].checked == true
        ) {
          this.modules_block.user_label_B = true;
          this.modules_block.base_msg_B = true;
          this.modules_block.blood_data_B = true;
        }
      }
    },
    // 添加常用语的btn
    addPharse() {
      if (this.phrase_text == "") return;
      this.phraseLists.push(this.phrase_text);
      this.phrase_text = "";
      // console.log(this.phrase_text,'添加的常用语')
    },
    // 编辑
    healthBase_edit(healthBase) {
      this.editblock = {
        edit_index:2,
        healthBase:healthBase
      }
    },
  },
};
</script>

<style lang="less" scoped>
.patient_list_watch {
  height: calc(100% - 2%);
  padding: 0% 10% 0% 1%;
  display: flex;

  .patient_content {
    width: 80%;
    margin-right: 1%;
    border-radius: 20px;
    p {
      font-size: 18px;
      color: #666699;
    }
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

    // 用户标签---板块
    .user_label_msg {
      padding: 3%;
      background: white;
      .photo_contanier {
        display: flex;
        margin-bottom: 1%;
        .user_photo {
          width: 100px;
          border-radius: 50%;
          margin-right: 2%;
          border: 1px dashed rgba(102, 114, 251, 1);
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        .user_detail {
          flex: 1;
          padding-top: 1%;
          p:last-child {
            width: 40%;
          }
          p {
            width: 30%;
            font-size: 18px;
            line-height: 40px;
            float: left;
            color: #666699;
          }
        }
      }
    }
    .label {
      line-height: 42px;
    }

    // 基本信息--板块
    .base_msg_container {
      padding: 3%;
      background: white;
      p {
        width: 50%;
        line-height: 42px;
        float: left;
      }
      .fill_more {
        width: 100%;
        display: flex;
        p {
          width: 12%;
        }
        .fill_more_type {
          flex: 1;
          p {
            width: auto;
            margin: 0 1%;
          }
        }
      }
    }

    // 健康信息--板块
    .health_msg_container {
      display: flex;
      padding: 3%;
      .personal_msg {
        width: 46%;
        margin-right: 4%;
        p {
          line-height: 42px;
        }
      }
      .personal_record {
        flex: 1;
        .before_history {
          margin-bottom: 2%;
          h6 {
            font-size: 20px;
            color: #666699;
          }
          p {
            line-height: 42px;
            font-size: 18px;
            color: #666699;
          }
        }
        .family_history {
          h6 {
            font-size: 20px;
            color: #666699;
          }
          .family {
            display: flex;
            p {
              width: 16%;
              line-height: 42px;
            }
            .family_type {
              flex: 1;
              p {
                width: auto;
                padding: 0 1%;
                float: left;
              }
            }
          }
        }
      }
    }

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
  // 其他信息--板块
  .other_msg_container {
    padding: 3%;
    p {
      width: 50%;
      float: left;
      line-height: 42px;
    }
  }

  // 血糖数据

  .patient_tool_bar {
    flex: 1;
    width: 0;
    .set_tool_bar {
      width: calc(100% - 8%);
      height: auto;
      padding: 8% 4% 2% 4%;
      background: white;
      border-radius: 20px;
      margin-bottom: 20px;
      .tools_btn {
        width: calc(100% - 14%);
        padding: 6% 0 6% 14%;
        background: #f4f7ff;
        border-radius: 0px 33px 33px 33px;
        position: relative;
        margin-bottom: 20px;
        .tool_container {
          display: flex;
          .tool_img {
            width: 30px;
            img {
              width: 30px;
            }
          }
          span {
            flex: 1;
            line-height: 30px;
            margin-left: 20px;
            color: #333366;
          }
        }
      }
    }
    .patient_base_msg {
      width: calc(100% - 30%);
      height: auto;
      padding: 3% 10% 3% 20%;
      background: white;
      border-radius: 20px;
      p {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333366;
        line-height: 38px;
      }
      .el-checkbox {
        width: 100%;
        height: 50px;
        line-height: 50px;
      }
      /deep/.el-checkbox__input {
        background: #ffffff;
        border-radius: 4px;
      }
      /deep/.el-checkbox__inner {
        width: 18px;
        height: 18px;
      }
      /deep/.el-checkbox__inner::after {
        left: 7px;
        top: 3px;
      }
      /deep/.el-checkbox__label {
        color: #333366;
        font-size: 16px;
      }
    }
  }
  // 设置随访
  .setFollowTime {
    margin-bottom: 18px;
    span {
      font-size: 16px;
      color: #333366;
      margin-right: 14px;
    }
  }
  /deep/.el-input-group > .el-input__inner {
    border-radius: 26px 0 0 26px !important;
  }
  .phraseContainer {
    margin-top: 12px;
    .phraseBar {
      width: calc(100% - 4%);
      height: 44px;
      font-size: 14px;
      line-height: 44px;
      background: #fafafa;
      border: 1px solid #eeeeee;
      border-radius: 27px;
      color: #333366;
      padding-left: 4%;
      margin-bottom: 12px;
    }
  }
  // 服药提醒
  .medicine_warn {
    margin-bottom: 3%;
    span:nth-child(1) {
      margin-right: 2%;
    }
    .between {
      padding: 0 2%;
    }
    .el-date-editor.el-input {
      width: 140px;
    }
  }
  // 新增检测报告
  .addReport {
    span {
      margin-right: 2%;
    }
  }
}

// input获取焦点出现边框
/deep/.el-input__inner:focus,
/deep/.el-textarea__inner:focus {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-input__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-input-group__append {
  border: none;
  border-radius: 0 26px 26px 0;
  cursor: pointer;
}

.avatar-uploader {
  display: inline-block;
  margin-top: 10px;
}

.avatar-uploader img {
  width: 100px;
  height: 100px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
}
</style>