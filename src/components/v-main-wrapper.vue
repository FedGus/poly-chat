<template>
  <div>
    <v-header></v-header>
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