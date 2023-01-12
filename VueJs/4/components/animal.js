   export default {
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
  