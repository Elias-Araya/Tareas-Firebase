<template>
  <form @submit.prevent="procesoFormulario">
    <Input :tarea="tarea"/>
  </form>
  <hr>
  <ListaTareas />
</template>

<script>

import Input from '../components/Input'
import {mapActions} from 'vuex'
import ListaTareas from '../components/ListaTareas'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input, 
    ListaTareas
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas', 'cargarDB']),
    procesoFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log("Vacio")
        return
      }
      console.log("no esta vacio")

      //Generar id

      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)

      //Enviar los datos
      this.setTareas(this.tarea)

      //Limpieza
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  computed:{
    bloquear(){
      return this.tarea.nombre.trim() === '' ? true : false
    }
  },
  created(){
    this.cargarDB()
  }
}
</script>
