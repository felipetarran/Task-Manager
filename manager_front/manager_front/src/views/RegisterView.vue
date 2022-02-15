<template>
<div class="container is-max-desktop">
    <h1 class="title is-1 has-text-centered">Cadastre sua conta!</h1>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Nome" v-model="userName">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="userPassword">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click="saveUser">
          Register
        </button>
      </p>
    </div>
</div>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                userName: "",
                userPassword: ""
            }
        },
        methods:{
            async saveUser(){
                if(this.userName != "" && this.userPassword != ""){
                    try{
                        await axios.post("http://localhost:5001/user",{
                            username: this.userName,
                            password: this.userPassword
                        });
                        this.userName = "";
                        this.userPassword = "";
                        this.$router.push('/tasks')
                    }catch(err){
                        console.log(err)
                    }
                }else{
                    window.alert("Digite um nome e senha válidos")
                }    
            }
        }
    }

</script>

<style scoped>
    .container{
        margin-top: 160px;
    }
</style>