import Car from './components/car.js'
import Animal from './components/animal.js'

const app = {
    components : {
        'add-car' : Car,
        'add-animal' :Animal,
        
    }
}

Vue.createApp(app).mount('#app')