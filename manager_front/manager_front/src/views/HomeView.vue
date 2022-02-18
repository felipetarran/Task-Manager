<script setup>
</script>

<template>
  <div class="wrapper">
    <h1 class="title is-1">Bem vindo ao Gerenciador !</h1>
    <div class="btn-wrapper"><router-link :to="{name: 'tasks'}"><button class="button is-primary mt-3">Tarefas!</button></router-link></div>
  </div>
</template>

<style scoped>
  .wrapper{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
  }
  .btn-wrapper{
    width: 100%;
    text-align: center;
  }
  
</style>
