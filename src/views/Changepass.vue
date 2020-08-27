<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 200px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
            </div>
        </base-header>

        <div class="container-fluid mt--8">
            <div class="row">
                <div class="card-body px-lg-9 py-11">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Ubah Password</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                          <validation-observer>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted"></h6>
                                <div class="pl-lg-4">
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Password Lama</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control" 
                                               v-validate="'required'" 
                                               id="password" 
                                               v-model="tableData" 
                                               name="password" 
                                               :class="{ 'is-invalid': submitted && errors.has('password') }">
                                               <div  v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                                        </div>
                                    </div> 
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Password Baru</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control" 
                                               v-validate="'required'" 
                                               id="new_password" 
                                               v-model="tableData" 
                                               name="new_password"
                                               :class="{ 'is-invalid': submitted && errors.has('new_password') }">
                                               <div  v-if="submitted && errors.has('new_password')" class="invalid-feedback">{{ errors.first('new_password') }}</div>
                                        </div>
                                    </div> 
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Verifikasi Password Baru</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control" 
                                               v-validate="'required'" 
                                               id="new_password" 
                                               v-model="tableData" 
                                               name="new_password" 
                                               :class="{ 'is-invalid': submitted && errors.has('new_password') }">
                                               <div  v-if="submitted && errors.has('new_password')" class="invalid-feedback">{{ errors.first('new_password') }}</div>
                                        </div>
                                    </div> 
                                </div>
                                <hr class="my-4" />
                                <div class="form-group row" >
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <router-link :to="{name: 'dashboard'}">
                                    <base-button type = "danger">Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" > 
                                    <base-button v-bind:disabled="invalid" class="btn btn-success" type="success">Update</base-button>
                                    </div>
                                    </div> 
                            </form>
                            </validation-observer>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";


export default {
    name: 'user-profile',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        pagination: {
        default: 1
      },
        tableData: 
        [{
          }],
        submitted : false
      }
    },
    validations: {
    form: {
      password: { required },
      new_password: { required }
    }
  },
}
</script>