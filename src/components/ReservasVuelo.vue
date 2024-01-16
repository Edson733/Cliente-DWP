<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Reservas de Vuelo</h1>
        <br>
        <b-link :to="{ name: 'asientosreservados' }">Asientos Reservados</b-link>
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
                        text: 'Reservas de Vuelo',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>