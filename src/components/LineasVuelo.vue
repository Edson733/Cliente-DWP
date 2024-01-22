<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Lineas de Vuelo</h1>
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
                        to: "vuelosdisponibles"
                    },
                    {
                        text: 'Lineas de Vuelo',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>