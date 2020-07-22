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
            id: '1',
            name: 'Muhammad Nanda',
            email: 'apa@gmail.com',
            nip: 12345678890
          },
          {
            id: '2',
            name: 'Muhammad Nanda',
            email: 'apa@gmail.com',
            nip: 12345678890
          },
          {
            id: '3',
            name: 'Muhammad Nanda',
            email: 'apa@gmail.com',
            nip: 12345678890
          }
        ]
      }
    }
  }
</script>
<style>
</style>
