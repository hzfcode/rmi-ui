<template>
  <div class="container">
    <el-container class="container">
      <el-header>RMI_UI组件库介绍</el-header>
      <el-container class="container">
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item
              v-for="item in components"
              :key="item.id"
              :index="item.id"
              @click="$router.push('/' + item.val)"
            >
              <span slot="title">
                {{ item.val }}
              </span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      components: [
        {
          id: '1',
          val: 'breadcrumb',
        },
        {
          id: '2',
          val: 'button',
        },
        {
          id: '3',
          val: 'dialog',
        },
        {
          id: '4',
          val: 'image',
        },
        {
          id: '5',
          val: 'input',
        },
        {
          id: '6',
          val: 'loading',
        },
        {
          id: '7',
          val: 'message',
        },
        {
          id: '8',
          val: 'pagination',
        },
        {
          id: '9',
          val: 'select',
        },
        {
          id: '10',
          val: 'title',
        },
        {
          id: '11',
          val: 'tree',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  position: fixed;
}
.el-header {
  font-size: 32px;
  color: rgb(42, 148, 240);
  height: 60px;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #dcdfe6;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  position: fixed;
  height: 100vh;
  overflow-x: auto;
  margin-top: 60px;
}

.el-main {
  color: #333;
  margin-left: 200px;
  margin-top: 60px;
}
</style>
