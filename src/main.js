import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import headerComponent from './components/Header-component.vue';
import CategoryComponent from './components/homepage/Category-component.vue';
import footerComponent from './components/Footer-component.vue';
import JwPagination from 'jw-vue-pagination';
import Homepage from './page/homepage.vue';
import LoginPage from './components/login-page.vue';
import setting from './page/account-setting.vue';
import RegisterPage from './components/register-page.vue';
import shoppingCart from './page/shopping-cart.vue';
import PurchaseHistory from './page/Purchase-history.vue';
import locationAdress from './page/location-adress.vue';
import BusinessPerformance from './page/Business-performance.vue';
import production from './page/production.vue';
import storecontroller from '../storecontroller';
import accountMenu from './components/account-menu.vue';
// import { allSettled } from 'core-js/library/es6/promise';
import startSelling from './components/selling/start-selling.vue';
import { createRouter, createWebHistory } from 'vue-router';
library.add(fas, faGoogle);
//import sellingLogin from './components/selling/selling-login.vue';
import FormOneSeller from './components/selling/form-one-seller.vue';
import FormTwoSeller from './components/selling/form-two-seller.vue';
import FormThreeSeller from './components/selling/form-three-seller.vue';
import FormFourSeller from './components/selling/form-four-seller.vue' ;
import salesPage from './components/selling/sales-page.vue';
import ProductComment from './components/selling/product-comment.vue';
const routes = [
    {
        path: '/',name: 'Homepage',component: Homepage
    },
    {
        path: '/users/login',name: 'LoginPage',component: LoginPage
    },
    {
        path: '/users/setting',name: 'setting',component: setting
    },
    {
        path: '/users/register',name: 'RegisterPage',component: RegisterPage
    },
    // {
    //     path: '/users/shoppingCart',name: 'shoppingCart',component: shoppingCart
    // },
    {
        path: '/users/PurchaseHistory',name: 'PurchaseHistory',component: PurchaseHistory
    },
    {
        path: '/users/locationAdress',name: 'locationAdress',component: locationAdress
    },
    {
        path: '/users/Business',name: 'BusinessPerformance',component: BusinessPerformance
    },
    {
        path: '/users/production',name: 'production',component: production
    },
    {
        path: '/users/cart',name: 'shoppingCart',component: shoppingCart 
    },
    // {
    //     path: '/users/selling',name: 'sellingLogin',component: sellingLogin
    // },
    {
        path: '/users/startSelling',name: 'startSelling',component: startSelling
    },
    // {
    //     path: '/users/sellingProduct',name: 'sellingProduct',component: sellingProduct  
    // }
    {
        path: '/users/FormOneSeller',name: 'FormOneSeller',component: FormOneSeller 
    },
    {
        path: '/users/FormTwoSeller',name: 'FormTwoSeller',component: FormTwoSeller
    },
    {
        path: '/users/FormThreeSeller',name: 'FormThreeSeller',component: FormThreeSeller
    },
    {
        path: '/users/FormFourSeller',name: 'FormFourSeller',component: FormFourSeller
    },
    {
        path: '/users/salesPage',name: 'salesPage',component: salesPage
    },
    {
        path: '/users/ProductComment',name: 'ProductComment',component: ProductComment
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('headerComponent', headerComponent);
app.component('CategoryComponent', CategoryComponent);
app.component('footerComponent', footerComponent);
app.component('JwPagination', JwPagination);
app.component('menuComponent', accountMenu);
app.mount('#app');
app.use(storecontroller)