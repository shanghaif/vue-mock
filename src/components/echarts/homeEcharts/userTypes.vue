
<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'userTypesId'"
      :style="{  height: '380px' }"
      :option="option"
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
  props:['userTypesDatas'],
  watch:{
    userTypesDatas:{
      handler(newval,oldval){
        if (newval) {
          this.echarts();
        }
        return newval;
      },
       deep: true,
    }
  },
  data() {
    return {
      option: {
        title: {
          text: "用户分类",
          padding:[20,0,0,20],
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
           y:'center',
           right:100,
          orient: "vertical",
          data: [],
        },
         series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            center: ["30%", "50%"],
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
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
          },
        ],
      },
      chartOption: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0",
    };
  },
  mounted() {
    this.echarts();
    document.getElementById("userTypesId").style.width = "32" + "%";
    window.addEventListener("resize", function () {
      myChartm.resize();
    });
  },
  methods: {
    echarts() {
      let that = this;
      that.myChartm = that.$echarts.init(
        document.getElementById("userTypesId")
      );
      that.myChartm.setOption(that.option);

      let echartsETCB = JSON.parse(JSON.stringify(this.userTypesDatas));
      console.log(echartsETCB, "患者咨询的数据:::");
      let tuliData = [];
      // for (let item of echartsETCB[0].data) {
      //   var data = {
      //     name: item.name,
      //     value: item.value,
      //   };
      //   tuliData.push(data);
      //   console.log(tuliData,'图例数据：：：：：')
      // }
      let objData = array2obj(echartsETCB[0].data, "name");
      function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
          resObj[array[i][key]] = array[i];
        }
        return resObj;
      }
      this.myChartm.setOption({
        title: {
          text:echartsETCB[0].name, //可以写死 也可以用后台传回来的数据 title
          left: "left",
        },
        legend: {
          data: echartsETCB[0].data,
        },
        series: [
          {
            data: echartsETCB[0].data,
          },
        ],
      });
    },
  },
};
</script>

<style lang="less" scoped>
#userTypesId {
  width: 32% !important;
  float: left;
  margin-left: 2%;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
