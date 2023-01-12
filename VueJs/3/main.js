const app = {
    components : {
        'add-car' : {
            template : `
            <input type="text" v-model="car">
                <button @click="addcar">Add Car</button>
                    <ul>
                        <li v-for="car in cars">{{car}} </li>
                    </ul>
            `,
            data() {
                return {
                    car : '',
                    cars : [],
                }
            },
            methods : {
                addcar(){
                    if(this.car.length){
                        this.cars.push(this.car)
                        this.car = ''
                    }
                }
            }
        },
        'add-animal' : {
            template : `
                <input type="text" v-model="animal">
                <button @click="Addanimal">Add animal</button>
                    <ul>
                        <li v-for="animal in animals">{{animal}} </li>
                    </ul> `,
            data(){
                return {
                    animal : '',
                    animals : [],
                }
            },
            methods : {
                Addanimal (){
                    if(this.animal.length){
                        this.animals.push(this.animal)
                    this.animal = ''
                    }
                    
                }
            }
        }
    }
}

Vue.createApp(app).mount('#app') 