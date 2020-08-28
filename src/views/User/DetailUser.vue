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
                                    <h3 class="mb-0">Detail Mahasiswa</h3>
                                </div>
                                <div class="col text-right">
                                <b-button pill variant="primary" size="md" :href="'/user/'+tableData.url.split('/').slice(-2)[0]+'/edit'">Edit</b-button>
                                <b-button pill variant="danger" size="md"  :href="'/user/'" @click="deleteStudent">Delete</b-button>
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
                                                        v-model="tableData.first_name"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.nim"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="No Telepon"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.number_phone"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                                        disabled
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
                                                        v-model="tableData.profile.village"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RT"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.rt_village"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RW"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.rw_village"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kecamatan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.sub_district"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kota / Kabupaten"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.city"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Provinsi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.province"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kode Pos"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.postal_code"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 text-left">
                                    <router-link :to="{name: 'Mahasiswa'}">
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
import StudentDataService from "../../services/UserDataService";

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
     retrieveStudent() {
      StudentDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
     deleteStudent() {
      StudentDataService.delete(this.tableData.url.split('/').slice(-2)[0])
        .then(response => {
        console.log(response.data);
        this.$router.push({ name: "Mahasiswa" });
        })
        .catch(e => {
          console.log(e);
        });
    },
    splitUserId(){
      this.tableData.id_user = this.tableData.url
    }
    },
    mounted() {
    this.getStudent(this.$route.params.id);
  }
}
</script>
<style></style>
