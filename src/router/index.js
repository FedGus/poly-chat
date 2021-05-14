import Vue from "vue";
import VueRouter from "vue-router";
import vContactList from "../components/contacts/v-contact-list.vue";
import vContactUserInfo from "../components/contacts/v-contact-user-info.vue";
import vUserList from "../components/users/v-users-list.vue";
import vUserChat from "../components/users/chat/v-user-chat.vue";
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
    component: vContactUserInfo
  },
  {
    path: "/chats",
    name: "chats",
    component: vUserList
  },
  {
    path: "/chat",
    name: "chat",
    component: vUserChat,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
