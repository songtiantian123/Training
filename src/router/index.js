import Vue from 'vue'
import Router from 'vue-router'
import http from '@/components/http'
import VueRouter from 'vue-router'
import index from '@/views/index'
import { Checkbox } from 'element-ui'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',// 默认加载
      component: index,
      redirect: '/index',
      children: [
        // 登录
        {
          path: '/login',
          name: 'login',
          component: () => import("@/views/user/login")
        },
        // 班级管理
        {
          path: '/class',
          name: 'class',
          component: () => import("@/views/class/class")
        },
        // 考勤管理
        {
          path: '/check',
          name: 'check',
          component: () => import("@/views/check/check")
        },
        // 课程管理
        {
          path: '/hour',
          name: 'classhour',
          component: () => import("@/views/hour/ClassHour")
        },
        // 课时汇总
        {
          path: '/Summary',
          name: 'summary',
          component: () => import("@/views/Summary/Summary")
        },
        // 学员管理
        {
          path: '/student',
          name: 'student',
          component: () => import("@/views/student/student")
        },
        // token请求
        {
          path: '/http',
          name: 'http',
          component: http
        },
        // 测试
        {
          path: '/test',
          name: 'test',
          component: () => import("@/views/test/test")
        },
      ]
    },

    // 未找到页面
    {
      path: '*',
      component: () => import("@/views/error/404.vue")
    },
  ],
})
