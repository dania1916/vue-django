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
          <th class="text-md-center">EMAIL</th>
          <th class="text-md-center">NIP</th>
          <th class="text-md-center">AKSI</th>
          
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.id}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md">
                <span class="name mb-0 text-sm">{{row.name}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.email}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.nip}}</span>
              </div>
          </th>
          <td class="text-center">
            <base-dropdown class="dropdown" position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>
                <a class="dropdown-item" :href="'/lecturers/' + row.id"> Detail</a>
                <a class="dropdown-item" :href="'/lecturers/' + row.id + '/edit'">Edit</a>
                <a class="dropdown-item" :href="'/lecturers/' + row.id + '/delete'">Delete</a>
                <a class="dropdown-item" :href="'/lecturers/'" @click="deleteLecturer(row.id)">Delete 2</a>

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
        pagination: {
        default: 1
      },
        tableData: 
        [{
          }],
          title_search:''
      }
    },
    methods: {
    retrieveLecturer() {
      LecturerDataService.getAll()
        .then(response => {
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
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
      deleteLecturer(id) {
      LecturerDataService.delete(id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Dosen" });
        })
        .catch(e => {
          console.log(e);
        });
    },
      searchTitle() {
      LecturerDataService.findByTitle(this.title_search)
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
    this.retrieveLecturer(this.$route.params.id);
  }
}
</script>
