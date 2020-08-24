<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                            <div class="col"> <h3>Mahasiswa Baru</h3> </div>
                                <!-- <div v-if="!submitted"> -->
                                <validation-observer>
                                <form method="POST" enctype="multipart/form-data">
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-sm-3 col-form-label text-md-right">Nama Depan</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="name" v-model="student.first_name" name="name" placeholder="Nama Depan"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('name') }">
                                        <div v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="last" class="col-sm-3 col-form-label text-md-right">Nama Belakang</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="last_name" v-model="student.last_name" name="last_name" placeholder="Nama Belakang"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('last_name') }">
                                        <div v-if="submitted && errors.has('last_name')" class="invalid-feedback">{{ errors.first('last_name') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nim" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="nim" v-model="student.nim" name="nim" placeholder="Nim"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('nim') }">
                                        <div v-if="submitted && errors.has('nim')" class="invalid-feedback">{{ errors.first('nim') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="number_phone" class="col-sm-3 col-form-label text-md-right">Nomor Telepon</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="number_phone" v-model="student.number_phone" name="number_phone" placeholder="Nomor Telepon"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('number_phone') }">
                                        <div v-if="submitted && errors.has('number_phone')" class="invalid-feedback">{{ errors.first('number_phone') }}</div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="email" class="col-sm-3 col-form-label text-md-right">Email</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="email" v-model="student.email" name="email" placeholder="name@mail.ugm.ac.id"
                                         v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('email') }">
                                        <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="address" class="col-sm-3 col-form-label text-md-right">Desa</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="address" v-model="student.village" name="village" placeholder="Desa"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('village') }">
                                        <div v-if="submitted && errors.has('village')" class="invalid-feedback">{{ errors.first('village') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="postal_code" class="col-sm-3 col-form-label text-md-right">RT</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="postal_code" v-model="student.rt_village" name="rt_village" placeholder="Rt"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('rt_village') }">
                                        <div v-if="submitted && errors.has('rt_village')" class="invalid-feedback">{{ errors.first('rt_village') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="postal_code" class="col-sm-3 col-form-label text-md-right">RW</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="postal_code" v-model="student.rw_village" name="rw_village" placeholder="Rw"
                                         v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('rw_village') }">
                                        <div v-if="submitted && errors.has('rw_village')" class="invalid-feedback">{{ errors.first('rw_village') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="address" class="col-sm-3 col-form-label text-md-right">Kecamatan</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="address" v-model="student.sub_district" name="sub_district" placeholder="Kecamatan"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('sub_district') }">
                                        <div v-if="submitted && errors.has('sub_district')" class="invalid-feedback">{{ errors.first('sub_district') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="city" class="col-sm-3 col-form-label text-md-right">Kota/Kabupaten</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="city" v-model="student.city" name="city" placeholder="Kota / Kab"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('city') }">
                                        <div v-if="submitted && errors.has('city')" class="invalid-feedback">{{ errors.first('city') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="province" class="col-sm-3 col-form-label text-md-right">Provinsi</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="province" v-model="student.province" name="province" placeholder="Provinsi"
                                         v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('province') }">
                                        <div v-if="submitted && errors.has('province')" class="invalid-feedback">{{ errors.first('province') }}</div>
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="postal_code" class="col-sm-3 col-form-label text-md-right">Kode Pos</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="postal_code" v-model="student.postal_code" name="postal_code" placeholder="Kode Pos"
                                        v-validate="'required'" :class="{ 'is-invalid' : submitted && errors.has('postal_code') }">
                                        <div v-if="submitted && errors.has('postal_code')" class="invalid-feedback">{{ errors.first('postal_code') }}</div>
                                        </div>
                                    </div>
                                    <div class="form-group row" >
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <router-link :to="{name: 'Mahasiswa'}">
                                    <base-button type = "danger">Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" >
                                    <base-button @click="submitStudent" v-bind:disabled="invalid" class="btn btn-success" type="success">Submit</base-button>
                                    </div>
                                    </div> 
                                </form>
                              </validation-observer>
                            <!-- </div> -->
                            <!-- <div v-else>
                                <div class="col-pr-1">
                                <div class="form-group row"></div>
                                <base-alert type="success">
                                <strong>Success!</strong> Data mahasiswa berhasil ditambahkan!
                                </base-alert>
                                </div> 
                                <div class="form-group row">
                                <div class="col-sm-1">
                                <router-link :to="{name: 'Mahasiswa'}">
                                <base-button type = "danger">Kembali </base-button>
                                </router-link>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <base-button type="primary" @click="newStudent">Tambah Mahasiswa</base-button>
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
import StudentDataService from "../../services/StudentDataService";
import { required, email} from "vuelidate/lib/validators";

export default {
  name: "add-student",
  data() {
    return {
      student: {
        id: null,
        first_name:'',
        last_name:'',
        nim:'',
        number_phone:'',
        email:'',
        village:'',
        rt_village:'',
        rw_village:'',
        sub_district:'',
        city:'',
        province:'',
        postal_code:'',
      },
      submitted: false
    };
  },
  validations: {
    form: {
      name: { required },
      last_name: { required },
      nim: { required },
      number_phone: { required },
      email: { required, email },
      village: { required },
      rt_village: { required },
      rw_village: { required },
      sub_district: { required },
      city: { required },
      province: { required },
      postal_code: { required },
    }
  },
  methods: {
    submitStudent() {
      // let formData = new FormData();
      // formData.append('file',this.student.file); 
      var data = {
        first_name: this.student.first_name,
        last_name: this.student.last_name,
        nim: this.student.nim,
        number_phone: this.student.number_phone,
        email:this.student.email,
        village:this.student.village,
        rt_village:this.student.rt_village,
        rw_village:this.student.rw_village,
        sub_district:this.student.sub_district,
        city: this.student.city,
        postal_code:this.student.postal_code,
        province: this.student.province
      };

      StudentDataService.create(data)
        .then(response => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          
        })
        .catch(e => {
          console.log(e);
        });
        this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push('/students')
                }
            });
    },
    
    newStudent() {
      this.submitted = false;
      this.student = {};
    }
  },
  // handleFileUpload(){
    // this.student.file = this.student.$refs.file.files[0];
  // }
};
</script>