export default
{
    props: ['login'],
    template:  `
    <div class="row justify-content-center"> 
        <div class="col-4 mt-4">
            <h1 class="text-center">Login</h1>      
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" v-model="email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary" v-on:click.prevent="createAccount">submit</button>
            </form>
        </div>
    </div>`,
    watch: {
        login: function(val) {
            if (val == true) {
                this.$router.push({ name: 'dashboard' });
            }
        }
    },
    mounted : function () {
        if(this.login == true){
            this.$router.push({ name: 'dashboard' });
        }
    }
}