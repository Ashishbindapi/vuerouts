export default {
    template : `
        <slot/>
        <input type="text" v-model="itom">
        <button @click="additom">Add {{button}}</button>
            <ul>
                <li v-for="itom in itoms">{{itom}}</li>
            </ul>`,
            
    props : {
        button : String
    },
    
    data(){
        return {
        itom : '',
        itoms : [],
        }
    },
    methods : {
        additom (){
            if(this.itom.length)
            this.itoms.push(this.itom)
            this.itom = ''
        }
    } 
}