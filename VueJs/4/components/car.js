   export default {
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
   }
   
    