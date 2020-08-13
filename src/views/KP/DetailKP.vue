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
                                    <h3 class="mb-0">Detail Laporan KP</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Anggota</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Lengkap"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.profile.nim"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Dosen Pembimbing"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.lecturer_adviser.name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Group Kerja"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.Prodi"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Implementation -->
                                <h6 class="heading-small text-muted mb-4">Pelaksanaan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-8">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.company_name.name"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Tanggal Seminar"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.start_date"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.end_date"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- Thesis -->
                                <h6 class="heading-small text-muted mb-4">Laporan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Judul Laporan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.title"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Topik"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="internship.intern_topic"
                                            />
                                        </div>
                                    </div>
                                        <div class=row>
                                        <div class="col-lg-4">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Proposal</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Proposal</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Handout</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Handout</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">PPT</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh PPT</a>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <hr class="my-4" />
                                <div class="col-4 text-left">
                                    <base-button href="#!" size="md" type="default" class="float-left">Kembali</base-button>
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
        internship: 
        [{
          }]
      }
    },
    methods: {
      getInternship(id) {
      InternshipDataService.get(id)
        .then(response => {
          this.internship = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
     retrieveInternships() {
      InternshipDataService.getAll()
        .then(response => {
          this.internship = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
     deleteInternship() {
      InternshipDataService.delete(this.internship.id)
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
    this.getInternship(this.$route.params.id);
  }
}
</script>
<style></style>
