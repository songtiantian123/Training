<template>
  <div>
    <div class="add_student"><span style="float: left">增加学员</span></div>
    <div style="margin: 20px"></div>
    <div>
      <el-form label-width="80px">
        <el-form-item label="姓名:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="联系方式:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="性别:" prop="resource">
          <el-radio-group>
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="学员编号:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动形式:" prop="desc">
          <el-input type="textarea"></el-input>
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
export default {};
</script>

<style>
.add_student {
  /* width: 590px; */
  width: 100%;
  height: 45px;
  margin-top: -59px;
  margin-left: -20px;
  padding-left: 10px;
  font-size: 20px;
  line-height: 45px;
  background-color: #f5f6fa;
}
.el-form{
    padding-left:140px;
}
.el-radio-group {
  margin-left: -190px;
}
.cun {
  border-top: 1px solid #e9e9e9;
  margin-top: 40px;
}
.primary {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 150px;
  height: 40px;
}
</style>