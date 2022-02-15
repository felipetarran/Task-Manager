<template>
<div class="container is-max-desktop">
    <h1 class="title is-1 has-text-centered">Entre em sua conta!</h1>
    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Nome">
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
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">
          Login
        </button>
      </p>
    </div>
</div>
</template>

<style scoped>
    .container{
        margin-top: 160px;
    }
</style>