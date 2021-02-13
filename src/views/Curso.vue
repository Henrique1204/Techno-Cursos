<template>
    <div>
        <PaginaCarregando v-if="loading" />

        <transition name="entrada">
            <div v-if="dados" class="conteudo">
                <div>
                    <h1>{{dados.nome}}</h1>
                    <p>{{dados.descricao}}</p>

                    <h2>Aulas</h2>
                    <ul class="aulas">
                        <li v-for="({ id, nome }) in dados.aulas" :key="id">
                            <router-link :to="{ name: 'aula', params: { aula: id } }">
                                {{nome}}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <router-view></router-view>
            </div>
        </transition>
    </div>
</template>

<script>
    import fetchDados from '@/mixins/fetchDados.js';

    export default {
        name: 'Curso',
        props: ['curso'],
        mixins: [fetchDados],
        created() {
            this.fetchDados(`/curso/${this.curso}`);
        }
    }
</script>

<style scoped>
    h2 {
        margin-top: 2rem;
    }

    .aulas li + li {
        margin-top: 10px;
    }

    .aulas li a {
        padding: 20px;
        border-radius: 4px;
        background-color: #FFF;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: block;
        transition: none;
    }

    .aulas li a.router-link-active, .aulas li a:hover {
        color: #FFF;
        background-color: #4B8;
    }
</style>