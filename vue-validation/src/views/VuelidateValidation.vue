<template>
    <section>
        <h1>Form Validation (Vuelidate)</h1>

        <form @submit.prevent="onSubmit">

            <div class="form-group required" :class="{ 'form-group--error': $v.email.$error }">
                <label>Email</label>
                <input type="text" v-model="email" class="form-control">
                <div class="alert-danger" v-if="!$v.email.required">Email is required</div>
            </div>

            <div class="form-group required" :class="{ 'form-group--error': $v.name.$error }">
                <label>Name</label>
                <input type="text" v-model="name" class="form-control">
                <div class="alert-danger" v-if="!$v.name.required">Name is required</div>

            </div>

            <div class="form-group required" :class="{ 'form-group--error': $v.password.$error }">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control">
                <div class="alert-danger" v-if="!$v.password.required">Password is required</div>
                <div class="alert-danger" v-if="!$v.password.minLength">Password is too short. Minimal password length is 6 characters</div>
                <div class="alert-danger" v-if="!$v.password.sameAsPassword">Passwords do not match</div>
            </div>

            <div class="form-group required" :class="{ 'form-group--error': $v.password.$error }">
                <label>Repeat password</label>
                <input type="password" v-model="password_repeat" class="form-control">
                <div class="alert-danger" v-if="!$v.password.sameAsPassword">Passwords do not match</div>
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

    import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

    import { validationMixin } from 'vuelidate'


    export default {
        name: "VuelidateValidation",
        mixins: [validationMixin],
        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_repeat: null,
                info: null,
            }
        },
        validations: {
            name: { required },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                sameAsPassword: sameAs('password_repeat')
            },
        },
        methods: {
            onSubmit() {
                console.log("Form Submitted");
                this.$v.$touch()
                console.log(this.$v)
            },
        }
    }
</script>


<style scoped>
    form {
        width: 600px;
    }
</style>
