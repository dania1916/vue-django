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
                        <div class="col text-left"> <h3>Informasi Anggota</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                                <div class="form-group row">
                                <label for="name" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <input  type="text" 
                                        class="form-control" 
                                        id="name" 
                                        v-model="student.first_name" 
                                        disabled>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="nim" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input  type="num" 
                                        class="form-control" 
                                        id="nim" 
                                        v-model="student.profile.nim" 
                                        disabled>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputDosen" class="col-sm-3 col-form-label text-md-right">Dosen Pembimbing</label>
                                <div class="col-sm-7">
                                 <v-select v-model="lecturers.lectuer_name"
                                  @input="selectIdLecturer($event)"
                                  :options="lecturers.lecturer_list"
                                  label="name">
                                </v-select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Group Kerja</label>
                                <div class="col-sm-7">
                                 <b-form-radio v-model="internships.group" 
                                              name="some-radios" 
                                              value="1"
                                              >Sendiri :v 
                                </b-form-radio>
                                <b-form-radio v-model="internships.group" 
                                              name="some-radios" 
                                              value="2">Berpasangan :)
                                </b-form-radio>                  
                                </div>
                                </div>
                                <div v-if="internships.group == 2">
                                <div class="form-group row" >
                                <label class="col-sm-3"></label>
                                <div  class = "col-sm-7" > 
                                <b-button v-b-modal.modal-no-backdrop variant="primary">Tambah Anggota Tim</b-button>
                                <b-modal id="modal-no-backdrop" hide-backdrop content-class="shadow" title="Anggota KP">
                                <p class="my-2">
                                <div class="form-group row">
                                <label  for="inputNama" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <v-select v-model="members.student_name"
                                  @input="selectIdMember($event)"
                                  :options="members.student_list"
                                  label="first_name">
                                </v-select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input  type="num" 
                                        class="form-control" 
                                        id="nim" 
                                        v-model="members.selected_nim" 
                                        disabled>
                                </div>
                                </div>
                                </b-modal>
                                </div> 
                                </div>
                                <div class="form-group row">
                                <label for="name" class="col-sm-3 col-form-label text-md-right">Nama Anggota</label>
                                <div class="col-sm-7">
                                 <input  type="num" 
                                        class="form-control" 
                                        id="nim" 
                                        v-model="members.selected_name" 
                                        disabled>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="nim" class="col-sm-3 col-form-label text-md-right">NIM Anggota</label>
                                <div class="col-sm-7">
                                <input  type="num" 
                                        class="form-control" 
                                        id="nim" 
                                        v-model="members.selected_nim" 
                                        disabled>
                                </div>
                                </div>
                                </div>
                                <div class="form-group row" >
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-1" > 
                                <router-link :to="{name: 'KP Mahasiswa'}">
                                <base-button type = "danger">Kembali </base-button>
                                </router-link>
                                </div>
                                <div class = "col-sm-7 pl-5" > 
                                <base-button type = "success" @click.prevent="next()">Selanjutnya</base-button>
                                </div>
                                </div>
                        </form>
                        </div>
                        <!-- PAGE 2 -->
                        <div v-if="step === 2">
                        <div class="col text-left"> <h3>Informasi Kegiatan</h3> </div>
                        
                            <form>
                           <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Nama Perusahaan</label>
                                <div class="col-sm-7">
                                  <v-select v-model="companies.company_name"
                                  @input="selectIdCompany($event)"
                                  :options="companies.company_list"
                                  label="name">
                                </v-select>
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
                                             v-model="internships.start_date">
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
                                             v-model="internships.end_date">
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
                            <!-- Page 3 -->
                           <div v-if="step === 3">
                        <div class="col text-left"> <h3>Informasi Laporan</h3> </div>
                        <validation-observer>
                        <form>
                            <div class="form-group row"></div>
                                <div class="form-group row">
                                <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Judul Laporan</label>
                                <div class="col-sm-7">
                                <input type="text" 
                                       class="form-control" 
                                       id="thesis_tittle"
                                       v-model="internships.title"
                                        name="tittle"
                                       required
                                       v-validate="'required'"
                                       :class="{ 'is-invalid': submitted && errors.has('tittle') }">
                                <div  v-if="submitted && errors.has('tittle')" class="invalid-feedback">{{ errors.first('tittle') }}</div>
                                </div>
                                </div>
                                
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Topik Laporan</label>
                                <div class="col-sm-7">
                                <v-select v-model="topics.topic_name"
                                  @input="selectIdTopic($event)"
                                  :options="topics.topic_list"
                                  label="name">
                                </v-select>
                                </div>
                                </div>

                                <div class="form-group row">
                                <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Link Publikasi</label>
                                <div class="col-sm-7">
                                <input type="text" 
                                       class="form-control" 
                                       id="publication_link"
                                       v-model="thesis.publication_link"
                                        name="publication_link"
                                       v-validate="'required'"
                                       :class="{ 'is-invalid': submitted && errors.has('publication_link') }">
                                <div  v-if="submitted && errors.has('publication_link')" class="invalid-feedback">{{ errors.first('publication_link') }}</div>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Proposal</label>
                                <div class="col-sm-7">
                                <input type="file" @change="handleFileProposal">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Laporan</label>
                                <div class="col-sm-7">
                                <input type="file" @change="handleFileReport">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Unggah Hand Out</label>
                                <div class="col-sm-7">
                                <input type="file" @change="handleFileHandOut">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Unggah PPT</label>
                                <div class="col-sm-7">
                                <input type="file" @change="handleFilePPT">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-1" >
                                <base-button type = "danger" @click.prevent="prev()">Kembali </base-button>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <base-button type = "success" @click="updateTopic()">Tambah</base-button>                                </div>
                                </div>
                            </form>
                            </validation-observer>
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
import InternshipDataService from "../../services/InternshipDataService"
import LecturerDataService from "../../services/LecturerDataService";
import CompanyDataService from "../../services/CompanyDataService";
import TopicDataService from "../../services/TopicDataService";
import StudentDataService from "../../services/StudentDataService";
import axios from 'axios';
import { required } from "vuelidate/lib/validators";
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

