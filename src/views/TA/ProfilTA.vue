<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <div class="col text-left"> <h3>Data Diri</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                            <div class="form-group row">
                                <label for="name" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <input type="text" class="form-control" id="name" v-model="ta.name" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nim" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input type="num" class="form-control" id="nim" v-model="ta.nim" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Dosen Pembimbing</label>
                                <div class="col-sm-7">
                                <select class="form-control" v-model="ta.lecturer_adviser">
                                    <option>Pilih</option>
                                    <option>Siapa ya</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group row" >
                                <label class="col-sm-3"></label>
                            <div class = "col-sm-7" > 
                            <router-link :to="{name: 'Magang'}">
                            <base-button type = "success">Selanjutnya</base-button>
                            </router-link>
                            </div> 
                            </div>
                        </form>
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
      ta: {
        id: null,
        name:'',
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
        name: this.student.name,
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