<template>
  <div class="moreHealthInfo">
    <div class="healthinfoList">
      <div class="infoBar" v-for="(item, index) in healthInfoData" :key="index">
        <div class="infoImg">
          <img :src="item.producerAvatar" alt="" />
        </div>
        <div class="infoText">
          <div class="innerInfoText">
            <div>
              {{ item.producerName }}<span>{{ item.createTime }}</span>
            </div>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
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
</template>

<script>
import { get, post } from "../../../../request/http";
export default {
  data() {
    return {
      count: 0,
      pageSize: 6,
      currentPage: 1,
      healthInfoData: null,
    };
  },
  created() {
    this.getHealthInfoList();
  },
  methods: {
    // 获取消息列表
    async getHealthInfoList() {
      let res = await get(
        `/health/healthMessage/userMessage/web/11111?pageNum=${this.currentPage}&pageSize=${this.pageSize}`
      );
      try {
        if (res.status === 200) {
          this.healthInfoData = res.data.data;
          this.count = Number(res.data.count)
        }
      } catch (error) {
        console.log("未接收到消息列表");
      }
    },
    // 改变当前分页
    handelCurrentChange(val) {
      this.currentPage = val
      this.getHealthInfoList()
    },
  },
};
</script>

<style lang="less" scoped>
.moreHealthInfo {
  .healthinfoList {
    padding: 3% 3% 0 3%;
    .infoBar {
      width: 100%;
      display: flex;
      border-bottom: 1px solid rgba(204, 204, 255, 0.2);
      .infoImg {
        width: 8%;
        height: 136px;
        img {
          width: 100%;
          border-radius: 50%;
          padding-top: 12%;
        }
      }
      .infoText {
        flex: 1;
        padding-left: 2%;
        .innerInfoText {
          position: relative;
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
        }
        div {
          color: rgba(28, 28, 79, 1);
          font-size: 20px;
          line-height: 30px;
          span {
            color: rgba(28, 28, 79, 0.6);
            font-size: 18px;
            margin-left: 2%;
          }
        }
        p {
          color: rgba(84, 84, 129, 1);
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
}
</style>