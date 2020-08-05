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
                                                        label="Nama Lengkap"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.NamaLengkap"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.NIM"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Dosen Pembimbing"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Angkatan"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Magang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Prodi"
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
                                                        v-model="model.Perusahaan"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Tahun"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Provinsi"
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
                                                        v-model="model.NamaLengkap"
                                            />
                                        </div>
                                    </div>
                                        <div class=row>
                                            <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Topik"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.NIM"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Link Publikasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.NIM"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Proposal</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Proposal</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Laporan</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh Handout</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <p><i class="fa Proposal-bold" aria-hidden="true">Handout</i></p>
                                            <div class="row">
                                            <a icon="files" href="#" target="_blank"><img class="gambar" src="img/theme/download.png">  Unduh PPT</a>
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
import { BTable } from 'bootstrap-vue'
export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        },
        components: {'b-table':BTable},
        fields: [
          {
            key: 'proposal',
            label: 'Proposal',
            sortable: false,
          },
          {
            key: 'handout',
            label: 'Handout',
            sortable: false,
          },
          {
            key: 'ppt_seminar',
            label: 'PPT Seminar',
            sortable: false,
            // Variant applies to the whole column, including the header and footer
          }
        ],
        items: [
            {isActive: false, proposal: 'a', handout: 'b', ppt_seminar: 'c'},
            {isActive: false, proposal: 'a', handout: 'b', ppt_seminar: 'c'},
            {isActive: false, proposal: 'a', handout: 'b', ppt_seminar: 'c'}
        ]
      }
    },
  };
</script>
<style></style>
