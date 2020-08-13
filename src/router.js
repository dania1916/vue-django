import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
// import store from './store.js'


// Router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//       if (store.getters.isLoggedIn) {
//         next()
//         return
//       }
//       next('/login') 
//     } else {
//       next() 
//     }
//   })

Vue.use(Router)


let router = new Router({
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
                    path: '/profile/:id/edit',
                    name: 'edit profile',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/UserProfile/EditUser.vue')
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
                    path: '/students/:id',
                    name: 'Detail Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students/DetailStudents.vue')
                },
                {
                    path: '/students/:id/edit',
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
                    path: '/lecturers/:id',
                    name: 'Detail Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers/DetailLecturers.vue')
                },
                {
                    path: '/lecturers/:id/edit',
                    name: 'Edit Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers/EditLecturers.vue')
                },
                {
                    path: '/lecturers/:id/delete',
                    name: 'Delete Dosen',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Lecturers/DeleteLecturers.vue')
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
                    path: '/thesis/:id',
                    name: 'Detail TA',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TA/DetailTA.vue')
                },
                {
                    path: '/thesis/:id/edit',
                    name: 'Edit TA',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/TA/EditTA.vue')
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
                    path: '/internships/:id',
                    name: 'Detail KP',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/KP/DetailKP.vue')
                },
                {
                    path: '/students',
                    name: 'Mahasiswa',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Students.vue')
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
                    path: '/companies/:id',
                    name: 'Detail Perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Companies/DetailCompanies.vue')
                },
                {
                    path: '/companies/:id/edit',
                    name: 'Edit Perusahaan',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Companies/EditCompanies.vue')
                },
                {
                    path: '/topics',
                    name: 'Bidang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Topics.vue'),
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: '/topics/add',
                    name: 'Tambah Bidang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Topics/FormTopics.vue')
                },
                {
                    path: '/topics/:id/edit',
                    name: 'Edit Bidang',
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ './views/Topics/EditTopics.vue')
                },
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


export default router