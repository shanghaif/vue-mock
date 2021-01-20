<template>
  <div class="uploadLecture">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="标题" required>
        <el-input
          v-model="form.name"
          placeholder="请输入讲座标题"
          style="width: 60%"
        ></el-input>
      </el-form-item>
      <el-form-item label="简介" required>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.textarea2"
          show-word-limit="true"
          resize="none"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select
          v-model="form.region"
          placeholder="全部讲座"
          style="width: 60%"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签" required>
        <el-input
          v-model="form.name"
          placeholder="请输入讲座标签，多个标签“号隔开"
          style="width: 60%"
        ></el-input>
      </el-form-item>
      <el-form-item label="所属系列" required>
        <el-input
          v-model="form.name"
          placeholder="请输入讲座所属的系列"
          style="width: 60%"
        ></el-input>
      </el-form-item>
      <el-form-item label="上传封面图" required>
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
      </el-form-item>
      <el-form-item label="上传视频" required>
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
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="ask_save"
          >保存</el-button
        >
        <el-button class="ask_cancel">取消</el-button>
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
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        textarea2: "",
      },
      // 封面图
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      // 上传视频
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
.uploadLecture {
  height: calc(100% - 2%);
  padding: 1% 10% 0% 3%;
  background: white;
}
/deep/.el-textarea__inner {
  width: 60%;
  height: 120px;
}
/deep/ .el-button {
  border-radius: 8px;
  border: none;
}
/deep/.el-input__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
}

// input获取焦点出现边框
/deep/.el-input__inner:focus,/deep/.el-textarea__inner:focus  {
  border: 1px solid rgba(102, 114, 251, 1) !important;
  background: rgba(102, 114, 251, 0.05) !important;
}
/deep/.el-textarea__inner {
  border: none !important;
  background: rgba(102, 114, 251, 0.05) !important;
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