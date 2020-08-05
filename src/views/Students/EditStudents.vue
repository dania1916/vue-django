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
                                    <h3 class="mb-0">Edit Mahasiswa</h3>
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
                                                        v-model="tableData.name"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.nim"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="No Telepon"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.number_phone"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <!-- Kontak -->
                                    <hr class="my-4" />
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Desa"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.village"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RT"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.rt_village"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RW"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.rw_village"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kecamatan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.sub_district"
                                                        
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kota / Kabupaten"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.city"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Provinsi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.province"
                                                        
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kode Pos"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.postal_code"
                                                        
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 text-left">
                                    <router-link :to="{name: 'Mahasiswa'}">
                                    <base-button href="#!" size="md" type="default" class="float-left" @click="updateStudent">Simpan</base-button>
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
import StudentDataService from "../../services/StudentDataService";

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
      getStudent(id) {
      StudentDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
     retrieveTopics() {
      StudentDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateStudent() {
    StudentDataService.update(this.tableData.id, this.tableData)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    },
    mounted() {
    this.getStudent(this.$route.params.id);
  }
}
</script>
<style></style>
