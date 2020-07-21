<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <div v-if="!submitted">
                            <div class="col"> <h3>Tambah Topik / Bidang</h3> </div>
                                <form>
                                    <div class="form-group row"></div>
                                    <div class="form-group row">
                                        <label for="name" class="col-md-3 col-form-label text-md-right">Nama Topik</label>
                                        <div class="col-md-7">
                                        <input type="text" class="form-control" required id="name" v-model="topic.name" name="name" placeholder="IoT, Network Automation, SysAdmin">
                                        </div>
                                    </div>   
                                    <div class="form-group row">
                                        <label for="inputNamaPerusahaan" class="col-sm-3 col-form-label"></label>
                                        <div class="col-sm-7">
                                            <base-button @click="submitTopic" class="btn btn-success" type="success">Submit</base-button>
                                            <router-link :to="{name: 'Bidang'}">
                                            <base-button type="danger">Kembali</base-button>
                                            </router-link>
                                        </div>   
                                    </div>                                      
                                </form>
                            </div>
                          <div v-else>
                            <div class="col">
                              <div class="form-group row"></div>
                                <base-alert type="success">
                                <strong>Success!</strong> Data mahasiswa baru berhasil ditambahkan!
                                </base-alert>
                              </div> 
                              <div class="col">
                                <base-button type="secondary" @click="newTopic">Detail</base-button>
                                <base-button type="primary" @click="newTopic">Tambah Mahasiswa</base-button>
                              <div class="form-group row"></div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
</template>




<script>
import TopicDataService from "../services/TopicDataService";

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
    }
  },
};
</script>