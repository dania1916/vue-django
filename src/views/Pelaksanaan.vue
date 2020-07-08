<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <div class="col text-left"> <h3>Informasi Kegiatan</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                            <div class="form-group row">
                                <label for="inputNamaPerusahaan" class="col-sm-4 col-form-label">Nama Perusahaan</label>
                                <div class="col-sm-7">
                                <input type="text" class="form-control" id="inputNamaPerusahaan">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputNIM" class="col-sm-4 col-form-label">Tanggal Mulai</label>
                                <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
                                    <div class="col-sm-7">
                                    <i class="fas fa-calendar input-prefix"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputNIM" class="col-sm-4 col-form-label">Tanggal Selesai</label>
                                <div class="col-sm-7">
                                <input type="num" class="form-control">
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-end"
                                :class="type === 'dark' ? 'bg-transparent': ''">
                                <base-pagination total="30"></base-pagination>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </div>
    

</template>

<script> 
</script>