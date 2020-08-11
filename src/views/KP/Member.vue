<template>
 <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <!-- PAGE 1 -->
                        <div v-if="step === 1">
                        <div class="col text-left"> <h3>Informasi Anggota</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                                <div class="form-group row">
                                <label for="inputNama" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <input  type="text" 
                                        class="form-control" 
                                        id="inputNama"
                                        >
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input  type="num" 
                                        class="form-control" 
                                        id="inputNIM">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputDosen" class="col-sm-3 col-form-label text-md-right">Dosen Pembimbing</label>
                                <div class="col-sm-7">
                                <input  type="text" 
                                        class="form-control" 
                                        id="inputDosen">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Group Kerja</label>
                                <div class="col-sm-7">
                                <select class="form-control">
                                    <option>Pilih</option>
                                    <option>Individu</option>
                                    <option>Berpasangan</option>
                                    <option>Kelompok</option>
                                </select>
                                </div>
                                </div>
                                <div class="form-group row" >
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-7" > 
                                <b-button v-b-modal.modal-no-backdrop variant="success">Tambah Anggota</b-button>
                                <b-modal id="modal-no-backdrop" hide-backdrop content-class="shadow" title="Anggota KP">
                                <p class="my-2">
                                <div class="form-group row">
                                <label  for="inputNama" class="col-sm-3 col-form-label text-md-right">Nama</label>
                                <div class="col-sm-7">
                                <input  type="text" 
                                        class="form-control" 
                                        id="inputNama">
                                </div>
                                </div>
                                <div class="form-group row">
                                <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">NIM</label>
                                <div class="col-sm-7">
                                <input  type="num" 
                                        class="form-control" 
                                        id="inputNIM">
                                </div>
                                </div>
                                </b-modal>
                                </div> 
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-3 col-form-label text-md-right">Anggota Tim</label>
                                <div class="col-sm-7">
                                <div> <b-table striped hover bordered :items="items"></b-table></div>
                                </div>
                                </div>
                                <div class="form-group row" >
                                <label class="col-sm-3"></label>
                                <div class = "col-sm-7" > 
                                <router-link :to="{name: 'pelaksanaan'}">
                                <base-button type = "success" @click.prevent="next()">Selanjutnya</base-button>
                                </router-link>
                                </div> 
                                </div>
                        </form>
                        </div>
                        <!-- PAGE 2 -->
                        <div v-if="step === 2">
                        <div class="col text-left"> <h3>Informasi Kegiatan</h3> </div>
                            <form>
                                <div class="form-group row"></div>
                                    <div class="form-group row">
                                    <label for="inputNamaPerusahaan" class="col-sm-3 col-form-label text-md-right">Nama Perusahaan</label>
                                    <div class="col-sm-7">
                                    <input  type="text"
                                            class="form-control" 
                                            id="inputNamaPerusahaan">
                                    </div>
                                    </div>
                                    <div class="form-group row">
                                    <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">Tanggal Mulai</label>
                                    <div class="col-sm-7">
                                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}"
                                                 @on-open="focus"
                                                 @on-close="blur"
                                                 :config="{allowInput: true}"
                                                 class="form-control datepicker"
                                                 v-model="dates.simple">
                                    </flat-picker>
                                    </base-input>
                                    </div>
                                    </div>
                                    <div class="form-group row">
                                    <label for="inputNIM" class="col-sm-3 col-form-label text-md-right">Tanggal Selesai</label>
                                    <div class="col-sm-7">
                                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                                    <flat-picker slot-scope="{focus, blur}"
                                                 @on-open="focus"
                                                 @on-close="blur"
                                                 :config="{allowInput: true}"
                                                 class="form-control datepicker"
                                                 v-model="date.simple">
                                    </flat-picker>
                                    </base-input>
                                    </div>
                                    </div>
                                    <div class="form-group row" >
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <base-button type = "danger" @click.prevent="prev()">Kembali </base-button>
                                    </div>
                                    <div class = "col-sm-7 pl-5" >
                                    <base-button type = "success" @click.prevent="next()">Selanjutnya</base-button>
                                    </div> 
                                    </div>
                            </form>
                            </div>
                            <!-- PAGE 3 -->
                            <div v-if="step === 3">
                            <div class="col text-left"> <h3>Informasi Laporan</h3> </div>
                            <form>
                                <div class="form-group row"></div>
                                    <div class="form-group row">
                                    <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Judul Laporan</label>
                                    <div class="col-sm-7">
                                    <input  type="text" 
                                            class="form-control" 
                                            id="inputJudul">
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
                                    <label for="inputJudul" class="col-sm-3 col-form-label text-md-right">Link Publikasi</label>
                                    <div class="col-sm-7">
                                    <input  type="text" 
                                            class="form-control" 
                                            id="inputJudul">
                                    </div>
                                    </div>
                                    <div class="form-group row">
                                    <label for="inputGroup" class="col-sm-3 col-form-label text-md-right ">Unggah Laporan</label>
                                    <div class="col-sm-7">
                                    <input  type="file" 
                                            class="form-control-file" 
                                            id="exampleFormControlFile1">
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
                                    <div class = "col-sm-1" > 
                                    <base-button type = "danger" @click.prevent="prev()">Kembali </base-button>
                                    </div>
                                    <div class = "col-sm-7 pl-5" >
                                    <base-button type = "success" @click.prevent="submit()">Simpan</base-button>
                                    </div> 
                                    </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </div>
    

</template>

<script>
import flatPicker from "vue-flatpickr-component"
import "flatpickr/dist/flatpickr.css"

  export default {
    components: {flatPicker},
    data() {
      return {
        step:1,
        items: [
          { No: 1, NAMA: 'Muhammad Nanda Jabar', NIM: '18/431564/SV/15535' },
          { No: 2, NAMA: 'Nanda', NIM: '18/431564/SV/15535' },
          { No: 3, NAMA: 'Jabar', NIM: '18/431564/SV/15535' }      
        ],
        dates: {simple: ""},
        date: {simple: ""},
      }
    },
    methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert('Submit to blah and show blah and etc.');      
    }
  }
  };
</script>