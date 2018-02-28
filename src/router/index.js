import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta)
//#region import pages
import indexPage from '../view/Index';
import paymentPage from '../view/Payment';
import profilePage from '../view/Profile'
//endregion

//#region import components
import first from '../view/Index/first';
import second from '../view/Index/second';
import third from '../view/Index/third';
import product from '../view/Index/third/product';
import complete from '../view/Index/third/complete';
import transfer from '../view/Index/third/transfer';
//endregion

export default new VueRouter(
    { 
        // mode: 'history',
        routes: [
            { 
                // name: 'home',  
                path: '/', 
                component: indexPage,
                children:[
                    {
                        name: 'homeFirst',
                        path: '/',
                        component: first
                    },
                    {
                        name: 'homeSecond',
                        path: '/log',
                        component: second
                    },
                    {
                        name: 'homeThird',
                        path: '/products',
                        component: third,
                        children: [
                            {
                                name: 'product',
                                path: ':id',
                                component: product
                            },
                            {
                                name: 'complete',
                                path: '/complete',
                                component: complete
                            },
                            {
                                name: 'transfer',
                                path: '/transfer',
                                component: transfer
                            }
                        ]
                    }
                ]
            },
            {
                name: 'payment',
                path: '/payment',
                component: paymentPage
            },
            {
                name: 'profile',
                path: '/profile',
                component: profilePage
            }
        ]
    }
)
