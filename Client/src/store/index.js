import { createStore } from "vuex";
import friendModule from './modules/friend.js';


const store = createStore({
    modules:{friend:friendModule}
});

export default store;