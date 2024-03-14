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
                <b-link :to="{ name: 'paginacion' }">Paginacion</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'formulario' }">Formulario</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'captcha' }">Captcha</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'registro' }">Registro</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'login' }">Login</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link :to="{ name: 'auth' }">Auth</b-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
    </b-row>
    <b-row>
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