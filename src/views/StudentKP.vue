<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Kerja Praktik </h1>
                        <p class="text-white mt-0 mb-5">Matakuliah yang menerapkan ilmu pengetahuan dan teknologi sesuai bidang yang ditekuni secara langsung di lapangan.</p>
                        <router-link :to="{name: 'Data KP'}">
                        <base-button type="default" size="md">Unggah Laporan</base-button>
                        </router-link>
                        </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col px-9">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Kerja Praktik</h3>
                                </div>
                                <div class="col text-right">
                                    <router-link :to="{name: 'Ubah KP'}">
                                    <b-button pill variant="primary" size="md" >Edit</b-button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                                        />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                                        />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Pelaksanaan -->
                                <h6 class="heading-small text-muted mb-4">Pelaksanaan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <base-input alternative=""
                                                        label="Dosen Pembimbing"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                           
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Laporan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">  
                                            <base-input label="Judul Laporan">
                                                        <textarea 
                                                        class="form-control"
                                                        rows="6"
                                                        >
                                                        </textarea>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Bidang Konsentrasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                            <base-input alternative=""
                                                        label="Link Publikasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Proposal</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Proposal</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Laporan</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Laporan</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Handout</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Handout</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">PPT</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh PPT</a>
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
import InternshipDataService from "../services/InternshipDataService";

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
          }]
      }
    },
    methods: {
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
     deleteInternship() {
      InternshipDataService.delete(this.tableData.id)
        .then(response => {
        console.log(response.data);
        this.$router.push({ name: "kerja praktik" });
        })
        .catch(e => {
          console.log(e);
        });
    }
    },
    mounted() {
    this.getInternship(this.$route.params.id);
  }
  };
</script>
<style></style>

