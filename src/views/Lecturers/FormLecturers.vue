<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                       <div v-if="!submitted">
                            <div class="col"> <h3>Tambah Dosen</h3> </div>
                                <form>
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Nama</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="lecturer.name" placeholder="Nama Lengkap">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-3 col-form-label text-md-right">Email</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="lecturer.email" placeholder="Email UGM">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nip" class="col-md-3 col-form-label text-md-right">NIP</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="lecturer.nip" placeholder="Nomor Induk Pegawai">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="nidn" class="col-md-3 col-form-label text-md-right">NIDN</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="lecturer.nidn" placeholder="Nomor Induk Dosen Nasional">
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
                                    <base-button @click="submitLecturer" class="btn btn-success" type="success">Submit</base-button>
                                    </div>
                                    </div>                                                                 
                                </form>
                            </div>
                            <div v-else>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
</template>




<script>
import LecturerDataService from "../../services/LecturerDataService";

export default {
  name: "add-student",
  data() {
    return {
      lecturer: {
        id: null,
        name:'',
        email:'',
        nip:'',
        nidn:'',
      },
      submitted: false
    };
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
    },
    
    newLecturer() {
      this.submitted = false;
      this.lecturer = {};
    }
  },
};
</script>


