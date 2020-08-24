<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <!-- <div v-if="!submitted"> -->
                            <div class="col"> <h3>Tambah Topik / Bidang</h3> </div>
                            <validation-observer>
                    <!-- <form role="form" @submit.prevent="handleSubmit">
                      <div class="form-group">
                        <div class="form-group">
                              <input  type="text" v-model="topic.name" v-validate="'required'" id="firstName" name="firstName" placeholder="First Name" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                              <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div>
                          </div>
                        <div class="form-group">
                           <div class="text-center">
                            <base-button type="primary"  @click="handleSubmit" v-bind:disabled="invalid" class="my-4">Create Account</base-button>
                           </div>
                        </div>
                      </div>
                    </form> -->
                  </validation-observer>
                                <form role="form" @submit.prevent="handleSubmit">
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Nama Topik</label>
                                        <div class="col-md-7">
                                        <input  type="text" v-model="topic.name" v-validate="'required'" name="topics Name" placeholder="Bidang Konsentrasi" class="form-control" :class="{ 'is-invalid': submitted && errors.has('topics Name') }" />
                                        <div v-if="submitted && errors.has('topics Name')" class="invalid-feedback">{{ errors.first('topics Name') }}</div>
                                        </div>
                                    </div> 
                                    <div class="form-group row" >
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <router-link :to="{name: 'Bidang'}">
                                    <base-button type = "danger">Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" > 
                                    <base-button @click="submitTopic" class="btn btn-success" type="success">Submit</base-button>
                                    </div>
                                    </div>                                      
                                </form>
                            <!-- </div>
                          <div v-else>
                            <div class="col-pr-1">
                                <div class="form-group row"></div>
                                <base-alert type="success">
                                <strong>Success!</strong> Data bidang berhasil ditambahkan!
                                </base-alert>
                                </div> 
                                <div class="form-group row">
                                <div class="col-sm-1">
                                <router-link :to="{name: 'Bidang'}">
                                <base-button type = "danger">Kembali </base-button>
                                </router-link>
                                </div>
                                <div class = "col-sm-7 pl-5" >
                                <base-button type="primary" @click="newTopic">Tambah Bidang</base-button>
                                 <div class="form-group row"></div>
                                </div>
                                </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
</template>




<script>
import TopicDataService from "../../services/TopicDataService";

export default {
  name: "add-student",
  data() {
    return {
      topic: {
        id: null,
        name:''
      },
      submitted: false
    };
  },
  methods: {
    submitTopic() {
      var data = {
       name:this.topic.name
      };

      TopicDataService.create(data)
        .then(response => {
          this.topic.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTopic() {
      this.submitted = false;
      this.topic = {};
    },
        handleSubmit() {
        let data = {
                name: this.topic.name
            }
                  TopicDataService.create(data)
                      .then(response => {
                        this.topic.id = response.data.id;
                        console.log(response.data);
                        this.submitted = true;
                      })
                      .catch(e => {
                        console.log(e);
                      });
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.$router.push('/topics')
                }
            });
        }
  },
};
</script>