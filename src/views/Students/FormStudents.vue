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
                                        <label for="student_name" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" required id="student_name" v-model="student.student_name" name="student_name" placeholder="Nama Lengkap">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="student_name" class="col-sm-3 col-form-label text-md-right">Foto</label>
                                        <div class="col-sm-7">
                                        <input type="file" accept="image/*"  id="file" class="form-control" ref="file" v-on:@change="handleFileUpload()">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="student_nim" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="student_nim" v-model="student.student_nim" name="student_nim" placeholder="18/425698/SV/14840">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="student_number_phone" class="col-sm-3 col-form-label text-md-right">Nomor HP</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="student_number_phone" v-model="student.student_number_phone" name="student_number_phone" placeholder="2020">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="student_email" class="col-sm-3 col-form-label text-md-right">Email</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="student_email" v-model="student.student_email" name="student_email" placeholder="name@mail.ugm.ac.id">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="student_address" class="col-sm-3 col-form-label text-md-right">Alamat</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="student_address" v-model="student.student_address" name="student_address" placeholder="Jetis RT 07 RW 03 Kunden Karanganom">
                                        </div>
                                    </div>
                                        <div class="form-group row">
                                        <label for="student_postal_code" class="col-sm-3 col-form-label text-md-right">Kode Pos</label>
                                        <div class="col-sm-7">
                                        <input type="number" class="form-control" id="student_postal_code" v-model="student.student_postal_code" name="student_postal_code" placeholder="57475">
                                        </div>
                                    </div>
                                                                        <div class="form-group row">
                                        <label for="student_city" class="col-sm-3 col-form-label text-md-right">Kota/Kabupaten</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="student_city" v-model="student.student_city" name="student_city" placeholder="Klaten">
                                        </div>
                                    </div>
                                                                        <div class="form-group row">
                                        <label for="student_province" class="col-sm-3 col-form-label text-md-right">Provinsi</label>
                                        <div class="col-sm-7">
                                        <input type="text" class="form-control" id="student_province" v-model="student.student_province" name="student_province" placeholder="Jawa Tengah">
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
                            <div v-else>
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
                            </div>
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
        student_name:'',
        student_nim:'',
        student_number_phone:'',
        student_email:'',
        student_address:'',
        file:'',
        student_postal_code:'',
        student_city:'',
        student_province:'',
      },
      submitted: false
    };
  },
  methods: {
    submitStudent() {
      let formData = new FormData();
      formData.append('file',this.student.file);
      var data = {
        student_name: this.student.student_name,
        student_nim: this.student.student_nim,
        student_number_phone: this.student.student_number_phone,
        student_email:this.student.student_email,
        student_address:this.student.student_address,
        file:this.file,
        student_city: this.student.student_city,
        student_postal_code:this.student.student_postal_code,
        student_province: this.student.student_province
      };

      StudentDataService.create(data, formData)
        .then(response => {
          this.student.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
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
  handleFileUpload(){
    this.student.file = this.student.$refs.file.files[0];
  }
};
</script>