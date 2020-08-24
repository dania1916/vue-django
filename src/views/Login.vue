<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-transparent pb-5">
                        <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                        <div class="btn-wrapper text-center">
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                                <span class="btn-inner--text">Github</span>
                            </a>
                            <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                                <span class="btn-inner--text">Google</span>
                            </a>
                        </div>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Or sign in with credentials</small>
                        </div>
    <!-- <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model.trim="$v.username.$model"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.username.$error }"
        >
        <div v-if="submitted && !$v.username.required" class="invalid-feedback">Username is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model.trim="$v.password.$model"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.password.$error }"
        >
        <div v-if="submitted && !$v.password.required" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="login"  :disabled="loading">
          <span class="spinner-border spinner-border-sm" v-show="loading"></span>
          <span>Login</span>
        </button>
      </div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
    </form> -->
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Remember me</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" @click="login" class="my-4">Sign In</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template><script>
import { required } from "vuelidate/lib/validators";

  export default {
    name: 'login',
    data() {
      return {
        model: {
          email: '',
          password: ''
        }
      }
    },
    validations: {
        username: { required },
        password: { required }
  },
    methods:{
      login: function () {
        let email = this.model.email
        let password = this.model.password
        this.$store.dispatch('login', {email, password})
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
      }
    },
        onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.loading = true;
      this.$store.dispatch('login', this.model.email, this.model.password)
    //   authenticationService.login(this.model.username, this.model.password).then(
        error => {
          this.error = error;
          this.loading = false;
        }
    //   );
    }
  }
</script>
<style>
</style>
<style>
</style>