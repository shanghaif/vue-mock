<template>
  <div class="patient_list_watch">
    <!-- 编辑健康档案 -->
    <div class="patient_content">
      <div class="gain_msg" v-show="gainBlockShow">
        <watch :selectMsg="selectMsg" @isShow = 'ishowfun'></watch>
      </div>
       <div class="edit_msg"> 
         <edits></edits>
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
import editHealth from "./edit";
import watch from './watch'
import edits from './edit'
import { get, post } from "@/request/http";
export default {
  components: {
    editHealth,
    watch,
    edits
  },
  data() {
    return {
      gainBlockShow:true,
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

      selectMsg:''
    };
  },
  created() {
  },
  mounted() {},
  watch: {
    // 监听编辑时--不等于空，说明有编辑；等于空，说明没有点编辑
    // editblock: {
    //   handler(newVal, oldVal) {
    //     this.editblock = newVal;
    //     if (this.editblock !== "") this.gainShow = false;
    //   },
    // },
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
      console.log(val,base_msg)
      this.selectMsg = {
        selectIndex:val,
        selectblockMsg:base_msg
      }
      let ischeckMsg = JSON.parse(JSON.stringify(base_msg));
      
    },
    // 添加常用语的btn
    addPharse() {
      if (this.phrase_text == "") return;
      this.phraseLists.push(this.phrase_text);
      this.phrase_text = "";
      // console.log(this.phrase_text,'添加的常用语')
    },
    ishowfun(data){
      console.log(data,'子组件传来的值')
      this.gainBlockShow = data
    }
    // 编辑
    // healthBase_edit(healthBase) {
    //   this.editblock = {
    //     edit_index:2,
    //     healthBase:healthBase
    //   }
    // },
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
  }

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