export default {
components: {flatPicker},
    data() {
      return {
        step:1,
        student:'',
        members:{
         student_list:'',
         student_id:1,
         student_name:'',
         selected_name:'',
         selected_nim:'',
        },
      companies:{
        company_list:'',
        company_id:'',
        company_name:''
      },
      lecturers:{
        lecturer_list:'',
        lecturer_id:'',
        lectuer_name:''
      },
      topics:{
        topic_list:'',
        topic_id:'',
        topic_name:''
      },
      handleFile:{
        proposal:'',
        report:'',
        ppt:'',
        handout:'',
      },
      internships: {
        title:'',
        group:0,
        publication_link:'',
        start_date: '',
        end_date: ''
      },
      thesis:{

      },
      submitted: false,
      }
    },
    validations: {
    form: {
      tittle: { required },
      publication_link: { required },
    }
    },
      computed: {
        isLoggedIn() {
                return this.$store.getters.isLoggedIn
        },
      },
    created () {
    this.fetchUser(this.$route.params.pk)
    const token = localStorage.getItem('token')
      if (token) {
      this.fetchAuthenticatedUser(token)
      }
    },
    methods:{      
    fetchUser(){
      const token = localStorage.getItem('token')
      const pk = localStorage.getItem('pk')
      axios.get('http://localhost:8000/api/users/'+pk,
      { headers: { Authorization: `Bearer ${token}` }})
      .then(response =>{this.student = response.data})
      },
      retrieveLecturer() {
    LecturerDataService.getAll()
        .then(response => {
          this.lecturers.lecturer_list = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  retrieveCompany() {
      CompanyDataService.getAll()
        .then(response => {
          this.companies.company_list = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  retrieveTopics() {
      TopicDataService.getAll()
        .then(response => {
          this.topics.topic_list= response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
     retrieveStudents() {
      StudentDataService.getAll()
        .then(response => {
          this.members.student_list= response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateTopic() {
      const pk = localStorage.getItem('pk')
      const token = localStorage.getItem('token')
      let formData = new FormData();
          formData.append('name', pk);
          formData.append('lecturer_adviser', this.lecturers.lecturer_id);
          formData.append('group', this.internships.group);
          formData.append('member', this.members.student_id);
          formData.append('company_name', this.companies.company_id);
          formData.append('start_date', this.internships.start_date);
          formData.append('end_date', this.internships.end_date);
          formData.append('title', this.internships.title);
          formData.append('intern_topic', this.topics.topic_id);
          formData.append('proposal', this.handleFile.proposal);
          formData.append('report', this.handleFile.report);
          formData.append('ppt', this.handleFile.ppt);
          formData.append('handout', this.handleFile.handout);
          formData.append('publication_link', this.internships.publication_link);

          InternshipDataService.create(formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                } 
        })
        .catch(e => {
          console.log(e);
        });
        this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push('/internships')
                }
            })
  },
    handleFileProposal(event){
      this.handleFile.proposal = event.target.files[0];
    },
    handleFileReport(event){
      this.handleFile.report = event.target.files[0];
    },
    handleFileHandOut(event){
      this.handleFile.handout = event.target.files[0];
    },
    handleFilePPT(event){
      this.handleFile.ppt = event.target.files[0];
    },
    selectIdLecturer(e) {
      this.lecturers.lecturer_id = e.id

    },
    selectIdCompany(e) {
      this.companies.company_id = e.id
    },
    selectIdTopic(e) {
      this.topics.topic_id = e.id
    },    
    selectIdMember(e) {
      this.members.member_id = e.id
      this.members.selected_name = e.first_name
      this.members.selected_nim = e.nim
    },   
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert('Submit to blah and show blah and etc.');      
    }
  },
    mounted() {
    this.retrieveLecturer();
    this.retrieveCompany();
    this.retrieveTopics();
    this.retrieveStudents();
  }
  };
</script>