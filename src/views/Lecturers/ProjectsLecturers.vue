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
          <router-link :to="{name: 'Tambah Dosen'}">
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
                  :data="tableData">
        <template slot="columns">
          <th class="text-md-center">NO</th>
          <th class="text-md-center">NAMA</th>
          <th class="text-md-center">EMAIL</th>
          <th class="text-md-center">NIP</th>
          <th class="text-md-center">AKSI</th>
          
        </template>

        <template slot-scope="{lecturer}">
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{lecturer.id}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md">
                <span class="name mb-0 text-sm">{{lecturer.name}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{lecturer.email}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{lecturer.nip}}</span>
              </div>
          </th>
          <td class="text-center">
            <base-dropdown class="dropdown" position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
                <a class="dropdown-item" href="#">Detail</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import LecturerDataService from "../../services/LecturerDataService";
  
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
      lecturer: [],
      id: null,
      lecturer_name: "",
      lecturer_email: "",
      lecturer_nip: "",
    };
  },
  methods: {
    lecturers() {
      LecturerDataService.getAll()
        .then(response => {
          this.lecturer = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>
<style>
</style>
