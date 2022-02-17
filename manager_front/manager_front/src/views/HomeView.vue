<script setup>
</script>

<template>
  <div class="wrapper">
    <h1 class="title is-1 has-text-centered">Bem vindo ao Gerenciador !</h1>
    <div class="btn-wrapper"><router-link :to="{name: 'tasks'}"><button class="button is-primary mt-3">Tarefas!</button></router-link></div>
  </div>
</template>

<style scoped>
  .wrapper{
    margin-top: 200px;
    margin-bottom: 150px;
  }
  .btn-wrapper{
    width: 100%;
    text-align: center;
  }
</style>
