<template>
  <div class="medicineWarn">
    <!-- 服药提醒 -->
    <div class="user_block">
      <div class="user_msg_bar">
        <img src="@/assets/images/patientList/userLabel.png" alt="" />
        <p>服药提醒</p>
      </div>
      <div class="medicine_warn_container clearfix">
        <div class="warn_list">
          <div class="warn_inner_bar" v-for="(item,index) of warnData" :key="index">
            <div class="switch">
                <el-switch
                v-model="item.status"
                active-color="#6672FB"
                inactive-color="#9999CC"
                @change="warnStatusChange(item,index)"
                >
                </el-switch>
            </div>
            <div class="switch_text">
                <p>
                    <span>{{item.time}}</span>
                    {{item.content}}{{item.status}}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, post } from "@/request/http";
import { patch, put } from '../../../../request/http';
export default {
  data() {
    return { 
      value: true,
      warnData:[]
    
    };
  },
  created() {
    this.getWarnList()
  },
  methods: {
    async getWarnList(){
      let res = await get(`/health/healthDrugRemind/web/${localStorage.getItem('userId')}?doctorId=1358595763215368192`)
      try {
        if(res.data.code == 0) {
          this.warnData = res.data.data
          this.warnData.map(_=> { _.status = !!_.status; return _})
        }
      } catch (error) {
        console.log(error)
      }
    },
    warnStatusChange(val,index){
        console.log( val);
       this.$confirm('确定更改状态吗？', '请谨慎操作', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
          patch(`/health/healthDrugRemind/${val.id}`).then((result)=>{
            console.log(result)
              if(result.data.code == 0){
                  this.$message({
                      type: 'success',
                      message: '状态修改成功!'
                  });
              }else{
                  this.$message({
                      type: 'warning',
                      message: '状态修改失败!'
                  });
              }
          }).catch((error)=>{
              console.log(error)
          })
         
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消修改'
            });          
      });
    }
  },
};
</script>

<style lang="less" scoped>
.medicineWarn {
  .medicine_warn_container {
      padding: 3%;
    .warn_list {
        .warn_inner_bar{
            width: 50%;
            float: left;
            display: flex;
            padding: 2% 0;
            border-bottom: 1px solid rgba(204, 204, 255, .2);
            .switch{
                width: 10%;
            }
            .switch_text{
                flex: 1;
                p{
                    color: rgba(84, 84, 129, 1);
                    font-size: 18px;
                    span{
                        color: rgba(28, 28, 79, 1);
                        margin-right: 2%;
                    }
                }
            }
        }
    }
  }
//   /deep/ .el-switch__core{
//       width: 96px !important;
//       height: 44px;
      
// border-radius: 20px;
//   }
//   /deep/ .el-switch__core:after{
//       width: 28px;
// height: 28px;
// background: #6672FB;
// border-radius: 50%;
//   }
}
</style>