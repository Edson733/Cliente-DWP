<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Vuelos Disponibles</h1>
        <br>
        <b-link :to="{ name: 'lineasvuelo' }">Lineas de Vuelo</b-link>
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
                        text: 'Vuelos Disponibles',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>