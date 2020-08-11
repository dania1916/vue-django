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
                        <h1 class="display-2 text-white">Hello {{tableData.first_name}}</h1>
                        <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <router-link :to="{name: 'edit profile'}">
                        <base-button href="#!" size="md" type="default" class="float-left">Edit profile</base-button>
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
                        <form enctype="multipart/form-data">
                                <h6 class="heading-small text-muted mb-4">Profil</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Depan"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.first_name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Belakang"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.last_name"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Tanggal Lahir"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.dob"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="NIM"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.nim"
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
                                            />
                                        </div>
                                        <!-- <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Photo"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile['photo']"
                                            />
                                        </div> -->
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="No Hp"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.number_phone"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Password"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.password"
                                            />
                                        </div>
                                        <div class="form-group row">
                                        <label for="student_name" class="col-sm-3 col-form-label text-md-right">Foto</label>
                                        <div class="col-sm-7">
                                            <input type="file" @change="selectFile">
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                     
                         
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                 <h6 class="heading-small text-muted mb-4">Kontak</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Alamat"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kota"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.city"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Provinsi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.province"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Kode Pos"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.profile.zip"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div class="col-4 text-left">
                                    <base-button href="#!" size="md" type="default" @click="updateTopic()" class="float-left">Simpan</base-button>
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

import axios from 'axios'
import UserDataService from "../../services/UserDataService";

export default {
    name: 'user-profile',
    data() {
      return {
         tableData: [],
         file:''
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
            const token = localStorage.getItem('token')
            const pk = localStorage.getItem('pk')
            axios.get('http://localhost:8000/api/users/'+pk,
            {
                headers: {
                            Authorization: `Bearer ${token}`
                        }
            }).then(response =>{
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
        updateTopic() {
        let formData = new FormData();
        formData.append('first_name', this.tableData.first_name);
        formData.append('last_name', this.tableData.last_name);
        formData.append('profile.nim', this.tableData.profile.nim);
        formData.append('profile.number_phone', this.tableData.profile.number_phone);
        formData.append('profile.address', this.tableData.profile.address);
        formData.append('profile.province', this.tableData.profile.province);
        formData.append('profile.city', this.tableData.profile.city);
        formData.append('profile.zip', this.tableData.profile.zip);
        formData.append('profile.dob', this.tableData.profile.dob);
        formData.append('profile.photo', this.file);
        formData.append('email', this.tableData.email);
        formData.append('password', this.tableData.password);
        const pk = localStorage.getItem('pk')
        const token = localStorage.getItem('token')
        UserDataService.update(pk,formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                } 
        })
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    selectFile(event){
        // this.file = this.$refs.file.files[0];
        this.file = event.target.files[0];
     }
    },
    
}
</script>
<style></style>

