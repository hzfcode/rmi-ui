<template>
  <div class="breadcrumb">
    <h2>Breadcrumb面包屑</h2>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <h3>基础用法</h3>
    <p>适用广泛的基础用法。</p>
    <BsBreadcrumb>
      <BsBreadcrumbItem>首页</BsBreadcrumbItem>
      <BsBreadcrumbItem>音乐</BsBreadcrumbItem>
      <BsBreadcrumbItem>华语</BsBreadcrumbItem>
      <BsBreadcrumbItem>周杰伦</BsBreadcrumbItem>
    </BsBreadcrumb>
    <el-card class="mt"> </el-card>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
}
</script>

<style lang="less" scoped></style>
