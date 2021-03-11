import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {rutaProtegida: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {rutaProtegida: true}

  },
  {
    path: '/editar/:id',
    name: 'Editar',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/registro',
    name: 'Registro',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//Metodo 1.
router.beforeEach((to, from, next) =>{
 if(to.meta.rutaProtegida){
   if(store.getters.usuarioLogueado){
     next()
   }else{
     next('/login')
   }
 }else{
   next()
 }
})

//Metodo 2.-
router.beforeEach((to, _, next) => {
  return !to.meta.rutaProtegida ? next() : store.getters.usuarioLogueado ? next() : next('login');
});

export default router
