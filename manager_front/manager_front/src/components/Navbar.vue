<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import router from '../router'
import { useToken } from '../store.js'
import { onMounted } from 'vue'
export default {
  setup(){
    return{
      session: useToken()
    }
  },
  methods:{
    async logout(){
      await axios.post('http://localhost:5001/api/logout')
      router.push('/login')
      let token = useToken();
      token.$patch({
        myToken: ''
      })
    },
  }
}
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <RouterLink to="/" class="navbar-item">
      <a class="navbar-item">
        Manager
      </a>
    </RouterLink>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
      </a>  
      <a class="navbar-item">
        <RouterLink to="/about" class="navbar-item">About</RouterLink>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <RouterLink to="/tasks">Tarefas</RouterLink>
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <RouterLink :to="{name: 'Register'}" v-if="session.myToken == ''">
            <a class="button is-primary mr-2">
              Sign up
            </a>
          </RouterLink>
          <RouterLink :to="{name: 'Login'}" v-if="session.myToken == ''">
            <a class="button is-light">
            Login
            </a>
           </RouterLink>
           <a class="button is-danger" @click="logout" v-if="session.myToken != ''">Logout</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>