<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 500px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Tugas akhir</h1>
                        <p class="text-white mt-0 mb-5">karya ilmiah yang disusun oleh mahasiswa setiap program studi berdasarkan hasil penelitian suatu masalah yang dilakukan secara seksama dengan bimbingan dosen pembimbing.</p>
                        <router-link :to="{name: 'Data TA'}">
                        <base-button type="default" size="md">Unggah Laporan</base-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </base-header>
        <!-- When data is null -->
        <div v-if="tableData == ''" class="container-fluid mt--7">
            <div class="row">
                <div class="col px-8"  >
                    <div class="row" />
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Detail Laporan TA</h3>
                                    </div>
                                    <div class="col text-right">
                                    <b-button pill variant="primary" size="md" :href="'/thesis/user/'+tableData.id+'/editta'">Edit</b-button>
                                    </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row" :data="tableData">
                                         <div v-if="tableData !== null"/>
                                        <div class="col-lg-6" :data="tableData">
                                            <base-input :data="tableData" alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6" :data="tableData" v-if="tableData.name !== null">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Dosen Pembimbing"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr v-if="tableData.internship_status == true" class="my-4" />
                                <!-- Implementation -->
                                <h6 v-if="tableData.internship_status == true" class="heading-small text-muted mb-4">Magang</h6>
                                <div v-if="tableData.internship_status == true" class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                     <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
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
                                            <base-input label="Judul Laporan">
                                                        <textarea 
                                                        class="form-control"
                                                        rows="6"
                                                        disabled>
                                                        </textarea>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Bidang Konsentrasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                            <base-input alternative=""
                                                        label="Link Publikasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Proposal</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_proposal" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Proposal</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Laporan</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_report" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Laporan</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Handout</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_handout" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Handout</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">PPT</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_ppt" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh PPT</a>
                                            </div>
                                        </div>
                                    </div>   
                                </div>

                                <hr class="my-4" />
                                <div class="col-4 text-left">
                                <router-link :to="{name: 'tugas akhir'}">
                                <base-button href="#!" size="md" type="default" class="float-left">Kembali</base-button>
                                </router-link>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
           <!-- When data inputed! -->
        <div v-else class="container-fluid mt--7">
            <div class="row">
                <div class="col px-8">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Detail Laporan TA</h3>
                                    </div>
                                    <div class="col text-right">
                                    <b-button pill variant="primary" size="md" :href="'/thesis/user/'+tableData.id+'/editta'">Edit</b-button>
                                    </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row" :data="tableData">
                                         <div v-if="tableData !== null"/>
                                        <div class="col-lg-6" :data="tableData">
                                            <base-input :data="tableData" alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.thesis_title"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6" :data="tableData" v-if="tableData.name !== null">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.last_name"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name.profile.nim"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Dosen Pembimbing"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.lecturer_adviser.name"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr v-if="tableData.internship_status == true" class="my-4" />
                                <!-- Implementation -->
                                <h6 v-if="tableData.internship_status == true" class="heading-small text-muted mb-4">Magang</h6>
                                <div v-if="tableData.internship_status == true" class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.company_name.name"
                                                        disabled
                                            />
                                        </div>
                                        <!-- <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Magang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.internship_status"
                                                        disabled
                                            />
                                        </div> -->
                                    </div>
                                     <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.start_date"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.end_date"
                                                        disabled
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
                                            <base-input label="Judul Laporan">
                                                        <textarea 
                                                        class="form-control"
                                                        rows="6"
                                                        v-model="tableData.thesis_title"
                                                        disabled>
                                                        </textarea>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Bidang Konsentrasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.thesis_topic.name"
                                                        disabled
                                            />
                                            <base-input alternative=""
                                                        label="Link Publikasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.publication_link"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Proposal</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_proposal" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Proposal</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Laporan</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_report" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Laporan</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Handout</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_handout" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Handout</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">PPT</i></p>
                                            <div class="row">
                                            <a icon="files" :href="tableData.thesis_ppt" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh PPT</a>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                <hr class="my-4" />
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ThesisDataService from "../services/ThesisDataService";
import axios from 'axios'

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
        tableData:'',
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
            const token = localStorage.getItem('token')
            const pk = localStorage.getItem('pk')
            axios.get('http://localhost:8000/api/thesis/user/'+pk,
            {
                headers: {
                            Authorization: `Bearer ${token}`
                        }
            }).then(response =>{
                this.tableData = response.data
            })
    },
     deleteThesis() {
      ThesisDataService.delete(this.tableData.id)
        .then(response => {
        console.log(response.data);
        this.$router.push({ name: "Mahasiswa" });
        })
        .catch(e => {
          console.log(e);
        });
    }
    },
    mounted() {
    // this.getThesis(this.$route.params.id);
    this.retrieveThesis();
  }
}
</script>
<style></style>
