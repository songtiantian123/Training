<template>
  <div id="app">
    <el-container>
      <!-- 头部 开始 -->
      <el-header>
        <img class="img1" :src="logo" alt="" />
      </el-header>
      <!-- 头部 结束 -->
      <el-container>
        <!-- 左侧 开始 -->
        <el-aside width="72px">
          <ul>
            <li
              class="left-jing"
              v-for="(vo, index) in navList"
              :key="index"
              @click="addPath(index)"
              :class="{ active_checked: isActive == index }"
            >
              <span>{{ vo.meta.title }}</span>
            </li>
          </ul>
        </el-aside>
        <!-- 左侧 结束 -->

        <!-- 主体 开始 -->
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>

        <!-- 主体 结束 -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import logo from "@/assets/logo.jpg"; // loao标志
export default {
  data() {
    return {
      addtitle: "添加班级",
      isActive: true,
      logo: logo,
      // ico: ico,
      classshow: false,
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
      // datalist: [],
    };
  },
  methods: {
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
    // loaddata() {
    //   let url = "api/classes/list";
    //   let that = this;
    //   that.$http.get(
    //     url,
    //     { page: 1 },
    //     (success) => {
    //       that.datalist = success.data.list;
    //       // console.log(success);
    //     },
    //     (failure) => {
    //       console.log(failure);
    //     }
    //   );
    // },
    // 排课
    work(index) {
      alert(index);
    },
    // 修改
    edit(index) {
      // alert(index);
      // let that = this;
      // that.addtitle = "修改班级";
      // let data = that.datalist[index]
      // let data = JSON.parse(JSON.stringify(that.datalist[index]));
      // that.classshow = true;
      // setTimeout(() => {
      //   that.$refs.refAddClass.addList = data;
      // }, 50);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../less/button";
.button {
  position: relative;
  left: -450px;
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
  // background-position: 0px -600px;
}
ul li:nth-of-type(5) {
  background-position: -59px -706px;
}
ul {
  margin-top: 15px;
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
  /* background-color: #d3dce6;  */
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
tbody tr td {
  padding-bottom: -990px;
}
</style>