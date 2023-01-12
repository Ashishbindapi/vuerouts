import Itom from './components/itom.js'

const app = {
    components : {
        'list-itom' : Itom,
    }
}

Vue.createApp(app).mount('#app') 