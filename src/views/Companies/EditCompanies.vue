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
                                    <h3 class="mb-0">Edit Perusahaan</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Profil -->
                        <template>
                            
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Perusahaan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.company_name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Jenis Usaha"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.company_business"
                                            />
                                        </div>
                                    </div>
                                    <hr class="my-4" />
                                    <!-- Kontak -->
                                    <div class="row">
                                        <div class="col-lg-6">  
                                            <base-input label="Alamat">
                                                        <textarea 
                                                        class="form-control" 
                                                        id="company_address"
                                                        rows="6">
                                                        </textarea>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Website"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.company_website"
                                            />
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.company_email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <!-- PIC -->
                                <h6 class="heading-small text-muted mb-4">Narahubung</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.company_pic_name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Kontak"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="model.company_pic_number"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div class="col-4 text-left">
                                    <router-link :to="{name: 'Perusahaan'}">
                                    <base-button href="#!" size="md" type="default" class="float-left">Simpan</base-button>
                                    </router-link>
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
          company_name: '',
          company_business: '',
          company_address: '',
          company_website: '',
          company_email: '',
          company_pic_name: '',
          company_pic_number:'',
        },
        components: {'b-table':BTable},
      }
    },
  };
</script>
<style></style>
