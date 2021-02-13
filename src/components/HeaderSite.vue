<template>
  <header>
      <nav>
            <div class="logo">
                <router-link to="/">Techno</router-link>
            </div>

            <ul>
                <li><router-link to="/cursos">Cursos</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
            </ul>
      </nav>
  </header>
</template>

<script>
    export default {
        name: 'HeaderSite'
    }
</script>

<style scoped>
    header {
        color: #FFF;
        background-color: #234;
    }

    nav {
        max-width: 800px;
        padding: 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .logo a.router-link-active {
        color: #FFF;
    }

    ul li {
        display: inline-block;
    }

    ul li + li {
        margin-left: 10px;
    }

    ul li a {
        padding: 0 10px;
    }
</style>
