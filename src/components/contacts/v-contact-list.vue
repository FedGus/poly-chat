<template>
  <div class="v-contact-list">
    <v-contact-user
      v-for="contact in contacts"
      :key="contact.id"
      :contact_data="contact"
      @to-contact-info="toContactInfo(contact)"
    ></v-contact-user>
  </div>
</template>

<script>
import vContactUser from "./v-contact-user";
import { mapActions, mapState } from "vuex";
export default {
  name: "v-contact-list",
  components: {
    vContactUser
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["contacts"])
  },
  methods: {
    ...mapActions(["FETCH_CONTACTS"]),
toContactInfo(contact) {
  this.$router.push({
    name: 'contact',
    query: {'id': contact.id}
  })
}
  },
  mounted() {
    this.FETCH_CONTACTS();
  }
};
</script>
