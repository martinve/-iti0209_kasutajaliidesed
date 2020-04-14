<template>
    <div id="app">
        <div class="container">
            <header class="mx-0 my-4">
                <router-link to="/basic">Basic Validation</router-link> |
                <router-link to="/vee">VeeValidate</router-link> |
                <router-link to="/vue">Vuelidate</router-link>
            </header>
            <div class="row">
                <div class="col">
                    <router-view/>
                </div>
            </div>
        </div>


    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    header a {
        font-weight: bold;
        color: #2c3e50;
    }

    header a.router-link-exact-active {
        color: #42b983;
    }


    .required label:after {
        content: " *";
        color: red;
    }

</style>
