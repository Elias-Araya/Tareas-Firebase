<template>
    <h1>Registro de Usuarios</h1>
    <form class="form-inline" @submit.prevent="procesarFormulario">
        <label for="email" class="mr-sm-2">Direccion Email</label>
        <input type="email" class="form-control mb-2 mr-sm-2" placeholder="Ingresar email" v-model.trim="email">
        <label for="pwd" class="mr-sm-2">Password:</label>
        <input type="password" class="form-control mb-2 mr-sm-2" placeholder="Ingresar Contraseña" v-model.trim="pass1">  
        <input type="password" class="form-control mb-2 mr-sm-2" placeholder="Ingresar Contraseña" v-model.trim="pass2">      
        <button type="submit" class="btn btn-primary mb-2" :disabled="bloquear">Registrar</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            email:'',
            pass1:'',
            pass2:''
        }
    },
    computed: {
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5 && this.pass1 === this.pass2){
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions(['registroUsuarios']),
        procesarFormulario(){
            this.registroUsuarios({email: this.email, password: this.pass1})
            this.email = '';
            this.pass2 = '';
            this.pass1 = '';
        }
    }
}
</script>

