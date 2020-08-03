<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col px-8">
                    <projects-table title="Daftar Bidang Konsentrasi"></projects-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import ProjectsTable from './Topics/ProjectsTopics'
  
  export default {
    name: 'tables',
    components: {
      ProjectsTable
    }
  };
</script>
<style></style>
