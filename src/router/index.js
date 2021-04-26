import Vue from "vue";
import VueRouter from "vue-router";
import vContactList from "../components/contacts/v-contact-list.vue";
import vContactUserInfo from '../components/contacts/v-contact-user-info.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "contacts",
    component: vContactList
  },
  {
    path: "/contact",
    name: "contact",
    component: vContactUserInfo}
];

const router = new VueRouter({
  routes
});

export default router;
