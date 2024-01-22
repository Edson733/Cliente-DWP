<template>
    <b-container fluid>
    <b-row>
      <b-col>
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-brand>
            <b-link :to="{ name: 'inicio' }">Logo</b-link>
          </b-navbar-brand>
          <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
          <b-collapse id="navbar-nav" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item>
                <b-link :to="{ name: 'reservasvuelo' }">Reservas de Vuelo</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'vuelosdisponibles' }">Vuelos Disponibles</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'vueloscancelados' }">Vuelos Cancelados</b-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="3">
        <b-sidebar id="sidebar" z-index="-1" shadow visible no-close-on-route-change no-header-close>
          <b-nav vertical class="pt-5">
            <b-nav-item>
              <b-link :to="{ name: 'reservasvuelo' }">Reservas de Vuelo</b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'vuelosdisponibles' }">Vuelos Disponibles</b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'vueloscancelados' }">Vuelos Cancelados</b-link>
            </b-nav-item>
          </b-nav>
        </b-sidebar>
      </b-col>

      <b-col md="9">
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {};
</script>

<style></style>