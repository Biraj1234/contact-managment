import { createRouter, createWebHistory } from "vue-router";

import AddFriend from '../views/friend/AddFriend.vue';
import ViewFriend from '../views/friend/DetailFriend.vue';
import ListFriend from '../views/friend/FriendList.vue';
import EditFriend from '../views/friend/EditFriend.vue';
import NotFound from "../views/NotFound.vue";
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name:'Home', component:Home },
    { path: "/:notFound(.*)", name:'404:Error', component:NotFound },
    { path: "/friend", name:'Friend', component:ListFriend},
    { path: "/friend/add", name:'Add Friend',component: AddFriend },
    { path: "/friend/edit/:id", name:"Edit", component: EditFriend },
    { path: "/friend/view/:id", name:"View", component: ViewFriend },

  ],
  scrollBehavior(_, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

router.beforeEach((toRoute, fromRoute, next) => {
  document.title = toRoute.name
  next();
})



export default router;