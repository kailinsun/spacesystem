<template>
    <div>
    <el-menu :default-active="activeIndex" router class="el-menu-topbar" mode="horizontal" @select="handleSelect" 
    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
    <!-- <el-menu-item index="data" >数据管理</el-menu-item> -->
    <el-submenu index="data" >
      <template slot="title">数据管理</template>
      <el-menu-item index="/DataConfig">数据下载与管理</el-menu-item>
    </el-submenu>
    <el-submenu index="analysis" >
      <template slot="title">预警分析</template>
      <el-menu-item index="/ParamConfig">参数配置</el-menu-item>
      <el-menu-item index="/Assessment" disabled>预警评估</el-menu-item>
    </el-submenu>
    <el-submenu index="result" >
      <template slot="title">预警结果</template>
      <el-menu-item index="/MonitorPage">结果监视</el-menu-item>
      <el-menu-item index="/QueryPage">结果检索</el-menu-item>
    </el-submenu>
    <!-- <el-menu-item index="result" >预警结果</el-menu-item> -->
    </el-menu>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu-topbar{
  position: relative;
  width: 100%;
  /* background-color: #545c64;
  text-emphasis-color: #fff; */
}

</style>