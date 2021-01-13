
<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'bloodPressId'"
      :style="{ width: '100%', height: '380px' }"
      :option="chartOption"
    >
    </MyEcharts>
  </div>
</template>

<script>
import MyEcharts from "@/components/echarts/index"; //echarts
// import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  components: {
    MyEcharts,
  },
  data() {
    return {
      dataList: [
        { value: 335, name: "今日资讯" },
        { value: 310, name: "历史咨询" },
      ],
      chartOption: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    this.initCharts();
    document.getElementById("bloodPressId").style.width = "30" + "%";
    let shopCharts = this.$echarts.init(
      document.getElementById("bloodPressId")
    );

    shopCharts.resize(); //直接加这句即可

    // shopCharts.setOption({...})
  },
  methods: {
    initCharts() {
      const _dataList = this.dataList;
      this.chartOption = {
        title: {
          text: "患者咨询",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          width: 100,
          orient: "vertical",
          left: 100,
          data: this.dataList.name,
          formatter: function (name) {
            let _index = 0;
            //console.log(_dataList)
            _dataList.forEach((item, i) => {
              //console.log(item.value,name)
              if (item.name == name) {
                _index = i;
              }
            });
            let arr;
            if (name == "应交人民币") {
              arr = ["{" + name + "}", "{" + _dataList[_index].value + "}"];
              console.log(arr);
            } else {
              arr = ["{" + name + "}", "{" + _dataList[_index].value + "}"];
            }
            //console.log(_index)
            //console.log(_data1[_index].value)
            // 注意，换行仍是使用 '\n'。
            return arr.join("");
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: "#fff",
                label: {
                  show: false, //隐藏标示文字
                },
                labelLine: {
                  show: false, //隐藏标示线
                },
              },
            },
            data: [
              { value: 335, name: "今日资讯" },
              { value: 310, name: "历史咨询" },
            ],
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped>
#bloodPressId {
  float: left;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
  padding: 38px 0 0 1%;
  margin-bottom: 20px;
}
</style>
