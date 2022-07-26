<template>
  <div class="breadcrumb">
    <Header
      title="Breadcrumb面包屑"
      info="显示当前页面的路径，快速返回之前的任意页面。"
    ></Header>
    <Module
      title="基本用法"
      info="适用广泛的基本用法"
      msg="在 BsBreadcrumb 中使用 BsBreadcrumbItem 标签表示从首页开始的每一级。"
      lang="xml"
      :code="html1"
    >
      <BsBreadcrumb>
        <BsBreadcrumbItem>首页</BsBreadcrumbItem>
        <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
        <BsBreadcrumbItem>详情</BsBreadcrumbItem>
      </BsBreadcrumb>
    </Module>
    <Module
      title="自定义分隔符"
      info="可以自定义分割符"
      msg="rmi提供了一个separator属性，在 BsBreadcrumb
          标签中设置它来决定分隔符，它只能是字符串，默认为斜杠 /"
      lang="xml"
      :code="html2"
    >
      <BsBreadcrumb separator=">>">
        <BsBreadcrumbItem>首页</BsBreadcrumbItem>
        <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
        <BsBreadcrumbItem>详情</BsBreadcrumbItem>
      </BsBreadcrumb>
    </Module>
    <Module
      title="图标分隔符"
      info="可以使用bs-icon作为分割符"
      msg="通过设置 separatorClass 可使用相应的 bs-icon 作为分隔符，注意这将使
          separator 设置失效"
      lang="xml"
      :code="html3"
    >
      <BsBreadcrumb separatorClass="bs-icon-d-arrow-right-blue">
        <BsBreadcrumbItem>首页</BsBreadcrumbItem>
        <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
        <BsBreadcrumbItem>详情</BsBreadcrumbItem>
      </BsBreadcrumb>
    </Module>
    <Module
      title="页面跳转"
      info="可以快速的进行路由跳转"
      msg="通过给 BsBreadcrumbItem 设置 to 属性来进行页面跳转，设置 to 属性后样式会改变。"
      lang="xml"
      :code="html4"
    >
      <BsBreadcrumb>
        <BsBreadcrumbItem to="/button">按钮</BsBreadcrumbItem>
        <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
        <BsBreadcrumbItem>详情</BsBreadcrumbItem>
      </BsBreadcrumb>
    </Module>
  </div>
</template>

<script>
import Module from '../components/module.vue'
import Header from '../components/header.vue'
export default {
  name: 'Breadcrumb',
  data() {
    return {
      html1: `<BsBreadcrumb>
  <BsBreadcrumbItem>首页</BsBreadcrumbItem>
  <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
  <BsBreadcrumbItem>详情</BsBreadcrumbItem>
</BsBreadcrumb>`,
      html2: `<BsBreadcrumb separator=">>">
  <BsBreadcrumbItem>首页</BsBreadcrumbItem>
  <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
  <BsBreadcrumbItem>详情</BsBreadcrumbItem>
</BsBreadcrumb>`,
      html3: `<BsBreadcrumb separatorClass="bs-icon-d-arrow-right-blue">
  <BsBreadcrumbItem>首页</BsBreadcrumbItem>
  <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
  <BsBreadcrumbItem>详情</BsBreadcrumbItem>
</BsBreadcrumb>`,
      html4: `<BsBreadcrumb>
  <BsBreadcrumbItem to='/botton'>首页</BsBreadcrumbItem>
  <BsBreadcrumbItem>车辆</BsBreadcrumbItem>
  <BsBreadcrumbItem>详情</BsBreadcrumbItem>
</BsBreadcrumb>`,
    }
  },
  components: { Module, Header },
}
</script>

<style lang="less" scoped></style>
