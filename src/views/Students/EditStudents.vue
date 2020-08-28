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
                                    <h3 class="mb-0">Edit Mahasiswa</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                          <validation-observer>
                            <form @submit.prevent>
                              <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Lengkap"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.first_name"
                                                        />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.last_name"
                                                        />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.nim"
                                                        />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="No Telepon"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.number_phone"
                                                        id="phone" 
                                                        name="phone"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('phone') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('phone')" class="invalid-feedback">{{ errors.first('phone') }}</div>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                                        id="email" 
                                                        name="email"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('email') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                                        </div>
                                    </div>
                                    <!-- Kontak -->
                                    <hr class="my-4" />
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Desa"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.village"
                                                        id="village" 
                                                        name="village"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('village') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('village')" class="invalid-feedback">{{ errors.first('village') }}</div>
                                            
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RT"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.rt_village"
                                                        id="rt" 
                                                        name="rt"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('rt') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('rt')" class="invalid-feedback">{{ errors.first('rt') }}</div>
                                            
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RW"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.rw_village"
                                                        id="rw" 
                                                        name="rw"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('rw') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('rw')" class="invalid-feedback">{{ errors.first('rw') }}</div>
                                            
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kecamatan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.sub_district"
                                                        id="district" 
                                                        name="district"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('district') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('district')" class="invalid-feedback">{{ errors.first('district') }}</div>
                                            
                                        </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kota / Kabupaten"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.city"
                                                        id="city" 
                                                        name="city"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('city') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('city')" class="invalid-feedback">{{ errors.first('city') }}</div>
                                            
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Provinsi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.province"
                                                        id="province" 
                                                        name="province"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('province') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('province')" class="invalid-feedback">{{ errors.first('province') }}</div>
                                            
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kode Pos"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.postal_code"
                                                        id="postal_code" 
                                                        name="postal_code"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('postal_code') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('postal_code')" class="invalid-feedback">{{ errors.first('postal_code') }}</div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 text-left">
                                    <router-link :to="{name: 'Mahasiswa'}">
                                    <base-button href="#!" size="md" type="default" class="float-left" @click="updateStudent" v-bind:disabled="invalid">Simpan</base-button>
                                    </router-link>
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
import StudentDataService from "../../services/StudentDataService";
import { required, email } from "vuelidate/lib/validators";
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
          }]
      }
    },
 validations: {
    form: {
      phone: { required },
      email: { required, email },
      village: { required },
      rt: { required },
      rw: { required },
      city: { required },
      province: { required },
      postal_code: {required }
    }
  },
    methods: {
      getStudent(id) {
      StudentDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
     retrieveStudent() {
      StudentDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateStudent() {
    StudentDataService.update(this.tableData.id, this.tableData)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    },
    mounted() {
    this.getStudent(this.$route.params.id);
  }
}
</script>
<style></style>
