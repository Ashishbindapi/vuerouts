import Dashboard from './componets/Dashboard.js';
import Login from './componets/login/login.js';
import Register from './componets/login/register.js';

const routes = [
    { path: '/', component: Dashboard, name: 'dashboard' },
    { path: '/login', component: Login, name: 'login'},
    { path: '/Register', component: Register }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
}) 

import App from './app.js';
Vue.createApp(App).use(router).mount('#app')