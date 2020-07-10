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

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="img/theme/team-4-800x800.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3>
                                    Jessica Jones<span class="font-weight-light">, 27</span>
                                </h3>
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i>Bucharest, Romania
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                                </div>
                                <div>
                                    <i class="ni education_hat mr-2"></i>University of Computer Science
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
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
                                                        label="Group Kerja"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Prodi"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Implementation -->
                                <h6 class="heading-small text-muted mb-4">Pelaksanaan</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Perusahaan"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Tahun KP"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Tahun"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Tanggal Mulai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.Provinsi"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Tanggal Selesai"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.zipCode"
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
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Topik"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.NIM"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <template>
                                        <div>
                                        <b-table striped hover :items="items" :fields="fields"></b-table>
                                        </div>
                                        </template>
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
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ]
      }
    },
  };
</script>
<style></style>
