import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta)
//#region import pages
import indexPage from '../view/Index';
import paymentPage from '../view/Payment';
import profilePage from '../view/Profile'
import responsibilityPage from '../view/Responsibility';
//endregion

//#region import components
import first from '../view/Index/first';
import second from '../view/Index/second';
import third from '../view/Index/third';
import product from '../view/Index/third/product';
import complete from '../view/Index/third/complete';
import transfer from '../view/Index/third/transfer';
import firstStep from '../view/Profile/firstStep';
import automatic from '../view/Profile/automatic';
import secondStep from '../view/Profile/secondStep';
import thirdStep from '../view/Profile/thirdStep';
import fourStep from '../view/Profile/fourStep';
import fiveStep from '../view/Profile/fiveStep';
import blocked from '../view/Profile/blocked';
import pause from '../view/Profile/pause';
import unpause from '../view/Profile/unpause';
import protect from '../view/Profile/protect';
import license from '../view/Profile/license';
import protection from '../view/Profile/protected';
import insurance from '../view/Profile/insurance';
import activateInsurance from '../view/Profile/activateInsurance';
import franchise from '../view/Profile/franchise';
import final from '../view/Profile/final';
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
                path: '/profile',
                component: profilePage,
                children: [
                    { name: 'firstStep', path: '', component: firstStep },
                    { name: 'automatic', path: 'automatic', component: automatic },
                    { name: 'secondStep', path: 'second', component: secondStep },
                    { name: 'thirdStep', path: 'third', component: thirdStep },
                    { name: 'fourStep', path: 'four', component: fourStep },
                    { name: 'fiveStep', path: 'five', component: fiveStep },
                    { name: 'blocked', path: 'blocked', component: blocked },
                    { name: 'pause', path: 'pause', component: pause },
                    { name: 'unpause', path: 'unpause', component: unpause },
                    { name: 'protect', path: 'protect', component: protect },
                    { name: 'license', path: 'license', component: license },
                    { name: 'protected', path: 'protected', component: protection },
                    { name: 'insurance', path: 'insurance', component: insurance },
                    { name: 'activateInsurance', path: 'activate-insurance', component: activateInsurance },
                    { name: 'franchise', path: 'franchise', component: franchise },
                    { name: 'final', path: 'final', component: final },
                ]
            },
            {
                name: 'responsibility',
                path: '/responsibility',
                component: responsibilityPage
            }
        ],
        scrollBehavior(to, from, savedPosition){
            return { x: 0, y: 0 }
        }
    }
)
