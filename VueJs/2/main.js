const app = {
    components : {
        'add-anythingh' :{
            template : `
            <input type="text" v-model="animal">
            <button @click="Addanimal">Add animal</button>
                <ul>
                    <li v-for="animal in animals">{{animal}} </li>
                </ul>
            <input type="text" v-model="car">
            <button @click="Addcar">Add Car</button>
                <ul>
                    <li v-for="car in cars">{{car}} </li>
                </ul>
            `,
            data(){
                return {
                    animal : '',
                    animals : [],
                    car : '',
                    cars :[],
                }
            },
            methods : {
                Addanimal (){
                   if(this.animal.length){
                     this.animals.push(this.animal)
                    this.animal = ''
                   }
                   
                },
                Addcar (){
                    if(this.car.length){
                      this.cars.push(this.car)
                     this.car = ''
                    }
                    
                 }
            }
        }
    }
}
Vue.createApp(app).mount('#app') 