<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard'
          }"
        />

        
        <sidebar-item :link="{name: 'User Profile', icon: 'ni ni-circle-08 text-blue', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Mahasiswa', icon: 'ni ni-single-02 text-yellow', path: '/students'}"/>
        <sidebar-item :link="{name: 'Aktivitas KP', icon: 'ni ni-single-02 text-yellow', path: '/intern'}"/>
        <sidebar-item :link="{name: 'Aktivitas TA', icon: 'ni ni-single-02 text-yellow', path: '/paper'}"/>
        <sidebar-item :link="{name: 'Dosen', icon: 'ni ni-single-02 text-orange', path: '/lecturers'}"/>
        <sidebar-item :link="{name: 'Kerja Praktik', icon: 'ni ni-briefcase-24 text-blue', path: '/internships'}"/>
        <sidebar-item :link="{name: 'Tugas Akhir', icon: 'ni ni-archive-2 text-red', path: '/thesis'}"/>
        <sidebar-item :link="{name: 'Perusahaan', icon: 'ni ni-bullet-list-67 text-black', path: '/companies'}"/>
        <sidebar-item :link="{name: 'Bidang KP', icon: 'ni ni-bullet-list-67 text-red', path: '/topics'}"/>
        
        
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
