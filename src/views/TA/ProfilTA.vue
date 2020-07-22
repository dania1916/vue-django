<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <div class="col text-left"> <h3>Data Diri</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                            <div class="form-group row">
                                <label for="inputNama" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <input type="text" class="form-control" id="inputNama">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input type="num" class="form-control" id="inputNIM">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputDosen" class="col-sm-3 col-form-label text-md-right">Dosen Pembimbing</label>
                                <div class="col-sm-7">
                                <input type="text" class="form-control" id="inputDosen">
                                </div>
                            </div>
                            <div class="form-group row" >
                                <label class="col-sm-3"></label>
                            <div class = "col-sm-7" > 
                            <router-link :to="{name: 'Magang'}">
                            <base-button type = "success">Selanjutnya</base-button>
                            </router-link>
                            </div> 
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