<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        <div class="container-fluid d-flex align-items-center">
        <div class="row">
        <router-link :to="{name: 'Profil'}">
        <base-button type="default" size="md">Tambah Data</base-button>
        </router-link>
        </div>
        </div>
        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <projects-table title="Laporan TA"></projects-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import ProjectsTable from './TA/ProjectsTA'
  export default {
    name: 'tables',
    components: {
      ProjectsTable
    }
  };
</script>
<style></style>
