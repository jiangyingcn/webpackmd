<template>
  <div id="app">
    <img src="./assets/logo.png">
    <buttonMd />
    <router-view/>
  </div>
</template>

<script>
import buttonMd from './button.md';
export default {
  name: 'App',
  components: {
    buttonMd
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
  margin-top: 60px;
}
</style>
