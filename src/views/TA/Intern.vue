<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">
         <div class="row justify-content-center">
            <div class="col-lg-10 col-md-10">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-10 py-lg-10">
                        <div class="col text-left"> <h3>Magang</h3> </div>
                        <form>
                            <div class="form-group row"></div>
                            <div class="form-group row">
                                <label for="inputNama" class="col-sm-3 col-form-label text-md-right">Magang</label>
                                <div class="col-sm-7">
                                <b-form-radio v-model="selected" name="some-radios" value="A">Iya</b-form-radio>
                                <b-form-radio v-model="selected" name="some-radios" value="B">Tidak</b-form-radio>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="group" class="col-sm-3 col-form-label text-md-right">Nama Perusahaan</label>
                                <div class="col-sm-7">
                                <select class="form-control">
                                    <option>Pilih</option>
                                    <option>Departemen</option>
                                    <option>Telkom</option>
                                </select>
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
                                    <label class="col-sm-3"></label>
                                    <div class = "col-sm-1" > 
                                    <router-link :to="{name: 'Profil'}">
                                        <base-button type = "danger" >Kembali </base-button>
                                    </router-link>
                                    </div>
                                    <div class = "col-sm-7 pl-5" >
                                    <router-link :to="{name: 'Laporan TA'}">
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
        dates: {simple: ""},
        date: {simple: ""},
        }
    },
}
</script>