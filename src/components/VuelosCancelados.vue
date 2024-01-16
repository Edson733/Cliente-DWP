<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Vuelos Cancelados</h1>
        <br>
        <b-link :to="{ name: 'proximosvuelos' }">Proximos Vuelos</b-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        text: 'Inicio',
                        to: 'inicio'
                    },
                    {
                        text: 'Vuelos Cancelados',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>