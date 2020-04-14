<template>
    <section>
        <h1>Basic Form Validation</h1>

        <div v-if="errors">
            <div class="alert alert-danger">
                <strong>There were errors submitting your form</strong>
                <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </div>
        </div>

        <form @submit.prevent="submitForm">

            <div class="form-group required">
                <label>Email</label>
                <input type="text" v-model="email" class="form-control">
            </div>

            <div class="form-group required">
                <label>Name</label>
                <input type="text" v-model="name" class="form-control">
            </div>

            <div class="form-group required">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control">
            </div>

            <div class="form-group required">
                <label>Repeat password</label>
                <input type="password" v-model="password_repeat" class="form-control">
            </div>

            <div class="form-group">
                <label>Additonal Info</label>
                <textarea class="form-control" v-model="info"></textarea>
            </div>

            <div class="form-group">
                <input type="submit" class="btn btn-primary">
            </div>

        </form>



    </section>
</template>

<script>
    export default {
        name: "ValidationTest",
        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_repeat: null,
                info: null,
                errors: null
            }
        },
        methods: {
            submitForm() {

                this.errors = [];

                if (!this.email) {
                    this.errors.push("Email cannot be blank");
                }
                if (!this.isEmail(this.email)) {
                    this.errors.push("Email is not valid");
                }
                if (!this.name) {
                    this.errors.push("Name cannot be blank")
                }
                if (!this.password || this.password != this.password_repeat) {
                    this.errors.push("Passwords do not match")
                }


                // event.preventDefault();

            },
            isEmail() {
                return false;
            }

        }
    }
</script>





<style scoped>
    form {
        width: 600px;
    }

</style>
