<template>
  <div class="askRecord">
    <div class="ask_tool_bar">
      <div class="ask_tool_date">
        <el-select
          v-model="visitedNum"
          clearable
          placeholder="请选择"
          @change="visitedTimeChange"
        >
          <el-option
            v-for="item in visitedNumoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="ask_tool_search">
        <el-input placeholder="根据姓名或手机号搜索" v-model="filterValue" @blur="filterSearch">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
          <template slot="append" icon="el-icon-search" >搜索</template>
        </el-input>
      </div>
    </div>
    <!-- 展示表格 -->
    <div class="ask_table">
      <el-table :data="visitedTableData" border style="width: 100%">
        <el-table-column
          prop="followUpDate"
          label="随访日期"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="80" align="center">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="80" align="center">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="80" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="手机号" width="120" align="center">
        </el-table-column>
        <el-table-column prop="tagList" label="用户标签" align="center">
        </el-table-column>
        <el-table-column prop="followUpContent" label="随访内容" align="center">
        </el-table-column>
        <el-table-column prop="address" label="操作" width="80" align="center">
          <template slot-scope="scope">
            <el-button size="text" @click="visitedEdit(scope.$index, scope.row)"
              >随访</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="ask_pagination">
      <el-pagination
        background
        @current-change="handelCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="count"
        align="center"
      >
      </el-pagination>
    </div>
    <!-- 查看-对话框 -->
    <el-dialog title="随访" :visible.sync="visitDialogVisible" width="30%" center>
      <div class="visited">
        <el-form
          label-width="100px"
        >
          <el-form-item label="随访状态" prop="name">
            <el-select
              v-model="visitedRow.state"
              placeholder="请选择活动区域"
              @change="visitedStatusChange"
            >
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="本次随访内容" prop="region">
            <p>
              {{ visitedRow.followUpContent }}
            </p>
          </el-form-item>
          <el-form-item label="下次随访时间" prop="name">
            <el-select v-model="nextVisitedTime" placeholder="请选择活动区域">
              <el-option
                v-for="item in nextVisitedOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="下次随访内容" prop="name">
            <el-input
              type="textarea"
              resize="none"
              placeholder="请输入下次随访内容 / 自定义内容"
              v-model="customText"
              :rows="4"
            ></el-input>
          </el-form-item>
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
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+自定义常用语</el-button
            >
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visitDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="visitedDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { get, post, put } from "../../request/http";
export default {
  data() {
    return {
      filterValue: "",
      visitDialogVisible: false,
      visitedNumoptions: [
        {
          value: "0",
          label: "今日待随访",
        },
        {
          value: "2",
          label: "3天内待随访",
        },
      ],
      statusOptions: [
        {
          value: "1",
          label: "已随访",
        },
        {
          value: "0",
          label: "未随访",
        },
      ],
      nextVisitedTime: "",
      nextVisitedOptions: [
        {
          value: "3",
          label: "3天后",
        },
        {
          value: "7",
          label: "7天后",
        },
        {
          value: "14",
          label: "14天后",
        },
        {
          value: "30",
          label: "30天后",
        },
        {
          value: "90",
          label: "90天后",
        },
        {
          value: "180",
          label: "180天后",
        },
      ],
      visitedTableData: [],

      visitedNum: "今日待随访",
      statusChangeed: "",
      visitedRow: {},
      // 自定义常用语
      oftenSpeak: [],
      oftenSpeakVisible: true,
      oftenSpeakValue: "",
      customText: "",

      // 分页
      count: 0,
      pageSize: 10,
      currentPage: 1,
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  created() {
    this.visitedTimeChange();
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
    // 改变随访时间
    visitedTimeChange(data) {
      this.currentPage = 1
      this.getVisitedList(data);
    },
    filterSearch(){
      this.getVisitedList('2')
    },
    //验证input是否为数字
    isNumber(value) {         
        var patrn = /^(-)?\d+(\.\d+)?$/;
        if (patrn.exec(value) == null || value == "") {
            return false
        } else {
            return true
        }
    },
    // 获取带随访列表页
    async getVisitedList(num='0') {
      let res = await post(`/health/followUp/list?pageNum=${this.currentPage}&pageSize=${this.pageSize}`, {
        dayNum: num,
        name: this.isNumber(this.filterValue) === false ? this.filterValue : "",
        phone: this.isNumber(this.filterValue) === true ? this.filterValue : "",
      });
      try {
        if (res.data.code === 0) {
          // console.log(res, "随访列表");
          this.count = Number(res.data.count);
          this.visitedTableData = res.data.data;

          // 将用户标签---转换成字符串
          let labelName = [];
          for (let item of this.visitedTableData) {
            for (let labelList of item.tagList) {
              labelName.push(labelList.name);
              let labelContent = Array.from(new Set(labelName)).join(",");
              item.tagList = labelContent;
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 点击随访
    visitedEdit(index, row) {
      // console.log(index, row, "随访");
      this.visitDialogVisible = true;
      this.visitedRow = row;
    },
    // 自定义常用语
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
    showInput() {
      this.oftenSpeakVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleClosed(tag) {
      this.oftenSpeak.splice(this.oftenSpeak.indexOf(tag), 1);
    },
    doublePush(tag) {
      this.customText += tag + ",";
    },
    visitedStatusChange(data) {
      this.statusChangeed = data;
    },
    // 随访的确定按钮
    visitedDialog() {
      this.visitDialogVisible = false
      this.nextVisitedTime = ''
      this.customText = ''

      if (this.statusChangeed !== "") {
        this.setVisitedStatus();
      }
      if (this.nextVisitedTime !== "") {
        this.AddNextVisit();
      }
      console.log(this.visitedRow.state, this.nextVisitedTime, this.customText);
    },
    async setVisitedStatus() {
      let res = await put(`/health/followUp/${this.visitedRow.id}`, {
        state: this.visitedRow.state,
      })
      try {
        console.log(res,'改变随访状态');
      } catch (error) {
        console.log(error)
      } 
    },
    async AddNextVisit() {
      let res = await post(`/health/followUp/${this.nextVisitedTime}`, {
        name: this.visitedRow.name,
        sex: this.visitedRow.sex,
        age: this.visitedRow.age,
        phone: this.visitedRow.phoneNumber,
        userId: this.visitedRow.userId,
        tagIds: this.visitedRow.tagIds,
        followUpContent: this.customText,
      })
      try {
        console.log(res,'添加下次随访');
      } catch (error) {
        console.log(error)
      } 
    },
    // 分页
    handelCurrentChange(val) {
      this.currentPage = val;
      this.getVisitedList(this.visitedNum)
    },
  },
};
</script>

<style lang="less" scoped>
.askRecord {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .ask_tool_bar {
    padding: 1% 0;
    .ask_tool_date {
      float: left;
      margin-right: 30px;
      span {
        padding-right: 14px;
      }
    }
    .ask_tool_search {
      display: inline-block;
      /deep/ .el-input-group {
        border: 1px solid #6672fb;
        background: rgba(102, 114, 251, 0.05);
        border-radius: 5px;
      }
      /deep/ .el-input-group__prepend {
        background: #d3dff7;
        opacity: 0.3;
        border-radius: 8px 0px 0px 8px;
      }
      /deep/.el-input-group__append {
        border: none;
        background: #6672fb;
        color: white;
        cursor: pointer;
      }
      /deep/.el-input__inner {
        outline: none;
        border: none  !important;
      }
    }
  }
  .ask_table {
    .el-table__body-wrapper {
      height: auto !important;
    }
    /deep/.el-button--text {
      color: rgba(102, 114, 251, 1) !important;
    }
    span {
      color: #6672fb;
      padding: 0 2px;
    }
  }
  .ask_pagination {
    padding: 2% 0;
  }
}
.visited {
  /deep/.el-textarea__inner {
    border: none !important;
    background: rgba(102, 114, 251, 0.05) !important;
  }
  /deep/.el-input-group > .el-input__inner {
    border-radius: 26px 0 0 26px !important;
  }
  /deep/.el-input-group__append {
    border: none;
    border-radius: 0 26px 26px 0;
    cursor: pointer;
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
</style>                                                                                                                       