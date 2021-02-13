<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-if="dados">
      <h1>Home</h1>
      <pre>{{dados}}</pre>
    </div>
  </div>
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
