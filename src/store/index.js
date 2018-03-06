import Vue from "vue"
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);
//#region import modules
import index from './modules/index'
//endregion

const store = new Vuex.Store({
    state: {
        spinnerShow: true,
        checkedShow: false,
    },
    getters: {
        $http: () => (VueResource),
        Spinner: ({ spinnerShow }) => spinnerShow,
        Checked: ({ checkedShow }) => checkedShow
    },
    mutations: {
        preloader(state, payload) {

            if (!payload) {
                payload = {
                    time: 3000,
                    check: false
                }
            }

            if (payload.check) {
                setTimeout(() => {
                    state.spinnerShow = false;
                    state.checkedShow = true

                    setTimeout(() => {
                        state.checkedShow = false;
                    }, 1000);
                }, payload.time);
            } else {
                setTimeout(() => {
                    state.spinnerShow = false;
                }, payload.time);
            }
        },
        reloadPreloader(state){
            state.spinnerShow = true;
            state.checkedShow = false;
        },
        updateSpinner: (state, payload) => { state.spinnerShow = payload },
        updateChecked: (state, payload) => { state.checkedShow = payload }
    },
    actions: {

    },
    modules: {
        index
    }
})

export default store;
