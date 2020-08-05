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
                                    <h3 class="mb-0">Detail Perusahaan</h3>
                                </div>
                                <div class="col text-right">
                                <b-button pill variant="primary" size="md" :href="'/companies/'+tableData.id+'/edit'">Edit</b-button>
                                <b-button pill variant="danger" size="md" :href="'/companies/'" @click="deleteCompany">Delete</b-button>
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
                                                        v-model="tableData.name"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Jenis Usaha"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.business"
                                                        disabled
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
                                                        rows="6"
                                                        v-model="tableData.address"
                                                        disabled>
                                                        </textarea>
                                            </base-input>
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Website"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.website"
                                                        disabled
                                            />
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                                        disabled
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
                                                        v-model="tableData.pic_name"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Kontak"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.pic_number"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div class="col-4 text-left">
                                    <router-link :to="{name: 'Perusahaan'}">
                                    <base-button href="#!" size="md" type="default" class="float-left">Kembali</base-button>
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
import CompanyDataService from "../../services/CompanyDataService";

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
      getCompany(id) {
      CompanyDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
     retrieveTopics() {
      CompanyDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCompany() {
      CompanyDataService.delete(this.tableData.id)
        .then(response => {
        console.log(response.data);
        this.$router.push({ name: "Perusahaan" });
        })
        .catch(e => {
          console.log(e);
        });
    }
    },
    mounted() {
    this.getCompany(this.$route.params.id);
  }
}
</script>
<style></style>
