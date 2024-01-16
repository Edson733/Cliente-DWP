<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Asientos Reservados</h1>
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
                        to: "reservasvuelo"
                    },
                    {
                        text: 'Asientos Reservados',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>