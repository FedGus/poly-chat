<template>
  <div class="v-main-wrapper">
    <v-header></v-header>
    <router-view></router-view>
    <v-bottom-nav></v-bottom-nav>
  </div>
</template>

<script>
import vBottomNav from './layouts/v-bottom-nav.vue';
import VHeader from './layouts/v-header.vue';

export default {
  components: { VHeader, vBottomNav },
  name: "v-main-wrapper",
  props: {},
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
</style>