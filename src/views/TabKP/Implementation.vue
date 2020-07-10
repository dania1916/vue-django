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
                                <label for="inputNamaPerusahaan" class="col-sm-3 col-form-label text-md-right">Nama Perusahaan</label>
                                <div class="col-sm-7">
                                <input type="text" class="form-control" id="inputNamaPerusahaan">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputNamaPerusahaan" class="col-sm-3 col-form-label text-md-right">Tahun KP</label>
                                <div class="col-sm-7">
                                <input type="number" class="form-control" id="tahunKP">
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
                                v-model="dates.simple">
                                </flat-picker>
                                </base-input>
                                 </div>
                            </div>
                            <div class="form-group row" >
                                <label class="col-sm-3"></label>
                            <div class = "col-sm-1" > 
                            <router-link :to="{name: 'Anggota'}">
                            <base-button type = "danger" >Kembali </base-button>
                            </router-link>
                            </div>
                            <div class = "col-sm-7 pl-5" >
                            <router-link :to="{name: 'Laporan'}">
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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
 
export default 
{
 components: {flatPicker},
 data() {
    return {
        dates: {simple: "2018-07-17"},
        }
    },
}
</script>