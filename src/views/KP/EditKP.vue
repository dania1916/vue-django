<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 200px; background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
            </div>
        </base-header>
        <div class="container-fluid mt--8">
            <div class="row">
                <div class="card-body px-lg-9 py-11">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Edit Laporan KP</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Anggota</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.first_name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.last_name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.profile.nim"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.member.first_name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.member.last_name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.member.nim"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Implementation -->
                                <h6 class="heading-small text-muted mb-4">Kerja Praktik</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="group" class="col-lg-6-sm-6 col-form-label text-md-right">Dosen Pembimbing</label>
                                            <v-select   v-model="tableData.lecturer_adviser.name"
                                                        @input="selectIdLecturer($event)"
                                                        :options="lecturers.lecturer_list"
                                                        label="name"
                                                        >
                                            </v-select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="group" class="col-lg-6-sm-6 col-form-label text-md-right">Nama Perusahaan</label>
                                            <v-select   v-model="tableData.company_name.name"
                                                        @input="selectIdCompany($event)"
                                                        :options="companies.company_list"
                                                        label="name">
                                            </v-select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="group" class="col-lg-6-sm-6 col-form-label text-md-right">Tanggal Mulai</label>
                                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                            <flat-picker slot-scope="{focus, blur}"
                                                         @on-open="focus"
                                                         @on-close="blur"
                                                         :config="{allowInput: true}"
                                                         class="form-control datepicker"
                                                         v-model="tableData.start_date">
                                            </flat-picker>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="group" class="col-lg-6-sm-6 col-form-label text-md-right">Tanggal Selesai</label>
                                            <base-input addon-left-icon="ni ni-calendar-grid-58">
                                            <flat-picker slot-scope="{focus, blur}"
                                                         @on-open="focus"
                                                         @on-close="blur"
                                                         :config="{allowInput: true}"
                                                         class="form-control datepicker"
                                                         v-model="tableData.end_date">
                                            </flat-picker>
                                            </base-input>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Thesis -->
                                <h6 class="heading-small text-muted mb-4">Laporan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">  
                                            <base-input label="Judul Laporan">
                                                        <textarea 
                                                        class="form-control"
                                                        rows="6"
                                                        v-model="tableData.title"
                                                        >
                                                        </textarea>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Link Publikasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.publication_link"
                                                        
                                            />
                                            <label for="group" class="col-lg-6-sm-6 col-form-label text-md-right">Bidang Konsentrasi</label>
                                            <v-select   v-model="tableData.intern_topic.name"
                                                        @input="selectIdTopic($event)"
                                                        :options="topics.topic_list"
                                                        label="name"
                                                        >
                                            </v-select>
                                        </div>
                                    </div>
                                    <div class=row>
                                        <div class="form-group row">
                                        <div class='col-lg-6'>
                                        <label for="inputGroup" class="col-sm-6 col-form-label text-md-bold ">Unggah Proposal</label>
                                        <div class="col-sm-7">
                                        <input type="file" @change="handleFileProposal">
                                        </div>
                                        </div>
                                        <div class='col-lg-6'>
                                        <label for="inputGroup" class="col-sm-6 col-form-label text-md ">Unggah Laporan</label>
                                        <div class="col-sm-7">
                                        <input type="file" @change="handleFileReport">
                                        </div>
                                        </div>
                                        </div>
                                        <div class="form-group row">
                                        <div class='col-lg-6'>
                                        <label for="inputGroup" class="col-sm-6 col-form-label text-md">Unggah Hand Out</label>
                                        <div class="col-sm-7">
                                        <input type="file" @change="handleFileHandOut">
                                        </div>
                                        </div>
                                        <div class='col-lg-6'>
                                        <label for="inputGroup" class="col-sm-6 col-form-label text-md">Unggah PPT</label>
                                        <div class="col-sm-7">
                                        <input type="file" @change="handleFilePPT">
                                        </div>
                                        </div>
                                        </div>
                                    </div> 
                                </div>
                                <hr class="my-4" />
                                <div class="form-group row">
                                <div class = "col-sm-1" >
                                <router-link :to="{name: 'Detail KP'}">
                                <base-button type = "danger">Kembali </base-button>
                                </router-link>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <router-link :to="{name: 'Detail KP'}">
                                <base-button type = "success" @click="updateIntern()">Simpan</base-button>   
                                </router-link>                             
                                </div>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InternshipDataService from "../../services/InternshipDataService";
// import UserDataService from "../../services/UserDataService";
import LecturerDataService from "../../services/LecturerDataService";
import TopicDataService from "../../services/TopicDataService";
import CompanyDataService from "../../services/CompanyDataService";
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import flatPicker from "vue-flatpickr-component"
import "flatpickr/dist/flatpickr.css"

Vue.component('v-select', vSelect)

export default {
    components: {flatPicker},
    name: 'user-profile',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        pagination: {
        default: 1
      },
        tableData: 
        [{
          }],
        lecturers:{
        lecturer_list:'',
        lecturer_id:'',
        lectuer_name:''
      },
      companies:{
        company_list:'',
        company_id:'',
        company_name:''
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
      }
    },
    methods: {
      updateIntern() {
        const pk = localStorage.getItem('pk')
        const token = localStorage.getItem('token')
        let formData = new FormData();
          formData.append('name', pk);
          formData.append('lecturer_adviser', this.tableData.lecturer_adviser.id);
          formData.append('group', this.tableData.group);
          formData.append('member', this.tableData.member.id);
          formData.append('company_name', this.tableData.company_name.id);
          formData.append('start_date', this.tableData.start_date);
          formData.append('end_date', this.tableData.end_date);
          formData.append('title', this.tableData.title);
          formData.append('intern_topic', this.tableData.intern_topic.id);
          formData.append('proposal', this.handleFile.proposal);
          formData.append('report', this.handleFile.report);
          formData.append('ppt', this.handleFile.ppt);
          formData.append('handout', this.handleFile.handout);
          formData.append('publication_link', this.tableData.publication_link);
        InternshipDataService.update(this.tableData.id,formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                } 
        })
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
      getInternship(id) {
      InternshipDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
     retrieveInternship() {
      InternshipDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
      this.tableData.lectuer_adviser = e.id
    },
    selectIdCompany(e) {
      this.tableData.company_name.id = e.id
    },
    selectIdTopic(e) {
      this.tableData.intern_topic.id = e.id
    },
    },
    mounted() {
    this.getInternship(this.$route.params.id);
    this.retrieveLecturer();
    this.retrieveTopics();
    this.retrieveCompany();
  }
  };
</script>
<style></style>
