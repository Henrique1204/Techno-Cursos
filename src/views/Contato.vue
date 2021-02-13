<template>
    <div>
        <PaginaCarregando v-if="loading" />
        
        <transition name="entrada">
            <div v-if="dados">
                <h1>{{dados.titulo}}</h1>
                <p>{{dados.descricao}}</p>

                <ul>
                    <li v-for="(valor, key, index) in dados.contato" :key="key + '_' + index">
                        <span>{{key}}:</span> {{valor}}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import fetchDados from '@/mixins/fetchDados.js';

    export default {
        name: 'Contato',
        mixins: [fetchDados],
        created() {
            this.fetchDados('/contato');
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 1rem;
    }

    ul {
        margin-top: 1rem;
    }

    ul li span{
        font-weight: bold;
        text-transform: capitalize;
    }
</style>