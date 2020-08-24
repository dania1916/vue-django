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
          <div class="col text-right">
          <router-link :to="{name: 'Tambah Mahasiswa'}">
          <base-button type="primary" size="md" href="#">Tambah Data</base-button>
          </router-link>
          </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData" >
        <template slot="columns">
          <th class='text-md-center'>NO</th>
          <th class='text-md-center'>NAMA</th>
          <th class="text-md-center">EMAIL</th>
          <th class='text-md-center'>NIM</th>
          <th class='text-md-center'>AKSI</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.id}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md">
                <span class="name mb-0 text-sm">{{row.first_name}} {{row.last_name}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.email}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.nim}}</span>
              </div>
          </th>
          <th class="media-body text-md-center">
            <div class="media-body">
            <b-button pill variant="success" size="sm" :href="'/students/' + row.id">Detail</b-button>
            </div>
          </th>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import StudentDataService from "../../services/StudentDataService";

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
        tableData: 
        [{
          }]
      }
    },
    methods: {
    retrieveStudents() {
      StudentDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
    mounted() {
    this.retrieveStudents();
  }
}
</script>
<style>
</style>
