<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://tri.sv.ugm.ac.id" class="font-weight-bold ml-1" target="_blank">Creative Tim</a>
         
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          Supported by :
          <li class="nav-item">
            <a href="https://www.ugm.ac.id" class="nav-link" target="_blank">Universitas Gadjah Mada</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
