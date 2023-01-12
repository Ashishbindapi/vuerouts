export default {
    props: ['login'],
    template : `
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Shoppe</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><router-link class="nav-link" to="/">Dashboard</router-link></li>
                </ul>
                <span class="navbar-text">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="!login">
                        <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/register">Register</router-link></li>
                    </ul>
                    <div v-else>Welcome Ashish Kumar</div>
                </span>
                </div>
            </div>
        </nav>
    `
}