<template>
  <div id="app">
    <HeaderSite />

    <router-view class="container"></router-view>
  </div>
</template>

<script>
  import HeaderSite from "@/components/HeaderSite.vue";

  export default {
    components: {
      HeaderSite
    }
  }
</script>

<style>
  /* Reset */
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: inherit;
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

  /* Estilos Gerais */
  body {
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    color: #234;
  }

  a {
    font-weight: bold;
    transition: color 0.3s ease;
  }

  a.router-link-active, a:hover {
    color: #4B8;
  }

  .container {
    max-width: 800px;
    padding: 20px 40px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .conteudo {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 400px);
    gap: 30px;
  }

  @media screen and (max-width: 400px) {
    .conteudo {
    grid-template-columns: 1fr;
    }
  }

  /* Transições de entrada */
  .entrada-enter {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }

  .entrada-enter-active {
    transition: all 0.3s ease;
  }
</style>
