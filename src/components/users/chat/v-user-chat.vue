<template>
  <div class="v-user-chat">
    <v-message v-for="message in messages" :key="message.id" :message="message"></v-message>
    <div class="input__field">
      <input
        type="text"
        class="v-user-chat__textfield"
        v-model="textValue"
        @keypress.enter="sendMessage"
      />
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import vMessage from "./v-message";
export default {
  components: { vMessage },
  name: "v-user-chat",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    sendMessage() {}
  }
};
</script>
