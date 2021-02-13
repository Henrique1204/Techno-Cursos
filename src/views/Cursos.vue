<template>
    <div>
        <PaginaCarregando v-if="loading" />
        
        <transition name="entrada">
            <div v-if="dados" class="conteudo">
                <div>
                    <h1>{{dados.titulo}}</h1>
                    <p>{{dados.descricao}}</p>
                </div>

                <ul>
                    <li
                        v-for="{ id, nome, totalAulas, horas, descricao } in dados.cursos"
                        :key="id"
                    >
                        <h2>
                            <router-link :to="{ name: 'curso', params: { curso: id }}">
                                {{nome}} - {{totalAulas}} aulas | {{horas}} horas
                            </router-link>
                        </h2>
                        <p>{{descricao}}</p>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import fetchDados from '@/mixins/fetchDados.js';

    export default {
        name: 'Cursos',
        mixins: [fetchDados],
        created() {
            this.fetchDados('/cursos');
        }
    }
</script>

<style scoped>
    ul li + li {
        margin-top: 2rem;
    }

    ul li h2 {
        margin-bottom: 0.5rem;
    }
</style>