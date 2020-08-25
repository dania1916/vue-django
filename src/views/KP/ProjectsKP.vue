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
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.id}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.name.first_name}} {{row.name.last_name}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm"><b-button pill variant="primary" size="sm" :href="row.proposal">Download</b-button></span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm"><b-button pill variant="primary" size="sm" :href="row.report">Download</b-button></span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body text-md-center">
                <span class="name mb-0 text-sm">{{row.publication_link}}</span>
              </div>
          </th>
          <th class="media-body text-md-center">
            <div class="media-body">
            <b-button pill variant="success" size="sm" :href="'/internships/' + row.id">Detail</b-button>
            </div>
          </th>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
import InternshipDataService from "../../services/InternshipDataService"

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
    retrieveTopics() {
      InternshipDataService.getAll()
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
    this.retrieveTopics();
  }
}
</script>