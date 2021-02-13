<template>
  <div id="app">
    <HeaderSite />

    <router-view></router-view>
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
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: inherit;
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

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
</style>
