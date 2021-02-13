<template>
    <div>
        <PaginaCarregando v-if="loading" />
        <div v-if="dados">
            <h1>Contato</h1>
            <pre>{{dados}}</pre>
        </div>
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