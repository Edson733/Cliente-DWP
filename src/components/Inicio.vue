<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Inicio</h1>
    <br>
    <b-link :to="{ name: 'reservasvuelo' }">Reservas de Vuelo</b-link><br>
    <b-link :to="{ name: 'vuelosdisponibles' }">Vuelos Disponibles</b-link><br>
    <b-link :to="{ name: 'vueloscancelados' }">Vuelos Cancelados</b-link>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        text: 'Inicio',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>