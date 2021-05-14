<template>
  <div class="v-contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__name">
        <span>{{ contact_data.phone }}</span>
      </div>
      <div class="info__tools">
        <button class="start-call">Call</button>
        <button class="start-chat" @click="checkChats">Start chat</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "v-contact-user-info",
  props: {},
  data() {
    return {
      contact_data: {}
    };
  },
  computed: {
    ...mapState(["chats", "contacts"])
  },
  mounted() {
    this.contacts.find(contact => {
      if (contact.id === this.$route.query.id) {
        this.contact_data = contact;
      }
    });
  },
  methods: {
    ...mapActions(["FETCH_CHATS", "SET_USER_TO_HEADER"]),
    checkChats() {
      if (!this.chats.length) {
        this.FETCH_CHATS().then(() => {
          this.toChat();
        });
      } else {
        this.toChat();
      }
    },
    toChat() {
      this.chats.map(chat => {
        if (chat.id === this.contact_data.id) {
          this.$router.push({
            name: "user",
            params: { messages: chat.chat, user: chat }
          });
        }
      });
    }
  }
};
</script>
