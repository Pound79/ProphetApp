<template>
  <div id="app">
    <header>
      <headerItem />
    </header>
    <router-view/>
  </div>
</template>

<script>
import headerItem from './components/HeaderItem'

export default {
  name: 'App',
  components: {
    headerItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8px;
}
</style>
