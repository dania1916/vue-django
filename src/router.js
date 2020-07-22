import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

export default new Router({
    mode:"history",
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
                    path: '/students',
                    name: 'Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students.vue')
                },
                {
                    path: '/students/add',
                    name: 'Tambah Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students/FormStudents.vue')
                },
                {
                    path: '/students/{id}',
                    name: 'Detail Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students/DetailStudents.vue')
                },
                {
                    path: '/students/{id}/edit',
                    name: 'Edit Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students/EditStudents.vue')
                },
                {
                    path: '/lecturers',
                    name: 'Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers.vue')
                },
                {
                    path: '/lecturers/add',
                    name: 'Tambah Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers/FormLecturers.vue')
                },
                {
                    path: '/lecturers/{id}',
                    name: 'Detail Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers/DetailLecturers.vue')
                },
                {
                    path: '/lecturers/{id}/edit',
                    name: 'Edit Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers/EditLecturers.vue')
                },
                {
                    path: '/thesis',
                    name: 'tugas akhir',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Tugas Akhir.vue')
                },
                {
                    path: '/thesis/profile',
                    name: 'Profil',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TA/ProfilTA.vue')
                },
                {
                    path: '/internships',
                    name: 'kerja praktik',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/KP.vue')
                },
                {
                    path: '/internships/member/',
                    name: 'Anggota',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/KP/Member.vue')
                },
                {
                    path: '/internships/activity/',
                    name: 'pelaksanaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/KP/Implementation.vue')
                },
                {
                    path: '/internships/submission',
                    name: 'Laporan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/KP/ThesisKP.vue')
                },
                {
                    path: '/students',
                    name: 'Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students.vue')
                },
                {
                    path: '/thesis/intern',
                    name: 'Magang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TA/Intern.vue')
                },
                {
                    path: '/thesis/submission',
                    name: 'Laporan TA',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TA/ThesisTA.vue')
                },
                {
                    path: '/companies',
                    name: 'Perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Companies.vue')
                },
                {
                    path: '/companies/add',
                    name: 'Tambah Perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Companies/FormCompanies.vue')
                },
                {
                    path: '/companies/{id}',
                    name: 'Detail Perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Companies/DetailCompanies.vue')
                },
                {
                    path: '/companies/{id}/edit',
                    name: 'Edit Perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Companies/EditCompanies.vue')
                },
                {
                    path: '/topics',
                    name: 'Bidang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Topics.vue')
                },
                {
                    path: '/topics/add',
                    name: 'Tambah Bidang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Topics/FormTopics.vue')
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
                        import ('./views/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () =>
                        import ('./views/Register.vue')
                }
            ]
        },
    ]
})