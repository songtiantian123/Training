<template>
  <div>
    <div class="form">
      <div class="nav">
        <el-button class="btn-add" @click="dialogVisible = true"
          >添加课程</el-button
        >
      </div>
    </div>
    <!-- 添加课程组件 -->
    <el-dialog :visible.sync="dialogVisible">
      <addCourse style="width: 100%" @addCourse="addChild"></addCourse>
    </el-dialog>
    <el-container>
      <el-main>
        <table id="datalist" width="100%">
          <!-- 头部 -->
          <thead>
            <tr class="tab-title">
              <td class="textleft">课程名称</td>
              <td class="t2">收费方式</td>
              <td class="t2">单价</td>
              <td class="t2">上课模式</td>
            </tr>
          </thead>
          <!-- 身体 -->
          <tbody>
            <tr class="edit-tr" v-for="(item, index) in list" :key="index">
              <td class="textleft" style="position: relative">
                {{ item.name }}
              </td>
              <td >{{ item.pricetype }}</td>
              <td>{{ item.price }}/课时</td>
              <td>{{ item.mode }}</td>
            </tr>
          </tbody>
        </table>
        <div style="float: left">
          共<span style="color: red">{{ total }}</span
          >条记录
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import addCourse from "@/components/admin/addCourse.vue";
export default {
  data() {
    return {
      list: [],
      dialogVisible: false,
    };
  },
  components: {
    addCourse,
  },
  // 计算属性
  computed: {
    // 计算总条数
    total() {
      let sum = 0;
      this.list.forEach((item) => {
        //遍历companyid个字段，并累加
        sum += item.companyid;
      });
      return sum;
    },
  },
  // 初始化后渲染到页面上的数据
  created() {
    this.loaddata();
  },
  // 存放的方法
  methods: {
    // 获取班级的数据列表
    loaddata() {
      let url = "api/courses/list";
      let that = this;
      that.$http.get(
        url,
        { page: 1 },
        (success) => {
          that.list = success.data.list;
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    // 获取课程弹框显示
    isdialogVisible() {
      let that = this;
      that.dialogVisible = true; // 点击时显示
    },
    // 弹框(保存之后)消失
    addChild() {
      this.loaddata();
      this.dialogVisible = false; // 保存后消失
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../less/button";
.button {
  margin-left: -700px;
}
.ying {
  box-shadow: 0px 0px 10px 2px #eef2f5;
}
tbody tr td:nth-of-type(1) {
  background: url("../../assets/ico.png") no-repeat;
  background-position: 55px 10px;
}
.el-main {
  color: #333;
  line-height: 40px;
  margin-left: -20px;
}
table,
tr,
td {
  border-collapse: collapse;
  margin-top: -20px;
}
.tab-title {
  background-color: #f5f6fa;
  height: 50px;
  width: 1736px;
  font-size: 15px;
}
tbody tr:hover {
  background-color: #eff2f7;
}
tbody tr td {
  border-bottom: 1px solid #eff2f7;
}
thead {
  border-bottom: 1px solid #eff2f7;
}
tbody tr td{
  width: 100px;
  padding-left: 150px;
}
.textleft{
  padding-left:26px;
}
.t2{
  padding-left: 150px;
}
.el-button:nth-of-type(1){
    background-position: -142px -458px;
}
.btn-add{
  width: 123px;
  height: 40px;
}
</style>