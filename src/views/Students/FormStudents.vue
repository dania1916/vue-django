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
                                <div v-if="!submitted">
                                <form method="POST" enctype="multipart/form-data">
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-sm-3 col-form-label text-md-right">Nama Depan</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" required id="name" v-model="student.first_name" name="name" placeholder="Nama Depan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="col-sm-3 col-form-label text-md-right">Nama Belakang</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" required id="name" v-model="student.last_name" name="name" placeholder="Nama Belakang">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nim" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="nim" v-model="student.nim" name="nim" placeholder="Nim">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="number_phone" class="col-sm-3 col-form-label text-md-right">Nomor Telepon</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="number_phone" v-model="student.number_phone" name="number_phone" placeholder="Nomor Telepon">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="email" class="col-sm-3 col-form-label text-md-right">Email</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="email" v-model="student.email" name="email" placeholder="name@mail.ugm.ac.id">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="address" class="col-sm-3 col-form-label text-md-right">Desa</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="address" v-model="student.village" name="village" placeholder="Desa">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="postal_code" class="col-sm-3 col-form-label text-md-right">RT</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="postal_code" v-model="student.rt_village" name="rt_village" placeholder="Rt">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="postal_code" class="col-sm-3 col-form-label text-md-right">RW</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="postal_code" v-model="student.rw_village" name="rw_village" placeholder="Rw">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="address" class="col-sm-3 col-form-label text-md-right">Kecamatan</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="address" v-model="student.sub_district" name="sub_district" placeholder="Kecamatan">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="city" class="col-sm-3 col-form-label text-md-right">Kota/Kabupaten</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="city" v-model="student.city" name="city" placeholder="Kota / Kab">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="province" class="col-sm-3 col-form-label text-md-right">Provinsi</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="province" v-model="student.province" name="province" placeholder="Provinsi">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="postal_code" class="col-sm-3 col-form-label text-md-right">Kode Pos</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="postal_code" v-model="student.postal_code" name="postal_code" placeholder="Kode Pos">
                                        </div>
                                    </div>
                                                  
                                    <div class="form-group row">
                                        <label for="inputNamaPerusahaan" class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-7">
                                            <base-button @click="submitStudent" class="btn btn-success" type="success">Submit</base-button>
                                            <router-link :to="{name: 'Mahasiswa'}">
                                            <base-button type="danger">Kembali</base-button>
                                            </router-link>
                                        </div> 
                                    </div> 
                                </form>
                            </div>
                            <!-- <div v-else>
                              <div class="col">
                                <div class="form-group row"></div>
                                <base-alert type="success">
                                <strong>Success!</strong> Data mahasiswa baru berhasil ditambahkan!
                                </base-alert>
                                </div> 
                                <div class="col">
                                 <base-button type="secondary" @click="newStudent">Detail</base-button>
                                <base-button type="primary" @click="newStudent">Tambah Mahasiswa</base-button>

                                 <div class="form-group row"></div>
                                </div> 
                                <router-link :to="{name: 'Mahasiswa'}">
                                </router-link>
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
          this.$router.push('/')
        })
        .catch(e => {
          console.log(e);
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