
<template>
  <!-- 业绩表现 -->
  <div class="index">
    <MyEcharts
      :id="'userTypesId'"
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
    document.getElementById('userTypesId').style.width = '32'+'%';
    let shopCharts = this.$echarts.init(
    document.getElementById("userTypesId")
);

shopCharts.resize();//直接加这句即可

// shopCharts.setOption({...})
  },
  methods: {
    initCharts() {
      const _dataList = this.dataList;
      this.chartOption = {
         title: {
        text: '某站点用户访问来源',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['糖尿病', '高血压', '心脏病', '肿瘤']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '糖尿病'},
                {value: 310, name: '高血压'},
                {value: 234, name: '心脏病'},
                {value: 135, name: '肿瘤'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle : {
                normal : {
                    'borderWidth':2,
                    'borderColor':'#fff',
                    label : {
                        show : false   //隐藏标示文字
                    },
                    labelLine : {
                        show : false   //隐藏标示线
                    }
                }
            }
        }
    ]
      };
    },
  },
};
</script>

<style lang="less" scoped>
#userTypesId{
  float: left;
  margin-left: 2%;
  background: #ffffff;
  box-shadow: 0px 0px 60px 0px rgba(98, 146, 213, 0.16);
  border-radius: 18px;
   margin-bottom: 20px;
   padding: 10px 0;
}
</style>
