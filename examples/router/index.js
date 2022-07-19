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
        component: () => import('../view/breadcrumb'),
      },
      {
        path: 'button',
        component: () => import('../view/button'),
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
