<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar />
  </div>
</template>
<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import "assets/css/base"
</style>