import { createRouter, createWebHistory } from "vue-router";

import AddFriend from './components/freinds/AddFriend.vue';
import ViewFriend from './components/freinds/DetailFriend.vue';
import ListFriend from './components/freinds/TheFriends.vue';
import EditFriend from './components/freinds/EditFriend.vue';
import NotFound from "./components/layout/NotFound.vue";
import Home from './components/layout/Home.vue';

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
});

router.beforeEach((toRoute, fromRoute, next) => {
  document.title = toRoute.name

  next();
})

export default router;