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
                                    <h3 class="mb-0">Detail Bidang KP</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Member -->
                        <template>
                          <validation-observer>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted"></h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Nama Bidang Konsentrasi"
                                                        placeholder=""
                                                        input-classes="form-control-alternative"
                                                        v-model="tableData.name" 
                                                        id="name" 
                                                        name="name"
                                                        v-validate="'required'"
                                                        :class="{ 'is-invalid': submitted && errors.has('name') }"
     
                                            />
                                            <div  v-if="submitted && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
                                    </div>
                                </div>
                                </div>
                                <hr class="my-4" />
                            <div class="form-group row" >
                            <label class="col-sm-1"></label>
                            <div class = "" > 
                            <router-link :to="{name: 'Bidang'}">
                            <base-button type = "danger" >Kembali </base-button>
                            </router-link>
                            </div>
                            <div class = "pl-3" >
                            <router-link :to="{name: 'Bidang'}">
                            <base-button type = "success" v-bind:disabled="invalid">Update</base-button>
                            </router-link>
                            </div> 
                            </div>
                            </form>
                            </validation-observer>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopicDataService from "../../services/TopicDataService";
import { required } from "vuelidate/lib/validators";
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
    validations: {
    form: {
      name: { required },
    }
  },
    methods: {
      getTopic(id) {
      TopicDataService.get(id)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    updateTopic() {
    TopicDataService.update(this.tableData.id, this.tableData)
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
    this.getTopic(this.$route.params.id);
  }
}
</script>