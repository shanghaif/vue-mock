<template>
  <div class="moreHealthInfo">
    <div class="healthinfoList">
      <div class="infoBar">
        <div class="infoImg">
          <img src="https://pic.shanyide.cn/kemu-eqnt1-1596597472096" alt="" />
        </div>
        <div class="infoText">
          <div class="innerInfoText">
            <div>系主任<span>2018-12-8</span></div>
            <p>请本周三到院复诊检查，携带身份证等证件</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="1000"
        align="center"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.moreHealthInfo {
    .healthinfoList{
        padding: 3% 3% 0 3%;
        .infoBar{
            width: 100%;
            display: flex;
            border-bottom: 1px solid rgba(204, 204, 255, 0.2);
            .infoImg{
                width: 8%;
                height: 136px;
                img{
                    width: 100%;
                    border-radius: 50%;
                    padding-top: 12%;
                }
            }
            .infoText{
                flex: 1;
                padding-left: 2%;
                .innerInfoText{
                    position: relative;
                    left: 0;
                    top: 50%;
                    transform: translate(0,-50%);
                }
                div{
                    color: rgba(28, 28, 79, 1);
                    font-size: 20px;
                    line-height: 30px;
                    span{
                        color: rgba(28, 28, 79, 0.6);
                        font-size: 18px;
                        margin-left: 2%;
                    }
                }
                p{
                    color: rgba(84, 84, 129, 1);
                    font-size: 18px;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>