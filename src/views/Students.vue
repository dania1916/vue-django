<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <div class="container-fluid d-flex align-items-center">
        <div class="row">
        <router-link :to="{name: 'Tambah Mahasiswa'}">
        <base-button type="default" size="md">Tambah Data</base-button>
        </router-link>
        </div>
        </div>
        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col px-5">
                    <projects-table title="Daftar Mahasiswa"></projects-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import ProjectsTable from './Students/ProjectsStudents'
  export default {
    name: 'tables',
    components: {
      ProjectsTable
    }
  };
</script>
<style></style>
