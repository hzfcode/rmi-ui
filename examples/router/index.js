import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'breadcrumb',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/breadcrumb'),
      },
      {
        path: 'button',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/button'),
      },
      {
        path: 'dialog',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/dialog'),
      },
      {
        path: 'image',
        component: () => import(/* webpackChunkName: "page" */ '../view/image'),
      },
      {
        path: 'input',
        component: () => import(/* webpackChunkName: "page" */ '../view/input'),
      },
      {
        path: 'loading',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/loading'),
      },
      {
        path: 'message',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/message'),
      },
      {
        path: 'pagination',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/pagination'),
      },
      {
        path: 'select',
        component: () =>
          import(/* webpackChunkName: "page" */ '../view/select'),
      },
      {
        path: 'title',
        component: () => import(/* webpackChunkName: "page" */ '../view/title'),
      },
      {
        path: 'tree',
        component: () => import(/* webpackChunkName: "page" */ '../view/tree'),
      },
    ],
  },
]

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单跳转当前页面报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})

export default router
