<!-- 左侧菜单栏 -->
<template>
  <el-aside width="80px">
    <el-menu default-active="this.$route.path" router>
      <ul>
        <li v-for="(vo, index) in navList" :key="index" @click="addPath(index)">
          <span>{{ vo.meta.title }}</span>
          <!-- <router-link to="check"></router-link> -->
        </li>
      </ul>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      status: 0,
      navList: [
        // 班级管理
        {
          path: "/index",
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
    };
  },
  methods: {
    //   路由切换
    addPath(val) {
      this.status = val;
      console.log(val)
      // console.log(this.navList[val].path)
      this.$router.path({
        path: this.navList[val].path,
      });
    },
    created() {
      for (var i = 0; i < this.navList.length; i++) {
        if (this.navList[i].path == this.$router.path) {
          this.status = i;
        }
      }
    },
  },
};
</script>

<style>
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 90px;
  /* line-height: 180px; */
}
.el-aside ul li {
  list-style: none;
  margin-left: -50px;
  position: relative;
  left: 0px;
  margin-top: -5px;
}
/* 左侧精灵图 */

ul li {
  background: url("../../assets/ico.png") no-repeat;
}
ul li:nth-of-type(1) {
  background-position: 18px -273px;
}
ul li:nth-of-type(2) {
  background-position: 20px -90px;
}
ul li:nth-of-type(3) {
  background-position: 26px -468px;
}
ul li:nth-of-type(4) {
  background-position: -110px -85px;
}
ul li:nth-of-type(5) {
  background-position: -53px -706px;
}
</style>