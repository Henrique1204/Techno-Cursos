<template>
    <div>
        <PaginaCarregando v-if="loading" />
        
        <transition name="entrada">
            <div v-if="dados">
                <h1>Contato</h1>
                <pre>{{dados}}</pre>
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

<style>

</style>