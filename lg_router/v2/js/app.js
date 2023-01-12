import Header from './componets/theme/header.js';
import Footer from './componets/theme/footer.js';
export default {
    components : { Header , Footer},
    template :`
    <Header :login="login" />
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <router-view :login="login" />
                </div>
            </div>
            <Footer />
        </div>
    `,
    data(){
        return {
            login : false
        }
    },
    mounted : function(){
        axios({
            method : 'GET',
            url : './api/login.js',
        }).then(
            (Response) => {
                var isLogin = Response.data.login
                this.login = isLogin
                console.log(isLogin)
            }
        )
    }
}