<template>
  <header>
    <el-menu
      :router="true"
      :default-active="`/`"
      mode="horizontal"
      background-color="#145c64"
      text-color="#fff"
      active-text-color="#dfd04b">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="prophet">Prophet</el-menu-item>
      <el-menu-item index="about">About</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
}
</script>
