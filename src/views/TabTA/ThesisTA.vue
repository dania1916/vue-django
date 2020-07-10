<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <div class="col text-left"> <h3>Informasi Laporan</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                            <div class="form-group row">
                                <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Judul Laporan</label>
                                <div class="col-sm-7">
                                <input type="text" class="form-control" id="inputJudul">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Topik Laporan</label>
                                <div class="col-sm-7">
                                <select class="form-control">
                                    <option>Pilih</option>
                                    <option>Networking</option>
                                    <option>IoT</option>
                                    <option>Security</option>
                                    <option>System Administrator</option>
                                    <option>Software Engineering</option>
                                    <option>Lainnya</option>
                                </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Proposal</label>
                                <div class="col-sm-7">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Laporan</label>
                                <div class="col-sm-7">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Unggah Hand Out</label>
                                <div class="col-sm-7">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputGroup" class="col-sm-3 col-form-label text-md-right">Unggah PPT</label>
                                <div class="col-sm-7">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                                </div>
                            </div>
                            <div class="form-group row" >
                                <label class="col-sm-3"></label>
                            <div class = "col-sm-7" > 
                            <base-button type = "danger" >Kembali </base-button>
                            <base-button type = "success" >Submit</base-button>
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

