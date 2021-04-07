<template>
  <div id="app">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>
<script>
import vMainWrapper from './components/v-main-wrapper.vue'
export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
