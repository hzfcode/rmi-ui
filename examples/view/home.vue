<template>
  <div class="container">
    <el-container>
      <el-header class="container">RMI_UI组件库介绍</el-header>
      <el-container>
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
      ],
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
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
}

.el-main {
  color: #333;
}
</style>
