<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                      <!-- PAGE 1 -->
                        <div v-if="step === 1">
                        <div class="col text-left"> <h3>Data Diri</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                                <div class="form-group row">
                                <label for="name" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <input  type="text" 
                                        class="form-control" 
                                        id="name" 
                                        v-model="tableData.first_name" 
                                        disabled>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="nim" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input  type="num" 
                                        class="form-control" 
                                        id="nim" 
                                        v-model="tableData.profile['nim']" 
                                        disabled>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Dosen Pembimbing</label>
                                <div class="col-sm-7">
                                <b-form-input list="my-list-id"></b-form-input>
                                <datalist id="my-list-id">
                                <option v-for="lecturer in lecturers" :key="lecturer.id">{{ lecturer.name }}</option>
                                </datalist>
                                </div>
                                </div>
                                <div class="form-group row" >
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-7" > 
                                <base-button type = "success" @click.prevent="next()">Selanjutnya</base-button>
                                </div> 
                                </div>
                        </form>
                        </div>
                        <!-- PAGE 2 -->
                        <div v-if="step === 2">
                        <div class="col text-left"> <h3>Magang</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                                <div class="form-group row">
                                <label for="inputNama" class="col-sm-3 col-form-label text-md-right">Magang</label>
                                <div class="col-sm-7">
                                <b-form-radio v-model="selected" 
                                              name="some-radios" 
                                              value="A"
                                              >Iya
                                </b-form-radio>
                                <b-form-radio v-model="selected" 
                                              name="some-radios" 
                                              value="B">Tidak
                                </b-form-radio>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Nama Perusahaan</label>
                                <div class="col-sm-7">
                                <b-form-input list="my-list-id"></b-form-input>
                                <datalist id="my-list-id">
                                <option v-for="company in companies" :key="company.id">{{ company.name }}</option>
                                </datalist>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">Tanggal Mulai</label>
                                <div class="col-sm-7">
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-picker slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="start_date">
                                </flat-picker>
                                </base-input>
                                </div>
                                <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">Tanggal Selesai</label>
                                <div class="col-sm-7">
                                <base-input addon-left-icon="ni ni-calendar-grid-58">
                                <flat-picker slot-scope="{focus, blur}"
                                             @on-open="focus"
                                             @on-close="blur"
                                             :config="{allowInput: true}"
                                             class="form-control datepicker"
                                             v-model="end_date">
                                </flat-picker>
                                </base-input>
                                </div>
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-1" > 
                                <base-button type = "danger" @click.prevent="prev()">Kembali </base-button>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <base-button type = "success" @click.prevent="next()">Selanjutnya</base-button>
                                </div>
                            </div> 
                        </form>
                        </div>
                        <!-- PAGE 3 -->
                        <div v-if="step === 3">
                        <div class="col text-left"> <h3>Informasi Laporan</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                                <div class="form-group row">
                                <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Judul Laporan</label>
                                <div class="col-sm-7">
                                <input type="text" 
                                       class="form-control" 
                                       id="thesis_tittle"
                                       v-model="tableData.thesis_tittle">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Topik Laporan</label>
                                <div class="col-sm-7">
                                <b-form-input list="my-list-id"></b-form-input>
                                <datalist id="my-list-id">
                                <option v-for="topic in topics" :key="topic.id">{{ topic.name }}</option>
                                </datalist>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Link Publikasi</label>
                                <div class="col-sm-7">
                                <input type="text" 
                                       class="form-control" 
                                       id="publication_link"
                                       v-model="tableData.publication_link">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Proposal</label>
                                <div class="col-sm-7">
                                <input type="file" 
                                       class="form-control-file" 
                                       id="thesis_proposal" 
                                       ref="file" 
                                       v-on:@change="handleFileUpload()">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Laporan</label>
                                <div class="col-sm-7">
                                <input type="file" 
                                       class="form-control-file" 
                                       id="thesis_report" 
                                       ref="file" 
                                       v-on:@change="handleFileUpload()">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Unggah Hand Out</label>
                                <div class="col-sm-7">
                                <input type="file" 
                                       class="form-control-file" 
                                       id="thesis_handout" 
                                       ref="file" 
                                       v-on:@change="handleFileUpload()">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Unggah PPT</label>
                                <div class="col-sm-7">
                                <input type="file" 
                                       class="form-control-file" 
                                       id="thesis_ppt" 
                                       ref="file" 
                                       v-on:@change="handleFileUpload()">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-1" >
                                <base-button type = "danger" @click.prevent="prev()">Kembali </base-button>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <base-button type = "success" @click.prevent="submit()">Simpan</base-button>
                                </div>
                                </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </div>
</template>

<script>
import flatPicker from "vue-flatpickr-component"
import "flatpickr/dist/flatpickr.css"
import ThesisDataService from "../../services/ThesisDataService"
import LecturerDataService from "../../services/LecturerDataService";
import CompanyDataService from "../../services/CompanyDataService";
import TopicDataService from "../../services/TopicDataService";
import axios from 'axios';

export default {
  components: {flatPicker},
  name: "add-student",
  data() {
    return {
      step:1,
      ta: {
        id: null,
      },
      lecturers: [],
      companies:[],
      topics:[],
      tableData: [],
      dates: {},
      date: {},
      submitted: false,
    };
  },
  computed: {
  isLoggedIn() {
      return this.$store.getters.isLoggedIn
      }
  },
  created () {
    this.fetchUser(this.$route.params.pk)
    const token = localStorage.getItem('token')
      if (token) {
      this.fetchAuthenticatedUser(token)
      }
    },
  methods: {
  fetchUser(){
      const token = localStorage.getItem('token')
      const pk = localStorage.getItem('pk')
      axios.get('http://localhost:8000/api/users/'+pk,
      { headers: { Authorization: `Bearer ${token}` }})
      .then(response =>{this.tableData = response.data})
      },
  retrieveLecturer() {
    LecturerDataService.getAll()
        .then(response => {
          this.lecturers = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  retrieveCompany() {
      CompanyDataService.getAll()
        .then(response => {
          this.companies = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  retrieveTopics() {
      TopicDataService.getAll()
        .then(response => {
          this.topics= response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  submitStudent() {
      // let formData = new FormData();
      // formData.append('file',this.student.file); 
      var data = {
        name: this.student.name,
        nim: this.student.nim,
        lecturer_adviser: this.student.lecturer_adviser
      };

      ThesisDataService.create(data)
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
    },
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      
    }
  },
      mounted() {
    this.retrieveLecturer();
    this.retrieveCompany();
    this.retrieveTopics();


  }
  // handleFileUpload(){
    // this.student.file = this.student.$refs.file.files[0];
};
</script>
<style>
</style>