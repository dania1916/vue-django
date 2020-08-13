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
                                    <h3 class="mb-0">Detail Laporan TA</h3>
                                    </div>
                                </div>
                            </div>
                        <!-- Member -->
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.first_name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.last_name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.profile.nim"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Dosen Pembimbing"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.lecturer_adviser.name"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Implementation -->
                                <h6 class="heading-small text-muted mb-4">Magang</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.company_name.name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Magang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.internship_status"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.start_date"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.end_date"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- Thesis -->
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">Laporan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Judul Laporan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.thesis_title"
                                                        
                                            />
                                        </div>
                                    </div>
                                        <div class=row>
                                            <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Topik"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.thesis_topic.name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Link Publikasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.publication_link"
                                                        
                                            />
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
                                    </div>      
                                </div>
                                <hr class="my-4" />
                                <div class="row">
                                <div class="col-6">
                                <router-link :to="{name: 'tugas akhir'}">
                                <base-button type = "success" >Kembali</base-button>
                                </router-link>
                                </div>
                                <div>
                                <router-link :to="{name: 'tugas akhir'}">
                                <base-button href="#!" size="md" type="default" class="float-left" @click="updateThesis">Simpan</base-button>
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
import ThesisDataService from "../../services/ThesisDataService";
import UserDataService from "../../services/UserDataService";


  export default {
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

        handleFile:{
        proposal:'',
        report:'',
        ppt:'',
        handout:'',
      },
      }
    },
    methods: {
      getThesis(id) {
      ThesisDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
     retrieveThesis() {
      ThesisDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
     updateThesis() {
        let formData = new FormData();
          formData.append('name', pk);
          formData.append('thesis_topic', this.topics.topic_id);
          formData.append('lecturer_adviser', this.lecturers.lecturer_id);
          formData.append('thesis_proposal', this.handleFile.proposal);
          formData.append('thesis_report', this.handleFile.report);
          formData.append('thesis_ppt', this.handleFile.ppt);
          formData.append('thesis_handout', this.handleFile.handout);
          formData.append('thesis_title', this.thesis.title);
          formData.append('publication_link', this.thesis.publication_link);
          formData.append('company_name', this.companies.company_id);
          formData.append('internship_status', this.internships.status);
          formData.append('start_date', this.internships.start_date);
          formData.append('end_date', this.internships.end_date);
        const pk = localStorage.getItem('pk')
        const token = localStorage.getItem('token')
        UserDataService.update(pk,formData,
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
    },
    mounted() {
    this.getThesis(this.$route.params.id);
  }
}
</script>
<style></style>
