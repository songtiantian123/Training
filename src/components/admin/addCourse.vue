<template>
  <div>
    <div class="course">
      <span style="float: left; margin-top: 10px; margin-left: 10px"
        >增加课程</span
      >
    </div>

    <div>
      <div style="margin: 20px"></div>
      <el-form :data="addlist" label-width="80px">
        <el-form-item label="课程名称:">
          <el-input v-model="addlist.name"></el-input>
        </el-form-item>
        <el-form-item label="收费模式:" prop="resource">
          <el-radio-group v-model="addlist.pricetype">
            <el-radio label="按课时收费"></el-radio>
            <el-radio label="按期收费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="单价:">
          <el-input v-model="addlist.price"></el-input>
        </el-form-item>
        <el-form-item label="上课模式:" prop="resource">
          <el-radio-group v-model="addlist.mode">
            <el-radio label="一对一"></el-radio>
            <el-radio label="集体班"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="cun">
      <el-button type="primary" class="primary" @click="loaddata"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addlist: {
        id: 0, // 0为添加 否则修改
        companyid: "",
        name: "", // 课程名称
        pricetype: "", // 收费模式
        price: "", // 单价
        mode: "", // 上课模式
      },
    };
  },
  // 存储的方法
  methods: {
    // 封装要添加的数据
    add() {
      this.addlist = {
        id: 0, // 0为添加 否则修改
        companyid: "",
        name: "", // 课程名称
        pricetype: "", // 收费模式
        price: "", // 单价
        mode: "", // 上课模式
      };
    },
    // 调用课程添加的接口
    loaddata() {
      let that = this;
      let data = JSON.stringify(this.addlist);
      that.$http.post(
        "api/courses/add",
        data,
        (success) => {
          console.log(success);
          that.add(); // 要添加的数据
          that.$emit("addCourse");
          this.$message({
            message: "恭喜你，这是一条添加成功的消息",
            type: "success",
          });
        },
        (failure) => {
          this.$notify.error({
            title: "错误",
            message: "这是一条错误的提示消息",
          });
          console.log(failure);
        }
      );
    },
  },
};
</script>

<style>
.course {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: #f5f6fa;
}
.el-form-item {
  width: 375px;
  height: 41px;
}
.cun {
  border-top: 1px solid #e9e9e9;
}
.primary {
  position: relative;
  bottom: -20px;
  right: -290px;
  width: 150px;
  height: 40px;
}
</style>