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
                                    <h3 class="mb-0">Detail Dosen</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                          <validation-observer>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4"></h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Lengkap"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name"
                                                        v-validate="'required'" 
                                                        name="name"
                                                        id="name"
                                                        :class="{ 'is-invalid': submitted && errors.has('name') }" 
                                            />
                                            <div  v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Alamat Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIP"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.nip"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIDN"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.nidn"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                            <div class="form-group row" >
                            <label class="col-sm-1"></label>
                            <div class = "" > 
                            <router-link :to="{name: 'Dosen'}">
                            <base-button type = "danger" >Kembali </base-button>
                            </router-link>
                            </div>
                            <div class = "pl-3" >
                            <!-- <router-link :to="{name: 'Dosen'}"> -->
                            <base-button type = "success" @click="updateLecturer">Update</base-button>
                            <!-- </router-link> -->
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
import LecturerDataService from "../../services/LecturerDataService";
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
        submitted: false
      };
    },
    validations: {
    form: {
      name: { required }
    }
  },
    methods: {
      getLecturer(id) {
      LecturerDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateLecturer() {
    LecturerDataService.update(this.tableData.id, this.tableData)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
        this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push('/lecturers')
                }
            });
    },

},

    mounted() {
    this.getLecturer(this.$route.params.id);
  }
}
</script>