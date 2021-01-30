<template>
  <div class="testReportTable">
    <el-table :data="testReportList" border style="width: 100%">
      <el-table-column prop="createTime" label="检测日期" width="180" align="center"> </el-table-column>
      <el-table-column prop="title" label="报告名称" width="180" align="center"> </el-table-column>
      <el-table-column prop="address" label="检测报告" align="center">
          <template slot-scope="scope">
                <el-image style="width: 60px; height: 60px" :src="scope.row.testReportUrl"></el-image>
            </template>
      </el-table-column>
    </el-table>
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
  props: ["editDataList"],
  data() {
    return {
        count:0,
        currentPage: 1,
      testReportList: [],
    };
  },
  created() {
    this.testReportList = this.editDataList;
    console.log(this.testReportList);
  },
  handleCurrentChange(val){

  }
};
</script>

<style lang="less">
.el-pagination{
    margin-top: 2%;
}
</style>