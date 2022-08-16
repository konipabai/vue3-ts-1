<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="../assets/logo.png" class="logo">
          </el-col>
          <el-col :span="16">
            <h2>后台管理系统</h2>
          </el-col>
          <el-col :span="4" class="col-btn">
            <el-button @click="delToken">退出登录</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              :default-active="active"
              text-color="#fff"
              router
          >
<!--          ↑ router 开启路由模式 之后就可以通过 el-menu-item index来进行过跳转     -->

<!--          下面得到 处于 home 页面里左边导航栏的路由 list，这里for循环创建菜单减少代码量     -->
<!--          index 对应的路由路径被选中了会变颜色    -->
            <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
<!--          设置路由出口  -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";

export default defineComponent({
  setup(){
    const router = useRouter()
    const route = useRoute()
    const delToken = ()=>{
      localStorage.removeItem('token')
      router.push('/login')
    }

    // console.log(router.getRoutes())
    // 原生 js 语法，筛选出含有 meta 属性，里面的 isShow 为 true 的路由
    const list = router.getRoutes().filter(v=>v.meta.isShow)
    // console.log(list)
    return { list,  active:route.path, delToken }
  }
});
</script>

<style lang="scss" scoped>
  .el-header {
    height: 80px;
    background-color: #666;

    .logo {
      height: 80px;
    }

    h2, .quit-login {
      text-align: center;
      height: 80px;
      line-height: 80px;
      color: white;
    }
    .col-btn{
      height: 80px;
      line-height: 80px;
    }
  }

  .el-aside{
    .el-menu{
      // 设置高度为 100vh 整个页面高度 减去 80px 头部导航栏高度
      height: calc(100vh - 80px);
    }
  }
</style>
