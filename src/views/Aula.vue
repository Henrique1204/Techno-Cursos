<template>
  <div>
        <PaginaCarregando v-if="loading" />

        <transition name="entrada">
            <div v-if="dados">
                <h2>{{dados.nome}}</h2>

                <div class="video">
                    <iframe
                        width="560"
                        height="315"
                        :src="`https://www.youtube.com/embed/${dados.youtube}`"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
    import fetchDados from '@/mixins/fetchDados.js';

    export default {
        name: 'Aula',
        props: ['aula'],
        mixins: [fetchDados],
        created() {
            this.dados = null;
            this.fetchDados(`/aula/${this.aula}`);
        },
        beforeRouteUpdate(to, from, next) {
            this.dados = null;
            this.fetchDados(`/aula/${to.params.aula}`);
            next();
        }
    }
</script>

<style scoped>
    .video {
        padding-bottom: 56.25%;
        position: relative;
    }

    .video iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>