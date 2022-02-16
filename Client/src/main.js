import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from "./components/UI/BaseCard.vue";
import UserCirlce from "./components/UI/UserCircle.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import TheHeader from "./layout/TheHeader.vue"
import TheSidebar from "./layout/TheSidebar.vue"
import router from './router/route';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import TheSpinner from './layout/TheSpinner.vue';
import store from './store/index.js';




const app =createApp(App);

app.use(VueToast);


app.component('base-button',BaseButton);
app.component('base-card',BaseCard);
app.component('user-circle',UserCirlce);
app.component('base-dialog',BaseDialog);
app.component('the-header',TheHeader);
app.component('the-sidebar',TheSidebar);
app.component('the-spinner',TheSpinner);
app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');


