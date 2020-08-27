<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                       <strong> <medium>Reset Password </medium></strong>
                       <hr class="my-4" />
                       <small>Enter your email and we will send you a reset!</small>
                    
                    </div>
                    <validation-observer>
                    <form role="form" @submit.prevent="handleSubmit">
                      <div class="form-group">
                          <div class="form-group">
                              <input type="email" v-model="model.email" placeholder="Email" v-validate="'required|email'" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                              <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                          </div>
                        <div class="form-group">
                           <div class="text-center">
                            <base-button type="primary"  @click="handleSubmit" v-bind:disabled="invalid" class="my-4">Submit</base-button>
                           </div>
                        </div>
                      </div>
                    </form>
                  </validation-observer>
                  <!-- </div> -->
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6 text-left">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
                <div class="col-6 text-right">
                        <router-link to="/register" class="text-light">
                        <small>Create new account</small>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>

import { required, email } from "vuelidate/lib/validators";


export default {
    name: 'register',
    data() {
      return {
        model: {
          email: '',
        },
        submitted: false
      }
    },
    validations: {
    form: {
      email: { required, email },
    }
  },
    methods:{
      handleSubmit() {
        let data = {
                email: this.model.email,
                password: this.model.password,
                profile:{}
            }
            this.$store.dispatch('register', data)
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push('/login')
                }
            });
        }
    },
  }
</script>