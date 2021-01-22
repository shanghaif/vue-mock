<template>
  <div class="addPerson">
    <el-form ref="form" :model="form" label-width="12%">
      <el-form-item label="姓名" required>
        <el-input
          v-model="form.name"
          placeholder="请输入姓名"
          style="width: 60%"
        ></el-input>
      </el-form-item>
      <el-form-item label="机构地址" required>
        <el-input
          v-model="form.name"
          placeholder="请输入手机号"
          style="width: 40%"
        ></el-input>
        <el-button class="gainCode" plain>获取验证码</el-button>
        <el-button class="gainCode" plain><span>60</span>重新获取</el-button>
      </el-form-item>
      <el-form-item label="短信验证码" required>
        <el-input
          v-model="form.name"
          placeholder="请输入短信验证码"
          style="width: 60%"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色" required>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别" required>
        <el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="出生日期" required>
        <el-date-picker
          v-model="birthDate"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="头像" class="qualification" required>
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
        <el-form-item label="所在医院" required>
        <el-input
          v-model="form.name"
          placeholder="请输入所在医院"
          style="width: 60%"
        ></el-input>
      </el-form-item>
       <el-form-item label="所在科室" required>
        <el-input
          v-model="form.name"
          placeholder="请输入所在科室"
          style="width: 60%"
        ></el-input>
      </el-form-item>
      <el-form-item label="职称" required>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in positionName"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
 <el-form-item label="擅长" required>
        <el-input
          v-model="form.name"
          placeholder="请输入个人擅长"
          style="width: 60%"
        ></el-input>
      </el-form-item>
       <el-form-item label="个人简介" required>
        <el-input
        type="textarea"
          v-model="form.name"
          :rows="3"
          placeholder="请输入个人简介"
          style="width: 60%"
          resize="none"
        ></el-input>
      </el-form-item>



      <el-form-item label="医护资质" class="qualification" required>
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
        <p>
          如需开通在线视频咨询服务，需上传医疗机构执业
          许可证扫描件，支持.jpg.jpeg.bmp.gif格式照片， 大小不超过2M
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
      options: [
        {
          value: "选项1",
          label: "医生",
        },
        {
          value: "选项2",
          label: "护士",
        },
        {
          value: "选项3",
          label: "护工",
        },
        {
          value: "选项4",
          label: "健康管理师",
        },
      ],
      positionName:[
{
          value: "选项1",
          label: "主治医生",
        },
        {
          value: "选项2",
          label: "副主任医生",
        }
      ],
      value: "",
      //   性别
      radio: "1",
      //   出生日期
      birthDate: "",
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
.addPerson {
    height: auto;
//   height: calc(100% - 2%);
  padding: 1% 10% 2% 3%;
  background: white;
  .gainCode {
    background: rgba(18, 20, 50, 0.02);
    margin-left: 2%;
  }
  .qualification {
    p {
      display: inline-block;
      width: 30%;
      line-height: 22px;
      font-size: 12px;
      margin-left: 2%;
      color: #5c5c85;
      span {
        cursor: pointer;
        color: rgba(102, 114, 251, 1);
      }
    }
    /deep/.el-form-item__content {
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