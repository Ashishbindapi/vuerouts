const app ={
    data(){
        return {
            animal : '',
            animals : [],
            car : '',
            cars :[],
            bycke : '',
            byckes : [],
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
            
         },
         Addbycke (){
            if(this.bycke.length){
                this.byckes.push(this.bycke)
                this.bycke = ''
            }
         }
    }
}
Vue.createApp(app).mount('#app')