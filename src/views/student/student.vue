<template>
  <div>
    <div class="nav">
      <el-button class="btn-add" slot="reference" @click="dialogVisible = true"
        >添加学员</el-button
      >
      <el-button class="btn-add2" @click="isshow=true" slot="reference">添加排课</el-button>
      <el-button class="btn-del" slot="reference">删除</el-button>
    </div>
    <div>
      <!-- 添加学员组件 -->
      <el-dialog :visible.sync="dialogVisible">
        <addStudengt style="width: 100%; height: 500px"></addStudengt>
      </el-dialog>
      <!-- 添加排课 -->
      <el-dialog :visible.sync="isshow">
        <scheduling style="width: 100%; height: 500px"></scheduling>
      </el-dialog>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <td><input type="checkbox" /></td>
            <td>学员姓名</td>
            <td>性别</td>
            <td>所选课程</td>
            <td>购买总课时</td>
            <td>剩余课时</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vm, index) in dataList" :key="index">
            <td><input type="checkbox" /></td>
            <td>{{ vm.name }}</td>
            <td>{{ vm.sex }}</td>
            <td>{{ vm.buycourses }}</td>
            <td>{{ vm.courseslist }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div>
        共<span>{{ total }}</span
        >条
      </div>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          layout="prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import index from "../index.vue";
import addStudengt from "@/components/admin/add_Student.vue";
import scheduling from "@/components/admin/scheduling.vue";
export default {
  data() {
    return {
      dataList: [],
      dialogVisible: false,
      isshow:false,
    };
  },
  // 计算属性
  computed: {
    total() {
      var list = this.dataList;
      var sum = 0;
      for (var i in list) {
        this.dataList.forEach((item) => {
          //遍历companyid个字段，并累加
          sum += item.companyid;
        });
      }
      return sum;
    },
  },
  components: { index, addStudengt,scheduling },
  // 存储的方法
  methods: {
    // 获取学生的数据
    loaddata() {
      let url = "api/students/list";
      let that = this;
      that.$http.get(
        url,
        { page: 1 },
        (success) => {
          that.dataList = success.data.list;
          console.log(that.dataList);
          console.log(success);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  created() {
    this.loaddata();
  },
};
</script>

<style lang="less" scoped>
@import "../../less/button";
.btn-add {
  width: 150px;
  height: 45px;
}
.btn-add2 {
  margin-left: 10px;
  width: 150px;
  height: 45px;
}
table {
  border-collapse: collapse;
  width: 1370px;
}
table thead {
  width: 100%;
  line-height: 40px;
  background-color: #f5f6fa;
  font-size: 17px;
}
tbody tr td {
  line-height: 50px;
  border-bottom: 1px solid #f5f6fa;
}
tbody tr td:nth-of-type(2) {
  width: 100px;
  background: url("../../assets/ico.png") no-repeat;
  background-position: 14px -620px;
  padding-left: 20px;
}
tbody tr:hover td {
  background-color: #f5f6fa;
}
.el-button:nth-of-type(1) {
  background-position: -128px -783px;
}
.el-button:nth-of-type(2) {
  background-position: -131px -456px;
}
.el-button:nth-of-type(3) {
  background-position: -134px -370px;
}
</style>