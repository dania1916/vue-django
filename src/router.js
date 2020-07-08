import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
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
                    path: '/kerja praktik',
                    name: 'kerja praktik',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Kerja Praktik.vue')
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
                    path: '/anggota',
                    name: 'anggota',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Anggota.vue')
                },
                {
                    path: '/pelaksanaan',
                    name: 'pelaksanaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Pelaksanaan.vue')
                },
                {
                    path: '/Laporan',
                    name: 'Laporan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Laporan.vue')
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
        }
    ]
})