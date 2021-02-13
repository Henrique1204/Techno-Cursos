<template>
  <section>
    <PaginaCarregando v-if="loading" />

    <transition name="entrada">
      <div v-if="dados" class="conteudo">
        <div>
          <h1>Sobre a {{dados.titulo}}</h1>

          <p>{{dados.descricao}}</p>

          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>

          <div class="avaliacoes">
            <h2>Avaliações</h2>

            <ul>
              <li
                v-for="({ nome, descricao }, index) in dados.avaliacoes"
                :key="nome + '_' + index"
              >
                <p class="nome">{{nome}}</p>
                <p>{{descricao}}</p>
              </li>
            </ul>
          </div>
        </div>

        <img src="../assets/aprender.png" alt="Aprenda Web Design">
      </div>
    </transition>
  </section>
</template>

<script>
  import fetchDados from '@/mixins/fetchDados.js';

  export default {
    name: 'Home',
    mixins: [fetchDados],
    created() {
      this.fetchDados('/home');
    }
  };
</script>

<style scoped>
  h1,h2 {
    margin-bottom: 1rem;
  }

  .btn-cursos {
    padding: 15px 40px;
    border: none;
    border-radius: 4px;
    margin: 1rem 0 2rem;
    font-size: 1rem;
    color: #FFF;
    background-color: #4B8;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .avaliacoes {
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  .avaliacoes li {
    margin-top: 2rem;
  }

  .avaliacoes .nome {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
</style>
