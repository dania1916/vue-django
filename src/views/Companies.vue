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
                            <div class="col"> <h3>Tambah Perusahaan</h3> </div>
                                <form>
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Nama</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.name" placeholder="Nama Perusahaan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="business" class="col-md-3 col-form-label text-md-right">Jenis Bisnis</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.business" placeholder="IT Consultant, ISP, Pertambangan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="address" class="col-md-3 col-form-label text-md-right">Alamat</label>
                                        <div class="col-md-7">
                                        <textarea class="form-control" required v-model="company.address" rows="3" placeholder="Alamat Lengkap"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="website" class="col-md-3 col-form-label text-md-right">Website</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required v-model="company.website" placeholder="Website Perusahaan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="col-md-3 col-form-label text-md-right">Email</label>
                                        <div class="col-md-7">
                                        <input type="email" class="form-control" required v-model="company.email"  placeholder="Email Perusahaan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="pic_name" class="col-md-3 col-form-label text-md-right">Nama PIC</label>
                                        <div class="col-md-7">
                                        <input type="email" class="form-control" required v-model="company.pic_name" placeholder="Nama PIC Perusahaan">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="pic_number" class="col-md-3 col-form-label text-md-right">Nomor Telepon PIC</label>
                                        <div class="col-md-7">
                                        <input type="email" class="form-control" required v-model="company.pic_number" placeholder="Nomor HP PIC">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputNamaPerusahaan" class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-7">
                                            <base-button @click="submitCompany" class="btn btn-success" type="success">Submit</base-button><base-button type="danger">Kembali</base-button>
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
                            <base-button type="secondary" @click="newCompany">Detail</base-button>
                            <base-button type="primary" @click="newCompany">Tambah Mahasiswa</base-button>
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
import CompanyDataService from "../services/CompanyDataService";

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
    },
    
    newCompany() {
      this.submitted = false;
      this.company = {};
    }
  },
};
</script>


<script>
</script>