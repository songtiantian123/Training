<template>
  <div>
    <div class="nav">
      <el-button class="button" slot="reference">删除</el-button>
      <el-button class="btn-add" @click="classshow = true" slot="reference"
        >添加班级</el-button
      >
    </div>
    <div>
      <!-- 添加班级组件 -->
      <el-dialog :title="addtitle" :visible.sync="classshow">
        <addclass ref="refAddClass" @addChild="fnaddChild"></addclass>
      </el-dialog>
      <!-- 排课组件 -->
      <el-dialog style="width: 1900px" class="schedule" :visible.sync="work">
        <schedule
          style="height: 650px; width: 900px; background-color: #fcfcfc"
        ></schedule>
      </el-dialog>
    </div>
    <div>
      <table id="datalist" width="1150px">
        <!-- 头部 -->
        <thead>
          <tr class="tab-title">
            <!-- <td>序号</td> -->
            <td class="textleft">班级名称</td>
            <td>课程</td>
            <td>老師</td>
            <td>人数</td>
            <td>计划课时</td>
            <td>已排课时</td>
            <td>已上课时</td>
            <td style="width: 180px"></td>
            <td style="width: 20px"></td>
          </tr>
        </thead>
        <!-- 身体 -->
        <tbody>
          <tr class="edit-tr" v-for="(item, index) in datalist" :key="index">
            <!-- 序号 -->
            <!-- <td>{{ index + 1 }}</td> -->
            <!-- 班级名称 -->
            
            <td class="textleft" prop="name" style="position: relative">
              {{ item.name }}
            </td>
            <!-- 课程 -->
            <td prop="coursename">{{ item.coursename }}</td>
            <!-- 老师 -->
            <td prop="teacherslist">{{ item.teacherslist }}</td>
            <!-- 人数 -->
            <td prop="students">{{ item.students }}人</td>
            <!-- 计划课时 -->
            <td prop="schcourses">{{ item.schcourses }}课时</td>
            <!-- 已排课时 -->
            <td prop="endcourses">{{ item.endcourses }}</td>
            <!-- 已上课时-->
            <td prop="endcourses">{{ item.endcourses }}</td>
            <td class="edit-td">
              <p @click="work = true">排课</p>
              <p @click="edit(index)">修改</p>
              <p @click="del(index)">删除</p>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import addclass from "@/components/admin/AddClass";
import schedule from "@/components/admin/schedule";
export default {
  data() {
    return {
      addtitle: "添加班级",
      isActive: true,
      classshow: false,
      work: false,
      status: 0,
      index: "",
      navList: [
        // 班级管理
        {
          path: "/class",
          name: "",
          meta: { title: "班级管理" },
        },
        // 课程管理
        {
          path: "/hour",
          name: "",
          meta: { title: "课程管理" },
        },
        // 考勤管理
        {
          path: "/check",
          name: "",
          meta: { title: "考勤管理" },
        },
        // 课时管理
        {
          path: "/Summary",
          name: "",
          meta: { title: "课时汇总" },
        },
        // 学员管理
        {
          path: "/student",
          name: "",
          meta: { title: "学员管理" },
        },
      ],
      datalist: [],
    };
  },
  components: {
    addclass, // 添加班级(弹框)组件
    schedule, // 排课(弹框)组件
  },
  // 存储的方法
  methods: {
    fnaddChild() {
      // alert(111)
      this.loaddata();
      this.classshow = false;
    },
    //   路由切换
    addPath(val) {
      // 判断是否切换页面
      this.isActive = val;
      if (val == "0") {
        this.isTrue = true;
      } else {
        this.isTrue = false;
      }
      // console.log(this.$router.push('/login'))
      this.status = val;
      this.$router.push(this.navList[val].path);
      // this.$rourer.push()
    },
    // 封装班级列表
    loaddata() {
      let url = "api/classes/list";
      let that = this;
      that.$http.get(
        url,
        { page: 1 },
        (success) => {
          that.datalist = success.data.list;
          // console.log(success);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    // 修改
    edit(index) {
      // alert(index);
      let that = this;
      that.addtitle = "修改班级";
      // let data = that.datalist[index]
      let data = JSON.parse(JSON.stringify(that.datalist[index]));
      that.classshow = true;
      setTimeout(() => {
        that.$refs.refAddClass.addList = data;
      }, 50);
    },
    // 删除
    del(index) {
      console.log(this.datalist[index].id);
      this.$http.get(
        "api/classes/delete",
        { id: this.datalist[index].id },
        (success) => {
          console.log(success);
          this.$message({
            showClose: true,
            message: "恭喜你，这是一条删除成功的消息",
            type: "success",
          });
        },
        (failure) => {
          console.log(failure);
          this.$message({
            showClose: true,
            message: "错了哦，这是一条删除失败的消息",
            type: "error",
          });
        }
      );
    },
  },
  created() {
    this.loaddata();
  },
};
</script>

<style lang="less" scoped>
@import "../../less/button";
.button {
  position: relative;
  top: 2px;
  left: -750px;
  width: 105px;
  height: 45px;
}
.btn-add {
  width: 150px;
  height: 45px;
}
//  左侧精灵图
ul li:nth-of-type(1) {
  background-position: 23px -172px;
}
ul li:nth-of-type(2) {
  background-position: 23px -90px;
}
ul li:nth-of-type(3) {
  background-position: 19px -472px;
  line-height: 69px;
}
ul li:nth-of-type(4) {
  background-position: -118px -90px;
}
ul li:nth-of-type(5) {
  background-position: -59px -706px;
}
ul {
  margin-top: 15px;
}
tbody tr td:nth-of-type(1){
  background: url("../../assets/ico.png") no-repeat;
  background-position: -56px -333px;
}
.el-container {
  box-sizing: border-box;
}
/* 头部 */
.el-header {
  background-color: #fff;
  color: #000000;
  line-height: 60px;
  position: relative;
}

.el-header .img1 {
  position: absolute;
  top: 0px;
  left: 12px;
}

/* 左侧 */
.el-aside {
  color: #333;
  text-align: center;
  line-height: 90px;
}

.el-aside ul li {
  list-style: none;
  margin-left: -50px;
  position: relative;
  left: 0px;
  margin-top: -5px;
}
/* 主体 */
.el-main {
  color: #333;
  text-align: center;
  margin-left: -8px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
table,
td,
tr {
  border-collapse: collapse;
}

.tab-title {
  background-color: #f5f6fa;
  height: 50px;
  font-size: 15px;
  border-bottom: 1px solid #eff2f7;
}
.edit-tr {
  line-height: 31px;
  font-size: 14px;
  border-bottom: 1px solid #eff2f7;
}
tbody tr:hover td {
  background-color: #f5f6fa;
}
li:active {
  background-color: #e8ebf0;
  border-radius: 8px;
  cursor: pointer;
}
p {
  display: none;
  float: left;
  padding: 5px 0px 0px 5px;
}
tr:hover p {
  display: block;
  cursor: pointer;
  color: blue;
}
.el-button:nth-of-type(1){
  background-position: -138px -370px;
  margin-right: 30px;
}
.el-button:nth-of-type(2){
  background-position: -128px -456px;
  padding-left: 30px;
}
</style>