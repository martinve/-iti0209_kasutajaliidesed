<template>
    <section>
        <h1>Form Validation (VeeValidate)</h1>

        <ValidationObserver v-slot="{ handleSubmit }">
            <form  @submit.prevent="handleSubmit(onSubmit)">


            <ValidationProvider rules="email|required" v-slot="v">
                    <div class="form-group required">
                        <label class="required">Email</label>
                        <input type="text" v-model="email" class="form-control">
                        <span class="alert-danger">{{ v.errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider rules="required|email" v-slot="v">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="name" class="form-control">
                        <span class="alert-danger">{{ v.errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="v">
                    <div class="form-group required">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control">
                        <span class="alert-danger">{{ v.errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="v">
                    <div class="form-group required">
                        <label>Repeat password</label>
                        <input type="password" v-model="password_repeat" class="form-control">
                        <span class="alert-danger">{{ v.errors[0] }}</span>
                    </div>
                </ValidationProvider>

                <div class="form-group">
                    <label>Additonal Info</label>
                    <textarea class="form-control" v-model="info"></textarea>
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary">
                </div>

            </form>
        </ValidationObserver>


    </section>
</template>

<script>

    import {ValidationProvider, ValidationObserver, extend} from 'vee-validate';
    import { email, required } from 'vee-validate/dist/rules';

    extend('email', {
        ...email,
        message: "Email is not valid (please check)"
    });

    extend('required', {
        ...required,
        message: "This field cannot be left blank",
    });


    export default {
        name: "VeeValidation",
        components: {
            ValidationProvider, ValidationObserver
        },
        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_repeat: null,
                info: null,
                submitted: false
            }
        },
        methods: {
            onSubmit() {
               console.log("Form has been submitted")
            }
        }
    }
</script>


<style scoped>
    form {
        width: 600px;
    }
</style>
