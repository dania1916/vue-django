<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                       <strong> <small>Sign Up with Credentials</small></strong>
                    </div>
                    <validation-observer>
                    <form role="form" @submit.prevent="handleSubmit">
                      <div class="form-group">
                        <div class="form-group">
                              <input  type="text" v-model="model.first_name" v-validate="'required'" id="firstName" name="firstName" placeholder="First Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                              <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                          </div>
                           <div class="form-group">
                              <input  type="text" v-model="model.last_name" v-validate="'required'" id="lastName" name="lastName" placeholder="List Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('lastName') }" />
                              <div v-if="submitted && errors.has('lastName')" class="invalid-feedback">{{ errors.first('lastName') }}</div>
                          </div>
                          <div class="form-group">
                              <input type="email" v-model="model.email" placeholder="Email" v-validate="'required|email'" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && errors.has('email') }" />
                              <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                          </div>
                          <div class="form-group">
                              <input type="password" v-model="model.password" placeholder="Password" v-validate="{ required: true, min: 6 }" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && errors.has('password') }" />
                              <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                          </div>
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                </base-checkbox>
                            </div>
                    
                        <div class="form-group">
                           <div class="text-center">
                            <base-button type="primary"  @click="handleSubmit" v-bind:disabled="invalid" class="my-4">Create Account</base-button>
                           </div>
                        </div>
                      </div>
                    </form>
                  </validation-observer>
                  <!-- </div> -->
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                        <router-link to="/reset" class="text-light">
                        <small>Forgot password?</small>
                        </router-link>
                    </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>

import { required, email, minLength } from "vuelidate/lib/validators";


export default {
    name: 'register',
    data() {
      return {
        model: {
          first_name:'',
          last_name:'',
          email: '',
          password: '',
        },
        submitted: false
      }
    },
    validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email },
      password: { required, minLength: minLength(6)}
    }
  },
    methods:{
      handleSubmit() {
        let data = {
                first_name: this.model.first_name,
                last_name: this.model.last_name,
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