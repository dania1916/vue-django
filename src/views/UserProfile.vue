<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="min-height: 600px; background-image: url(img/theme/profile-cover.png); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-success opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-7 col-md-10">
                        <h1 class="display-2 text-white">Hello {{tableData.first_name}}</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <router-link :to="{name: 'edit profile'}">
                        <base-button size="md" type="default" class="float-left">Edit profile</base-button>
                        </router-link>                    
                        </div>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <img src="img/theme/team-4-800x800.jpg" class="rounded-circle">
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
                                    {{tableData.first_name}} {{tableData.last_name}}<span class="font-weight-light">, {{tableData.profile.nim}}</span>
                                </h3>
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i>{{tableData.profile.address}}
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i>D IV Teknologi Rekayasa Internet
                                </div>
                                <div>
                                    <i class="ni education_hat mr-2"></i>Universitas Gadjah Mada
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
                                    <h3 class="mb-0">Informasi Akun</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.first_name"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.last_name"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Lahir"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['dob']"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['nim']"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">Akun</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email address"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.email"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="No Hp"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['number_phone']"
                                                        disabled
                                            />
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Username"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.username"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Password"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.Password"
                                            />
                                        </div>
                                    </div> -->
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                 <h6 class="heading-small text-muted mb-4">Kontak</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Desa"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['village']"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RT"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['rt_village']"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="RW"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['rw_village']"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kecamatan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['sub_district']"
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
                                                        v-model="tableData.profile['city']"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Provinsi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['province']"
                                                        disabled
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kode Pos"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['postal_code']"
                                                        disabled
                                            />
                                        </div>
                                    </div>
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

import UserDataService from "../services/UserDataService";
import axios from 'axios'

export default {

    name: 'user-profile',
    data() {
      return {
    tableData: '',
    }
    },
  computed: {
    isLoggedIn() {
        return this.$store.getters.isLoggedIn
    }
  },
  created () {
      this.fetchUser(this.$route.params.pk)
      const token = localStorage.getItem('token')
      if (token) {
          this.fetchAuthenticatedUser(token)
          }
    },
    methods:{
        fetchUser(){
            // const token = localStorage.getItem('token')
            const pk = localStorage.getItem('pk')
            UserDataService.get(pk)
            // axios.get('http://localhost:8000/api/users/'+pk,
            // {
            //     headers: {
            //                 Authorization: `Bearer ${token}`
            //             }
            .then(response =>{
                this.tableData = response.data
            })
        },
        updateUser() {
        axios.update('http://localhost:8000/api/users/',this.tableData.id, this.tableData)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    },
}
</script>
<style></style>

