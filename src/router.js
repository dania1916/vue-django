import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: [{
            path: '/',
            redirect: 'dashboard',
            component: DashboardLayout,
            children: [{
                    path: '/dashboard',
                    name: 'dashboard',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Dashboard.vue')
                },
                {
                    path: '/icons',
                    name: 'icons',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Icons.vue')
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/UserProfile.vue')
                },
                {
                    path: '/maps',
                    name: 'maps',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Maps.vue')
                },
                {
                    path: '/kp',
                    name: 'kerja praktik',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/KP.vue')
                },
                {
                    path: '/tugas akhir',
                    name: 'tugas akhir',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Tugas Akhir.vue')
                },
                {
                    path: '/perusahaan',
                    name: 'perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Perusahaan.vue')
                },
                {
                    path: '/member',
                    name: 'Anggota',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TabKP/Member.vue')
                },
                {
                    path: '/implementation',
                    name: 'pelaksanaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TabKP/Implementation.vue')
                },
                {
                    path: '/thesiskp',
                    name: 'Laporan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TabKP/ThesisKP.vue')
                },
                {
                    path: '/profilta',
                    name: 'Profil',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TabTA/ProfilTA.vue')
                },
                {
                    path: '/thesista',
                    name: 'Laporan TA',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TabTA/ThesisTA.vue')
                },
                {
                    path: '/students',
                    name: 'Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students.vue')
                },
                {
                    path: '/lecturer',
                    name: 'Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturer.vue')
                },
                {
                    path: '/topics',
                    name: 'Bidang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Topics.vue')
                },
                {
                    path: '/detailkp',
                    name: 'Detail KP',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TabKP/DetailKP.vue')
                }
            ]
        },
        {
            path: '/',
            redirect: 'login',
            component: AuthLayout,
            children: [{
                    path: '/login',
                    name: 'login',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Register.vue')
                }
            ]
        },
    ]
})