<template>
  <div>
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>血糖数据</p>
      </div>
      <div class="blood_sugar_container clearfix">
        <div class="select_container">
          <el-select
            v-model="historyValue"
            placeholder="请选择"
            @change="hisSelect(historyValue)"
          >
            <el-option
              v-for="item in historyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select
            v-model="stageValue"
            placeholder="请选择"
            @change="stageSelect(stageValue)"
          >
            <el-option
              v-for="item in stageOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="average">
          <span>平均值</span>
          <p>{{average}}mmol/L</p>
          </div>
        <MyEcharts
          :id="'exampleId'"
          :style="{ width: '100%', height: '380px' }"
          :option="option"
        >
        </MyEcharts>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="createTime" label="检测日期" width="180">
          </el-table-column>
          <el-table-column prop="dawnValue" label="凌晨" width="80">
          </el-table-column>
          <el-table-column prop="bBeforeValue" label="早餐前">
          </el-table-column>
          <el-table-column prop="bBehindValue" label="早餐后" width="80">
          </el-table-column>
          <el-table-column prop="lBeforeValue" label="午餐前">
          </el-table-column>
          <el-table-column prop="lBehindValue" label="午餐后" width="80">
          </el-table-column>
          <el-table-column prop="dBeforeValue" label="晚餐前">
          </el-table-column>
          <el-table-column prop="dBehindValue" label="晚餐后" width="80">
          </el-table-column>
          <el-table-column prop="sBeforeValue" label="睡前"> </el-table-column>
        </el-table>
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
      </div>
    </div>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index";
import { get, post } from "../../../../request/http";
export default {
  components: {
    MyEcharts,
  },
  data() {
    return {
      tableData: [],
      selectVal: [],
      historyValue: "",
      historyOptions: [
        {
          value: "30",
          label: "30天数据",
        },
        {
          value: "90",
          label: "90天数据",
        },
        {
          value: "180",
          label: "180天数据",
        },
        {
          value: "",
          label: "全部数据",
        },
      ],
      stageValue: "",
      stageOptions: [
        {
          value: "",
          label: "全部血糖",
        },
        {
          value: "1",
          label: "凌晨血糖",
        },
        {
          value: "2",
          label: "早餐前血糖",
        },
        {
          value: "3",
          label: "早餐后血糖",
        },
        {
          value: "4",
          label: "午餐前血糖",
        },
        {
          value: "5",
          label: "午餐后血糖",
        },
        {
          value: "6",
          label: "晚餐前血糖",
        },
        {
          value: "7",
          label: "晚餐后血糖",
        },
        {
          value: "8",
          label: "睡前",
        },
      ],
      fieldData: [],
      flagData: [],
      days: "",
      measureFlag: "",
      // 图表
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          show: false,
        },
        tooltip: {
          trigger: "axis", // axis   item   none三个值
        },
        dataZoom: [
          {
            show: true,
            type: "slider",
            height: 20,
            filterMode: "none",
            xAxisIndex: [0],
            startValue: -20,
            endValue: 140,
          },
          {
            show: true,
            type: "slider",
            filterMode: "none",
            yAxisIndex: [0],
            startValue: -20,
            endValue: 140,
            orient: "horizontal",
          },
        ],
        yAxis: {
          type: "value",
          axisLine: {
            // 隐藏y轴
            show: false,
          },
          axisTick: {
            // 隐藏y轴刻度线
            show: false,
          },
          axisLabel: {
            //隐藏Y轴的数值
            show: false,
          },
          splitLine: {
            // 自定义网格线样式
            lineStyle: {
              type: "solid",
              color: "rgba(204, 204, 255, 0.2)",
            },
          },
        },
        series: [
          {
            data: [],
            type: "line",
            symbol: "emptyCircle",
            symbolSize: 6,
          },
        ],
      },
      average:null,
      // 分页
      count: 0,
      pageSize: 10,
      currentPage: 1,
    };
  },
  mounted() {
    this.echarts();
    window.addEventListener("resize", function () {
      myChartm.resize();
      document.getElementById("exampleId").style.width = "100" + "%";
    });
  },
  created() {
    this.getLists();
  },
  methods: {
    async getLists() {
      let res = await post(
        "/api/dataGlucose/list/findGlucoseListByDayAndTime",
        {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          id: 11111,
        }
      );
      this.count = Number(res.data.count)
      this.average = res.data.avgGlucose
      /**
       * dawn  黎明
       * b_   开头是早餐前/后
       * l_   开头是午餐前/后
       * d_   开头是晚餐前/后
       * s_   开头是睡觉前
       */
      if (res.data.code == 0) {
        this.tableData = JSON.parse(JSON.stringify(res.data.data));
        for (let item of this.tableData) {
          this.fieldData = item.extendField.split(";");
          this.flagData = item.measureFlag.split(";");
          let dawn = this.flagData.indexOf("1");
          let b_Before = this.flagData.indexOf("2");
          let b_Behind = this.flagData.indexOf("3");
          let l_Before = this.flagData.indexOf("4");
          let l_Behind = this.flagData.indexOf("5");
          let d_Before = this.flagData.indexOf("6");
          let d_Behind = this.flagData.indexOf("7");
          let s_Before = this.flagData.indexOf("8");
          item.bBeforeValue = this.getValue(b_Before);
          item.bBehindValue = this.getValue(b_Behind);
          item.lBeforeValue = this.getValue(l_Before);
          item.lBehindValue = this.getValue(l_Behind);
          item.dBeforeValue = this.getValue(d_Before);
          item.dBehindValue = this.getValue(d_Behind);
          item.sBeforeValue = this.getValue(s_Before);
          item.dawnValue = this.getValue(dawn);
        }
      }
    },
    getValue(value) {
      return this.fieldData[value] == -1 ? " " : this.fieldData[value];
    },
    async changeData() {
      console.log(this.measureFlag);
      console.log(this.days);
      let res = await post(
        "/api/dataGlucose/list/findGlucoseListByDayAndTime",
        {
          days: this.days,
          measureFlag: this.measureFlag,
          id: 11111,
        }
      );
      console.log(res, "默认全部数据");
    },
    hisSelect(val) {
      this.days = val;
      this.echarts();
    },
    stageSelect(val) {
      this.measureFlag = val;
      this.echarts();
    },
    // 调取图表数据
    async echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("exampleId"));
      that.myChartm.setOption(that.option);

      let toSplitField = [];
      let toSplitFlag = [];
      let res = await post(
        "/api/dataGlucose/list/findGlucoseListByDayAndTime",
        {
          days: this.days,
          measureFlag: this.measureFlag,
          id: 11111,
        }
      );
      for (let item of res.data.data) {
        toSplitField += item.extendField + ";";
        let extendFieldData = toSplitField.split(";").map(Number);

        toSplitFlag += item.measureFlag + ";";
        let measureFlagData = toSplitFlag.split(";").map(Number);
        this.myChartm.setOption({
          xAxis: {
            data: measureFlagData,
          },
          series: [
            {
              data: extendFieldData,
            },
          ],
        });
      }
    },
     handelCurrentChange(val) {
      this.currentPage = val;
      this.getLists();
    },
  },
};
</script>

<style lang="less" scoped>
.blood_sugar_container {
  padding: 3%;
  .select_container {
    /deep/ .el-select {
      margin-right: 2%;
    }
  }
  .average{
    padding-top: 2%;
    span{
      font-size: 16px;
      color: rgba(153, 153, 204, 1);
    }
    p{
      font-size: 30px;
      color: rgba(18, 20, 50, 1);
    }
  }
}
</style>