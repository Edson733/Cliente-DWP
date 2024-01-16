<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <h1>Proximos Vuelos</h1>
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
                        to: "vueloscancelados"
                    },
                    {
                        text: 'Proximos Vuelos',
                        active: true
                    }
                ]
            }
        }
    };
</script>

<style></style>