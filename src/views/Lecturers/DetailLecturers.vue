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
                                    <h3 class="mb-0">Detail Dosen</h3>
                                </div>
                                <div class="col text-right">
                                    <b-button pill variant="primary" size="md" :href="'/lecturers/'+tableData.id+'/edit'">Edit</b-button>
                                    <b-button pill variant="danger" size="md" :href="'/lecturers/'" @click="deleteLecturer">Delete</b-button>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4"></h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Lengkap"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name" 
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Alamat Email"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIP"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.nip"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIDN"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.nidn"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div class="col-4 text-left">
                                    <router-link :to="{name: 'Dosen'}">
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
import LecturerDataService from "../../services/LecturerDataService";

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
      getLecturer(id) {
      LecturerDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  },
  deleteLecturer() {
      LecturerDataService.delete(this.tableData.id)
        .then(response => {
        console.log(response.data);
        this.$router.push({ name: "Dosen" });
        })
        .catch(e => {
          console.log(e);
        });
    }
    },
    mounted() {
    this.getLecturer(this.$route.params.id);
  }
}
</script>