import Vuex, { Store } from 'vuex'
import Vue from 'vue';
import state from "./state";
import * as getters from "./getters";
import {mutations} from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    state,
    getters,
    mutations,
    actions
});

export default store;
