<template>
  <div class="healthBar">
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
        <el-checkbox-group v-model="ischecked" @change="showBlock">
          <el-checkbox
            v-for="(base_msg, baseIndex) in baseMsgLists"
            :label="base_msg.id"
            :key="baseIndex"
            v-model="base_msg.checked"
            :checked="base_msg.checked"
            >{{ base_msg.label }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
    </div>
    <!-- 发送消息 -->
    <el-dialog title="提示" :visible.sync="sendMsgDialog" width="30%" center>
      <el-input
        type="textarea"
        :rows="6"
        maxlength="50"
        placeholder="请输入消息内容"
        v-model="send_msg_value"
        resize="none"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sendMsgDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveSendMsg">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 设置随访 -->
    <el-dialog title="提示" :visible.sync="setFollowDialog" width="30%" center>
      <div class="setFollowTime">
        <span>设置随访时间</span>
        <el-select v-model="visitedTime" filterable placeholder="请选择">
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
        v-model="customText"
        resize="none"
      >
      </el-input>
      <div style="margin-top: 15px">
        <el-tag
          :key="index"
          v-for="(item, index) in oftenSpeak"
          closable
          :disable-transitions="false"
          @close="handleClosed(item)"
          @click="doublePush(item)"
        >
          {{ item }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="oftenSpeakVisible"
          v-model="oftenSpeakValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="addOftenSpeak"
          @blur="addOftenSpeak"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+自定义常用语</el-button
        >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="visitedDialog">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增标签 -->
    <el-dialog title="提示" :visible.sync="addLabelDialog" width="30%" center>
      <div class="setFollowTime">
        <span>优先级</span>
        <el-select v-model="priority" filterable placeholder="请选择">
          <el-option
            v-for="item in label_rank"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>
      <el-input
        v-model="label_text"
        placeholder="请输入标签内容，多个标签以“，”号区隔"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="addLabelBtn">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 服药提醒 -->
    <el-dialog title="服药提醒" :visible.sync="warnDialog" width="30%" center>
      <div class="medicine_warn">
        <span>提醒时间</span>
        <el-time-select
          @change="startTime"
          placeholder="提醒时间"
          v-model="medicineWarnTime"
          value-format="HH:mm:ss"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
      </div>
      <el-input
        type="textarea"
        :rows="4"
        maxlength="50"
        placeholder="请输入提醒的内容"
        v-model="warnText"
        resize="none"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="setwarnDialog">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 新增检测报告 -->
    <el-dialog title="提示" :visible.sync="testReportDialog" width="30%" center>
      <el-form
        status-icon
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="报告名称" placeholder="请输入报告名称" prop="pass">
          <el-input
            type="text"
            v-model="label_text"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="上传报告" align="left">
          <el-upload action list-type="picture-card" :http-request='imageUpload' :on-success="beforeAvatarUpload" :class="{hide:hideUpload}"  :auto-upload="false" :limit="6" :on-change="(file, fileList) => {handleChange(file, fileList)}">
            <i slot="default" class="el-icon-plus" ></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="testReportDialog = false">取 消</el-button>
        <!-- <el-button type="primary" @click="testReportDialog = false" -->
        <el-button type="primary" @click="upTestReport"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import JSONbig from "json-bigint";

import editHealth from "./edit";
import watch from "./watch";
import edits from "./edit";
import axios from "axios";
import { get, post } from "../../../request/http";
import {httpsUrl} from "../../../request/api"
export default {
  components: {
    editHealth,
    watch,
    edits,
  },
  data() {
    return {
      // 上传检测报告
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      //
      gainBlockShow: true,
      // 发送消息
      send_msg_value: "",
      // 随访内容
      follow_text: "",
      warnText: "",
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
          id: "11",
          label: "服药提醒",
        },
      ],
      options: [
        {
          value: "0",
          label: "今天",
        },
        {
          value: "3",
          label: "3天后",
        },
        {
          value: "5",
          label: "5天后",
        },
        {
          value: "7",
          label: "7天后",
        },
        {
          value: "10",
          label: "10天后",
        },
        {
          value: "30",
          label: "30天后",
        },
      ],
      // 新增标签---优先级
      label_rank: [
        {
          value: "选项1",
          label: "1级",
        },
        {
          value: "选项2",
          label: "2级",
        },
        {
          value: "选项3",
          label: "3级",
        },
      ],
      label_text: "",
      // 服药提醒
      medicineWarnTime: "",
      // 设置随访--常用语（放一个数组里面，添加就添加到数组里面）
      phrase_text: "",
      phraseLists: ["糖尿病"],
      // 编辑传过去的id
      editblock: null,
      selectMsg: "",
      value: "",
      priority: null,

      // 自定义常用语
      oftenSpeak: [],
      oftenSpeakVisible: true,
      oftenSpeakValue: "",
      customText: "",
      // 设置随访
      visitedData: null,
      visitedTime: "",

      visitedLabelId: "",
      // 上传图片
      hideUpload: false,
    };
  },
  created() {
    
    this.$emit("defaultBlock", this.ischecked);
    // 查询--自定义常用语
    get(
      `/api/userfulExpress/list/${localStorage.getItem("userId")}?expressType=1`
    ).then((res) => {
      for (let item of res.data.data) {
        this.oftenSpeak.push(item.content);
      }
    });
  },
  methods: {
    handleChange(file,fileList){
      
      if(fileList.length >= 6){
        this.hideUpload = fileList.length>=6;
      }
      console.log(file,fileList,'上传的图片')
      for(let item of fileList){
        console.log(item.url)
      }
        let formData = new FormData();
        formData.append('token', 'hwDcg1uTxoMZrgH541WI_Q0gq5VJWndrkvUm7Wb0:VT3ZWZrlI62f0GII9ZDFQeT0QN8=:eyJzY29wZSI6ImtlbXVfamlhbmdrYW5nX3NoYW5nY2hlbmciLCJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIixcImhhc2hcIjpcIiQoZXRhZylcIixcImJ1Y2tldFwiOlwiJChidWNrZXQpXCIsXCJmc2l6ZVwiOiQoZnNpemUpfSIsImRlYWRsaW5lIjoxNjQyNTYwMDU4fQ==');
        formData.append('key', 'hwDcg1uTxoMZrgH541WI_Q0gq5VJWndrkvUm7Wb0');
        formData.append('file', file.url);
          console.log(formData,'formData')
        let config = {
            'Content-Type': 'multipart/form-data',
        };
        const axiosInstance = axios.create({withCredentials: false});
        axiosInstance.post(httpsUrl.qnyUrl, formData, config)
				.then(res => {
					console.log(res, "上传图片");
					// this.Addbusiness.coverUrl =
					// 	httpsUrl.sydUrl + `${res.data.key}`;
					// this.fullscreenLoading = false;
					// this.$message({
					// 	type: "success",
					// 	message: "上传图片成功!"
					// });
				})
				.catch(err => {
					console.log("err", err);
				});
      
    },
    imageUpload(f){
      console.log(f)
    },
    beforeAvatarUpload(f){
      console.log('8888')
      console.log(f,'sss')
    },
    upTestReport(){
      // this.testReportDialog = false
      // post(`/health/healthReport/`,{
      //   testReportUrl:,
      //   title:'',
      //   userId:localStorage.getItem('userId')
      // }).then(res => {

      // })
    },
    // 上传检测报告
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    startTime(data) {
      let a = data;
      console.log(a);
      // result = eval('(' +  a + ')') // jsonstr是json字符串
    },
    // 测试多选框
    showBlock(val) {
      this.$emit("showBlockList", val);
    },
    tool_btn_enter(index) {
      this.btn_index = index;
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
    // 发送消息
    saveSendMsg() {
      console.log(this.send_msg_value, "发送消息");
      this.$confirm("是否要发送消息？")
        .then((_) => {
          post("/health/healthMessage/web", {
            userId: 11111,
            producerId: 11111,
            message: this.send_msg_value,
          })
            .then((res) => {
              if (res.status === 200) this.sendMsgDialog = false;
              this.send_msg_value = "";
            })
            .catch((err) => {
              console.log("发送消息失败");
            });
        })
        .catch((_) => {});
    },
    // 设置随访按钮
    async addOftenSpeak() {
      let oftenSpeakValue = this.oftenSpeakValue;
      if (oftenSpeakValue) {
        if (this.oftenSpeak.indexOf(oftenSpeakValue) == -1) {
          this.oftenSpeak.push(oftenSpeakValue);
          // 添加常用语
          let res = await post("/api/userfulExpress", {
            content: oftenSpeakValue,
            expressType: 1,
            userId: localStorage.getItem("userId"),
          });
          try {
            console.log(res.data.code);
          } catch (error) {
            console.log(error);
          }
        } else {
          this.$message({
            message: "已存在",
            type: "warning",
          });
          // return this.oftenSpeak
        }
      }
      this.oftenSpeakVisible = false;
      this.oftenSpeakValue = "";
    },
    // 设置随访--确定按钮
    visitedDialog() {
      this.setFollowDialog = false;
      this.visitedTime = Number(this.visitedTime);
      if (this.visitedTime !== "" && this.customText !== "") {
        let visitedData = JSON.parse(localStorage.getItem("visitedData"));
        let visitedLabelId = localStorage.getItem("visitedLabelId");
        let userId = localStorage.getItem("userId");

        post(`/health/followUp/${this.visitedTime}`, {
          name: visitedData.name,
          sex: visitedData.sex == "女" ? "0" : "1",
          age: Number(visitedData.age),
          phone: visitedData.phoneNumber,
          userId: userId,
          tagIds: visitedLabelId,
          followUpContent: this.customText,
        })
          .then((res) => {
            // console.log(res,'设置随访')
            if (res.data.code !== 0) {
              this.setFollowDialog = true;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$message({
          message: "不能为空",
          type: "warning",
        });
      }
    },
    showInput() {
      this.oftenSpeakVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleClosed(tag) {
      this.oftenSpeak.splice(this.oftenSpeak.indexOf(tag), 1);
    },
    // 点击自定义语句--push
    doublePush(tag) {
      this.customText += tag + ",";
    },
    // 新增标签
    addLabelBtn() {
      this.priority = "";
      this.label_text = "";
      if (this.priority === "" || this.label_text === "") {
        this.$message({
          message: "请填写完整!",
          type: "warning",
        });
      }
      this.addLabelDialog = false;
      post("/health/tag", {
        name: this.label_text,
        priority: this.priority[0],
        userId: localStorage.getItem("userId"),
      })
        .then((res) => {
          if (res.data.code === 0) {
            console.log(res, "新增标签");
          }
        })
        .catch((err) => {
          console.log("新增标签err:::");
        });
    },
    // 设置服药提醒
    setwarnDialog() {
      this.warnDialog = false
      const jsonStr = '{ "doctorId": 1358595763215368192 }';
      this.medicineWarnTime = this.medicineWarnTime + ":" + "01";
      console.log(this.medicineWarnTime);
      post(`/health/healthDrugRemind`, {
        time: this.medicineWarnTime,
        content: this.warnText,
        status: 1,
        userId: localStorage.getItem("userId"),
        doctorId: JSONbig.parse(jsonStr).doctorId.toString(),
      }).then((res) => {
        if(res.data.code == 0){
            this.medicineWarnTime = ""
            this.warnText = ""
          console.log(res, "添加服药提醒");
        }
      });
    },
    // dialog取消
    cancelDialog() {
      // 新增标签
      this.priority = "";
      this.label_text = "";
      this.addLabelDialog = false;
      // 设置随访
      this.visitedTime = "";
      this.customText = "";
      this.setFollowDialog = false;
      // 服药提醒
      this.medicineWarnTime = ""
      this.warnText = ""
      this.warnDialog = false
    },
  },
};
</script>

<style lang="less" scoped>
.healthBar {
  .patient_tool_bar {
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
    // .between {
    //   padding: 0 2%;
    // }
    .el-date-editor.el-input {
      width: 140px;
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

// 设置dialog弹窗的样式---圆角
/deep/.el-dialog {
  box-shadow: 0px 0px 50px 0px rgba(155, 209, 255, 0.4);
  border-radius: 20px;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

// 设置上传图片的容器大小
/deep/ .el-upload-list__item {
  width: 126px;
  height: 126px;
}
/deep/ .el-upload--picture-card {
  width: 126px;
  height: 126px;
}

</style>
<style>
.hide .el-upload--picture-card {
    display: none;
}
</style>