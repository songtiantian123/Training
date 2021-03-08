<template>
  <form id="frlogin" action="">
    <div>
      <div class="title">云教务系统</div>
      <div class="loginbox">
        <div
          @click="show(1)"
          class="login-type"
          v-bind:class="{ c: loginType == 1 }"
        >
          账号登录
        </div>
        <div
          @click="show(2)"
          class="login-type"
          v-bind:class="{ c: loginType == 2 }"
        >
          短信登录
        </div>
        <!-- 账号登录 -->
        <div v-if="loginType == 1">
          <div class="loginbox-c">
            <div class="loginbox-c">
              <ul>
                <li>
                  <!-- <input v-model="username" type="text" id="username" class="txt" placeholder="账号" /> -->
                  <el-input
                    v-model="username"
                    id="username"
                    class="txt"
                    placeholder="请输入账号"
                  ></el-input>
                </li>
                <li>
                  <!-- <input v-model="pass" type="password" id="pass" class="txt" placeholder="密码" /> -->
                  <el-input
                    placeholder="请输入密码"
                    v-model="pass"
                    id="pass"
                    class="txt"
                    show-password
                  ></el-input>
                </li>
              </ul>
            </div>
            <!-- 登录按钮 -->
            <div class="loginbox-b">
              <!-- <button type="button" @click="login" id="login" class="btn"> 登录 </button> -->
              <el-button type="primary" @click="login" id="login" class="btn"
                >登录</el-button
              >
            </div>
          </div>
        </div>
        <!-- 短信登录 -->
        <div v-else>
          <div class="loginbox-c">
            <ul>
              <li>
                <!-- <input type="text" id="username" placeholder="手机号" /> -->
                <el-input
                  type="text"
                  v-model="username"
                  id="username"
                  class="txt"
                  placeholder="请输入手机号"
                ></el-input>
              </li>
              <li>
                <!-- <input type="password" id="pass" placeholder="验证码" /> -->
                <el-input
                  placeholder="请输入验证码"
                  v-model="pass"
                  id="pass"
                  class="txt"
                ></el-input>
                <!-- <button class="code">获取验证码</button> -->
                <el-button class="btnCode" type="primary" size="mini"
                  >获取验证码</el-button
                >
              </li>
            </ul>
          </div>
          <!-- 登录按钮 -->
          <div class="loginbox-b">
            <!-- <button type="submit" id="login" class="btn">登录</button> -->
            <el-button type="submit" class="btn">登录</el-button>
          </div>
        </div>
        <div class="message">{{ messtit }}</div>
      </div>
    </div>
  </form>
</template>

<script>
import router from "../../router";
export default {
  data() {
    return {
      loginType: 1,
      messtit: "",
      username: "",
      pass: "",
    };
  },
  methods: {
    show(x) {
      this.loginType = x;
    },
    login() {
      let that = this;
      if (that.username == "") {
        that.messtit = "请输入账号";
      } else if (that.pass == "") {
        that.messtit = "请输入密码";
      } else {
        that.messtitle = "";
        this.$http.post(
          "/api/admin/checklogin",
          { username: that.username, pass: that.pass },
          (success) => {
            localStorage.setItem("token", success.data);
            console.log(success.data);
            router.push({ path: "index" });

            console.log(success);
          },
          (failure) => {
            that.messtitle = "账号或密码有误";
          }
        );
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #fff;
}
/* 验证码样式 */
.btnCode {
  /* margin: 0; */
  /* width: 90px; */
  float: right;
  /* font-size: 12px; */
  margin-top: 5px;
  height: 30px;
}
/* 标题 */
.title {
  color: #000;
  padding-bottom: 30px;
  font-size: 46px;
}
/* 输入框 */
.el-input {
  border: none;
  /* border-bottom: 1px solid #000; */
  /* margin-left: 15px; */
  width: 250px;
  margin-right: 0px;
}
/* 登录盒子 */
.loginbox {
  margin: 0 auto;
  width: 506px;
  height: 350px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
/* 登录按钮 */
.loginbox-b {
  padding-top: 30px;
}
/* 账号 短信 */
.login-type {
  margin-left: 20px;
  padding-top: 25px;
  display: inline-block;
  color: #000;
  /* font-weight: normal; */
  font-size: 35px;
}
/* 切换产生的样式 */
.login-type.c {
  color: #3399ff;
  /* font-weight: bold; */
}
/* ul li 列表 */
.loginbox-c ul {
  padding-left: 0px;
}
ul li {
  list-style: none;
  margin-top: 20px;
}
/* 账号/密码提到为空的样式 */
.message {
  color: red;
}
.btn {
  width: 300px;
  height: 65px;
}
</style>