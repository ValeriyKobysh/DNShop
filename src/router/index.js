import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta)
//#region import pages
import indexPage from '../view/Index'
//endregion

//#region import components

//endregion

export default new VueRouter(
    { 
        // mode: 'history',
        routes: [
            { 
                name: 'home',  
                path: '/', 
                component: indexPage 
            },
        ]
    }
)
