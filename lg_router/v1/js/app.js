import Public from './components/public.js';
import Protected from './components/protected.js';
export default {
    data(){
        return{
            isLogin : false
        }
    },
    template : `
        <div>
            <Public v-if="isLogin == false" />
            <Protected v-if="isLogin == true" />
        </div>`,

    components : { Public , Protected },

    mounted : function(){
        axios({
            method : 'GET',
            url : './api/login.php',
        }).then(
            (response) => {
                var isLogin = response.data.login
                this.isLogin = isLogin
                console.log(isLogin)
            }
        )
    }
}