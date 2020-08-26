<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
        <div class="col-md-3 text-right">
          <base-input       placeholder="Search"
                            class="text-black"
                            alternative=""
                            addon-right-icon="fas fa-search"
                            v-model="title_search"
                            @change="searchTitle"
                            @click="searchTitle"
                            >
        </base-input>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th class="text-md-center">NO</th>
          <th class="text-md-center">NAMA</th>
          <th class="text-md-center">JUDUL</th>
          <th class="text-md-center">PROPOSAL</th>
          <th class="text-md-center">LAPORAN</th>
          <th class="text-md-center">LINK PUBLIKASI</th>
          <th class="text-md-center">AKSI</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.id}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.name.first_name}} {{row.name.last_name}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.thesis_title}}</span>
              </div>
          </th>
          <th class="text-md-center" scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm"><b-button pill variant="primary" size="sm" :href="row.thesis_proposal">Download</b-button></span>
              </div>
          </th>
          <th scope="row">
            <div class="text-md-center">
                <span class="name mb-0 text-sm"><b-button pill variant="primary" size="sm" :href="row.thesis_report">Download</b-button></span>
              </div>
          </th>
          <th scope="row">
            <div class="text-md-center">
                <span class="name mb-0 text-sm">{{row.publication_link}}</span>
              </div>
          </th>
          <th class="media-body text-md-center">
            <div class="media-body">
            <b-button pill variant="success" size="sm" :href="'/thesis/' + row.id">Detail</b-button>
            </div>
          </th>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import ThesisDataService from "../../services/ThesisDataService";
import axios from 'axios'


  export default {
    name: 'projects-table',
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
        tableData: [{}],
        title_search:''
      }
    },

    methods: {
    fetchUser(){
            const token = localStorage.getItem('token')
            const pk = localStorage.getItem('pk')
            axios.get('http://localhost:8000/api/users/'+pk,
            { headers: { Authorization: `Bearer ${token}`}})
            .then(response =>{this.tableData = response.data})
            },
    retrieveCompany() {
      ThesisDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    onClick() {
              axios({
                    url: 'http://127.0.0.1:8000/api/thesis',
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                     var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                     var fileLink = document.createElement('a');
   
                     fileLink.href = fileURL;
                     fileLink.setAttribute('download', 'file.pdf');
                     document.body.appendChild(fileLink);
   
                     fileLink.click();
                });
          },
      searchTitle() {
      ThesisDataService.findByTitle(this.title_search)
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
    mounted() {
    this.retrieveCompany();
    this.getThesis(this.$route.params.id);
  }
}
</script>
<style>
</style>
