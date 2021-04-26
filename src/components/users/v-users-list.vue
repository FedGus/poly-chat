<template>
  <div class="v-user-list">
    <v-user v-for="chat in chats" :key="chat.id" :user_data="chat"></v-user>
  </div>
</template>

<script>
import vUser from "./v-user";
import { mapActions, mapState } from "vuex";
export default {
  name: "v-user-list",
  components: {
    vUser,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["chats"]),
  },
  mounted() {
    this.FETCH_CHATS();
    this.SET_USER_TO_HEADER();
  },
  methods: {
    ...mapActions(["FETCH_CHATS", "SET_USER_TO_HEADER"]),
  },
};
</script>
