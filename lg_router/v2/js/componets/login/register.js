export default
{
    props: ['login'],
    template: `
    <div class="row justify-content-center"> 
        <div class="col-4 mt-4">
            <h1 class="text-center">Register here</h1>
            <!--div class="alert alert-warning" v-html="error"></div-->    
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First name</label>
                    <input type="text" class="form-control" v-model="first_name">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Last name</label>
                    <input type="text" class="form-control" v-model="last_name">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" v-model="username">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" v-model="cnf_password">
                </div>
                <button type="button" v-on:click.prevent="createAccount" class="btn btn-primary">Register</button>
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