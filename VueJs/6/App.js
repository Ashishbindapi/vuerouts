import Fullname from './components/fullname.js'
const app = {
    components : {
        'full-name' : Fullname
    }
}

Vue.createApp(app).mount('#app') 