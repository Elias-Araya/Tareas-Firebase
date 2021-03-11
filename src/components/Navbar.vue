<template>
  <div class="navbar navar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
          Formularios
      </router-link>
      <div class="de-flex">
          <router-link class="btn btn-dark" to="/" v-if="usuarioLogueado">
                Tareas
          </router-link>
          <router-link class="btn btn-dark" to="/login" v-if="!usuarioLogueado">
                Ingresar
          </router-link>
          <router-link class="btn btn-dark" to="/registro" v-if="!usuarioLogueado">
                Registrar
          </router-link>
          <button v-if="usuarioLogueado" class="btn btn-dark" @click="cerrarSesion()">
              Cerrar Sesion
          </button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['usuarioLogueado'])
    },
    methods:{
        ...mapActions(['cerrarSesion'])
    }
}
</script>

