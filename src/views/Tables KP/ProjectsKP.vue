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
          <router-link :to="{name: 'Anggota'}">
          <base-button type="primary" size="md">Unggah Laporan</base-button>
          </router-link>
        </div>
      </div>
    </div>

      <div class="row">
        <div class="col-sm pl-5">
          <div class="dataTables_length" id="loanRequestsTable_length">
          <label>Show <select name="loanRequestsTable_length" aria-controls="loanRequestsTable" class="custom-select custom-select-sm form-control form-control-sm">
          <option value="10">10</option><option value="25">25</option>
          <option value="50">50</option><option value="100">100</option>
          </select></label>
          </div>
        </div>
        <div class="col-sm pl-9">
          <div id="loanRequestsTable_filter" class="dataTables_filter">
          <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="loanRequestsTable">
          </label>
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
          <th>NAMA</th>
          <th>JUDUL</th>
          <th>PROPOSAL</th>
          <th>LAPORAN</th>
          <th>AKSI</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
          </th>
          <th scope="row">
            <div class="media-body">
                <span class="name mb-0 text-sm">{{row.title}}</span>
              </div>
          </th>

          <td class="text-right">
            <base-dropdown class="dropdown" position="right">
              <a slot="title" class="btn btn-sm btn-icon-only text-light" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
              </a>

              <template>
                <a class="dropdown-item" href="#">Detail</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
              </template>
            </base-dropdown>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
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
        tableData: [
          {
            title: 'Argon Design System'
          },
          {
            title: 'Angular Now UI Kit PRO'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
