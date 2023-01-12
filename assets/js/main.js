import App from './App.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
const routes = [
    { path: '/Login', component : Login },
    { path: '/Register', component : Register}
]
const router = VueRouter.createRouter({
    history : VueRouter.createWebHashHistory(),
    routes, 
})   
Vue.createApp(App).use(router).mount('#app');