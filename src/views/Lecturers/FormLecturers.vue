<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                          <!-- <div v-if="!submitted"> -->
                            <div class="col"> <h3>Tambah Dosen</h3> </div>
                                <validation-observer>
                                <form  role="form" @submit.prevent="submitLecturer">
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Nama</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control" 
                                               id="name" 
                                               name="name" 
                                               v-model="lecturer.name" 
                                               v-validate="'required'" 
                                               placeholder="Nama Lengkap" 
                                               :class="{ 'is-invalid': submitted && errors.has('name') }">
                                        <div  v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-3 col-form-label text-md-right">Email</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control" 
                                               id="email" 
                                               name="email"
                                               v-model="lecturer.email"  
                                               v-validate="'required'"  
                                               placeholder="Email UGM"
                                               :class="{ 'is-invalid': submitted && errors.has('email') }">
                                        <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nip" class="col-md-3 col-form-label text-md-right">NIP</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control"
                                               id="nip"
                                               name="nip" 
                                               v-model="lecturer.nip"
                                               v-validate="'required'"
                                               placeholder="Nomor Induk Pegawai"
                                               :class="{ 'is-invalid' : submitted && errors.has('nip') }">
                                        <div v-if="submitted && errors.has('nip')" class="invalid-feedback">{{ errors.first('nip') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nidn" class="col-md-3 col-form-label text-md-right">NIDN</label>
                                        <div class="col-md-7">
                                        <input type="text" 
                                               class="form-control" 
                                               id="nidn"
                                               name="nidn"
                                               v-model="lecturer.nidn" 
                                               v-validate="'required'"
                                               placeholder="Nomor Induk Dosen Nasional"
                                               :class="{ 'is-invalid' : submitted && errors.has('nidn') }">
                                        <div v-if="submitted && errors.has('nidn')" class="invalid-feedback">{{ errors.first('nidn') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row" >
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <router-link :to="{name: 'Dosen'}">
                                    <base-button type = "danger">Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" >
                                    <base-button @click="submitLecturer" v-bind:disabled="invalid" class="btn btn-success" type="success">Submit</base-button>
                                    </div>
                                    </div>                                                                 
                                </form>
                                </validation-observer>
                            <!-- </div> -->
                            <!-- <div v-else>
                                    <div class="col-pr-1">
                                    <div class="form-group row"></div>
                                    <base-alert type="success">
                                    <strong>Success!</strong> Data dosen berhasil ditambahkan!
                                    </base-alert>
                                    </div> 
                                    <div class="form-group row">
                                    <div class="col-sm-1">
                                    <router-link :to="{name: 'Dosen'}">
                                    <base-button type = "danger">Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" >
                                    <base-button type="primary" @click="newLecturer">Tambah Dosen</base-button>
                                    <div class="form-group row"></div>
                                    </div>
                              </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
</template>




<script>
import LecturerDataService from "../../services/LecturerDataService";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "add-student",
  data() {
    return {
      lecturer: {
        id: null,
        first_name:'',
        name:'',
        email:'',
        nip:'',
        nidn:'',
      },
      submitted: false
    };
  },
  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email },
      nip: { required },
      nidn: {required }
    }
  },
  methods: {
    submitLecturer() {
      var data = {
       name:this.lecturer.name,
       email:this.lecturer.email,
       nip:this.lecturer.nip,
       nidn:this.lecturer.nidn
       
      };

      LecturerDataService.create(data)
        .then(response => {
          this.lecturer.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
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
    
    newLecturer() {
      this.submitted = false;
      this.lecturer = {};
    }
  },
};
</script>


