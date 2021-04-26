<template>
  <div class="v-contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__name">
        <span>{{ contact_data.phone }}</span>
      </div>
      <div class="info__tools">
        <button class="start-call">Call</button>
        <button class="start-chat">Start chat</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "v-contact-user-info",
  props: {},
  data() {
    return {
      contact_data: {},
    };
  },
  computed: {
    ...mapState(["contacts"]),
  },
  mounted() {
    this.contacts.find((contact) => {
      if (contact.id === this.$route.query.id) {
        this.contact_data = contact;
      }
    });
  },
  methods: {},
};
</script>
