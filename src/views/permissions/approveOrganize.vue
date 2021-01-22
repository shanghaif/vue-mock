<template>
  <div class="approveOrgnization">
    <el-form ref="form" :model="form" label-width="10%">
      <el-form-item label="机构名称" required>
        <el-input v-model="form.name" placeholder="请输入机构名称" style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="机构地址" required>
        <el-input v-model="form.name" placeholder="请输入机构地址" style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="机构负责人" required>
        <el-input v-model="form.name" placeholder="请输入机构负责人" style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="机构负责人联系方式" required>
        <el-input v-model="form.name" placeholder="请输入机构负责人联系方式" style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="机构资质" class="qualification" required>
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="dialogImageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- <img src="@/assets/images/login/qr_code.png" alt=""> -->
        </el-upload>
        <p
          >如需开通在线视频咨询服务，需上传医疗机构执业
          许可证扫描件，支持.jpg.jpeg.bmp.gif格式照片， 大小不超过2M
        </p>
      </el-form-item>
      <el-form-item label="授权运营书" class="qualification" required>
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="dialogImageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- <img src="@/assets/images/login/qr_code.png" alt=""> -->
        </el-upload>
        <p
          >请下载<span>授权运营书</span>按要求填写表格后，上传加盖公章的 扫描件支持.jpg.jpeg.bmp.gif格式照片，大小不超过2M 
        </p>
      </el-form-item>
      <el-form-item label="运营者身份证姓名" required>
        <el-input v-model="form.name" placeholder="请输入运营者身份证姓名" style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="运营者身份证号码" required>
        <el-input v-model="form.name" placeholder="请输入运营者身份证号码" style="width:60%"></el-input>
      </el-form-item>
      <el-form-item label="运营者证件照片" class="qualification" required>
        <el-upload
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="dialogImageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- <img src="@/assets/images/login/qr_code.png" alt=""> -->
        </el-upload>
        <p
          >身份证上的所有信息清晰可见，必须能看清证件号。
照片需免冠，建议未化妆，手持证件的五官清晰可见。
照片内容真实有效，不得做任何修改。
支持.jpg.jpeg.bmp.gif格式照片，大小不超过2M

        </p>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">申请</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
.approveOrgnization {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
  .qualification {
    p {
      display: inline-block;
      width: 30%;
      line-height: 22px;
      font-size: 12px;
      margin-left: 2%;
      color: #5c5c85;
      span{
        cursor: pointer;
        color: rgba(102, 114, 251, 1);
      }
    }
    /deep/.el-form-item__content{
      line-height: 0;
    }
  }
}

.avatar-uploader {
  display: inline-block;
  margin-top: 10px;
}

.avatar-uploader img {
  width: 100px;
  height: 100px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
}
</style>