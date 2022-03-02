<template>
<div class="container is-max-desktop">
    <h1 class="title is-1 has-text-centered">Entre em sua conta!</h1>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Nome" v-model="name">
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
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click="loginUser">
          Login
        </button>
      </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import { mapState } from 'pinia'
import { useToken } from '../store.js'

export default{
  setup(){
    return{
      name: "",
      password: "",
      token: ""
    }
  },
  methods:{
   loginUser(){
      try{
        axios.post("http://localhost:5001/api/login",{
          username: this.name,
          password: this.password
        })
          .then((response)=>{
            this.token = response.data.token
            this.userName = "";
            this.password = "";
            console.log(this.token)
            let myToken = useToken();
            myToken.$patch({
              myToken: this.token
            })
            router.push('/tasks')
          })
      }catch(err){
        console.log(err)
      }
    }
  }
}

</script>


<style scoped>
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.075);
        padding: 50px;
        width: 700px;
        border-radius: 10px;
    }
</style>