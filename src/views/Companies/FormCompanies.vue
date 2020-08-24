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
                            <div class="col"> <h3>Tambah Perusahaan</h3> </div>
                            <validation-observer>
                                <form>
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Nama</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.name" placeholder="Nama Perusahaan"
                                        id="name" name="name" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('name') }">
                                        <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="business" class="col-md-3 col-form-label text-md-right">Jenis Bisnis</label>
                                        
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.business" placeholder="IT Consultant, ISP, Pertambangan"
                                        id="business" name="business" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('business') }">
                                        <div v-if="submitted && errors.has('business')" class="invalid-feedback">{{ errors.first('business') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="address" class="col-md-3 col-form-label text-md-right">Alamat</label>
                                        <div class="col-md-7">
                                        <textarea class="form-control" required v-model="company.address" rows="3" placeholder="Alamat Lengkap"
                                        id="address" name="address" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('address') }"></textarea>
                                        <div v-if="submitted && errors.has('address')" class="invalid-feedback">{{ errors.first('address') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="website" class="col-md-3 col-form-label text-md-right">Website</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.website" placeholder="Website Perusahaan" 
                                        id="website" name="website" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('website') }">
                                        <div v-if="submitted && errors.has('website')" class="invalid-feedback">{{ errors.first('website') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-3 col-form-label text-md-right">Email</label>
                                        <div class="col-md-7">
                                        <input type="email" class="form-control" required v-model="company.email"  placeholder="Email Perusahaan"
                                        id="email" name="email" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('email') }">
                                        <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="pic_name" class="col-md-3 col-form-label text-md-right">Nama PIC</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.pic_name" placeholder="Nama PIC Perusahaan"
                                        id="pic" name="pic" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('pic') }">
                                        <div v-if="submitted && errors.has('pic')" class="invalid-feedback">{{ errors.first('pic') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="pic_number" class="col-md-3 col-form-label text-md-right">Nomor Telepon PIC</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.pic_number" placeholder="Nomor HP PIC"
                                        id="phone" name="phone" v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('phone') }">
                                        <div v-if="submitted && errors.has('phone')" class="invalid-feedback">{{ errors.first('phone') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row" >
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <router-link :to="{name: 'Perusahaan'}">
                                    <base-button type = "danger">Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" > 
                                    <base-button @click="submitCompany" v-bind:disabled="invalid" class="btn btn-success" type="success">Submit</base-button>
                                    </div>
                                    </div>
                                </form>
                                </validation-observer>
                            <!-- </div> -->
                         <!-- <div v-else>
                           <div class="col-pr-1">
                                <div class="form-group row"></div>
                                <base-alert type="success">
                                <strong>Success!</strong> Data perusahaan berhasil ditambahkan!
                                </base-alert>
                                </div> 
                                <div class="form-group row">
                                <div class="col-sm-1">
                                <router-link :to="{name: 'Perusahaan'}">
                                <base-button type = "danger">Kembali </base-button>
                                </router-link>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <base-button type="primary" @click="newCompany">Tambah Dosen</base-button>
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
import CompanyDataService from "../../services/CompanyDataService";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "add-student",
  data() {
    return {
      company: {
        id: null,
        name:'',
        business:'',
        address:'',
        website:'',
        email:'',
        pic_name:'',
        pic_number:'',
      },
      submitted: false
    };
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      business: { required },
      address: { required },
      website: {required },
      pic: { required },
      phone: { required }
    }
  },
  methods: {
    submitCompany() {
      var data = {
       name:this.company.name,
       business:this.company.business,
       address:this.company.address,
       website:this.company.website,
       email:this.company.email,
       pic_name:this.company.pic_name,
       pic_number:this.company.pic_number
      };

      CompanyDataService.create(data)
        .then(response => {
          this.company.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
        this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push('/companies')
                }
            });
    },
    
    newCompany() {
      this.submitted = false;
      this.company = {};
    }
  },
};
</script>