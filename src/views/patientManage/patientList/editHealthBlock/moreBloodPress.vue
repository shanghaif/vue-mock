<template>
  <div class="bloodPress">
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>血压数据</p>
        <div class="detail_more_btn">
          <el-button type="primary" round>更多资料</el-button>
        </div>
      </div>
      <div class="blood_press_container clearfix">
        <div class="select_container">
          <el-select
            v-model="hisToryValue"
            placeholder="请选择"
            @change="hisTorySelect(hisToryValue)"
          >
            <el-option
              v-for="item in historyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="average">
          <span>平均值</span>
          <p>{{ highAvg }} / {{ lowAvg }}mmHg</p>
        </div>
        <!-- 图表 -->
        <MyEcharts
          :id="'echartsM'"
          :style="{ width: '100%', height: '300px' }"
          :option="option"
        >
        </MyEcharts>
        <el-table :data="tableData" style="width: 100%; margin-top: 2%">
          <el-table-column
            prop="createTime"
            label="检测时间"
            width="220"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="high"
            label="高压(收缩压)"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="low" label="抵压(舒张压)" align="center">
          </el-table-column>
          <el-table-column
            prop="heartRate"
            label="心率"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="difference" label="压差" align="center">
          </el-table-column>
        </el-table>
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
</template>

<script>
import { get } from "@/request/http";
import MyEcharts from "@/components/echarts/index";
export default {
  components: {
    MyEcharts,
  },
  data() {
    return {
      tableData: [],
      selectVal: [],
      highAvg: null,
      lowAvg: null,
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
          value: "0",
          label: "全部数据",
        },
      ],
      hisToryValue: "0",
      option: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["高压", "低压"],
          top: 20,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            // saveAsImage: {},
          },
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
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
        series: [],
      },
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
    });
    document.getElementById("echartsM").style.width = "100" + "%";
  },
  created() {
    this.getLists();
  },
  methods: {
    async getLists() {
      let res = await get(
        `/api/bloodPressure/ChartListForWeb/11111?days=30&pageNum=${this.currentPage}&pageSize=${this.pageSize}`
      );
      if (res.data.code == 0) {
        this.tableData = res.data.data;
        this.count = Number(res.data.count);
      }
    },
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(document.getElementById("echartsM"));
      that.myChartm.setOption(that.option);
      /**
       * highPressData  高血压的图表数据
       * lowPressData   低血压的图表数据
       */
      let highPressData = null;
      let lowPressData = null;
      get(
        `/api/bloodPressure/ChartForWeb/11111?days=${this.hisToryValue}`
      ).then((res) => {
        console.log(res, "血压");
        this.highAvg = res.data.data.highAvg;
        this.lowAvg = res.data.data.lowAvg;
        for (let item of res.data.list) {
          highPressData = item.high.split(";").map(Number);
          lowPressData = item.low.split(";").map(Number);
        }
        this.myChartm.setOption({
          series: [
            {
              name: "低压",
              type: "line",
              stack: "总量",
              data: lowPressData,
              itemStyle: {
                normal: {
                  color: "#FF8333", //折线点的颜色
                  lineStyle: {
                    color: "#FF8333", //折线的颜色
                  },
                },
              },
            },
            {
              name: "高压",
              type: "line",
              stack: "总量",
              data: highPressData,
              itemStyle: {
                normal: {
                  color: "#6672FB",
                  lineStyle: {
                    color: "#6672FB",
                  },
                },
              },
            },
          ],
        });
      });
    },
    hisTorySelect(val) {
      this.echarts();
    },
    handelCurrentChange(val) {
      this.currentPage = val;
      this.getLists();
    },
  },
};
</script>

<style lang="less" scoped>
.bloodPress {
  /deep/ .el-select {
    margin: 2% 0 0 3%;
  }
  .average {
    padding: 3% 3% 0 3%;
    span {
      font-size: 16px;
      color: rgba(153, 153, 204, 1);
    }
    p {
      font-size: 36px;
      color: rgba(18, 20, 50, 1);
    }
  }
}
</style>