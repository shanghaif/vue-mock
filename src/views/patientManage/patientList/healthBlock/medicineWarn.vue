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
          <div class="warn_inner_bar">
            <div class="switch">
                <el-switch
                v-model="value"
                active-color="#6672FB"
                inactive-color="#9999CC"
                >
                </el-switch>
            </div>
            <div class="switch_text">
                <p>
                    <span>6:00</span>
                    二甲双簧1片，维生素1片，营养蛋白1片
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
export default {
  data() {
    return { value: true };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.medicineWarn {
  .medicine_warn_container {
      padding: 3%;
    .warn_list {
        .warn_inner_bar{
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