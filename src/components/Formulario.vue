<template>
  <b-conteiner>
    <div class="py-5 px-5">
      <h1 class="text-center">Formulario</h1>
      <b-card>
        <b-form @submit.prevent="validarForm" action="https://vuejs.org/" method="post" novalidate>
          <b-alert variant="danger" dismissible :show="errors.length > 0">
            <b>{{ errors.length > 1 ? "Por favor corrige los siguientes errores: " : "Por favor corrige el siguiente error: " }}</b>
            <ul>
              <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </b-alert>
          <b-form-group id="nombre-group" label="Nombre(s):" label-for="nombre" :state="nombre ? null : false">
            <b-form-input id="nombre" v-model="nombre" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group id="apellidoP-group" class="mt-3" label="Apellido Paterno" label-for="apellidoP" :state="apellidoP ? null : false">
            <b-form-input id="apellidoP" v-model="apellidoP" type="text" required></b-form-input>
          </b-form-group>
            <b-form-group id="apellidoM-group" class="mt-3" label="Apellido Materno:" label-for="apellidoM">
          <b-form-input id="apellidoM" v-model="apellidoM"></b-form-input>
            </b-form-group>
          <b-form-group id="direccion-group" class="mt-3" label="Direccion Completa:" label-for="direccion">
            <b-form-input id="direccion" v-model="direccion"></b-form-input>
          </b-form-group>
          <b-form-group id="nacimiento-group" class="mt-3" label="Fecha de Nacimiento:" label-for="nacimiento" :state="validarEdad ? null : false">
            <b-form-datepicker id="nacimiento" v-model="nacimiento" type="date" name="nacimiento" class="mb-2" required></b-form-datepicker>
          </b-form-group>
          <b-form-group id="email-group" class="mt-3" label="Correo Electronico:" label-for="email" :state="validarEmail(email) ? null : false">
            <b-form-input id="email" v-model="email" type="email" name="email" required></b-form-input>
          </b-form-group>
          <b-form-group id="numero-group" class="mt-3" label="Numero Telefonico:" label-for="numero" :state="validarNumero(numero) ? null : false">
            <b-form-input id="numero" v-model="numero" type="tel" name="numero" required></b-form-input>
          </b-form-group>
          <b-form-group id="imagen-group" class="mt-3" label="Selecciona una Fotografia (PNG):" label-for="imagen" :state="validarImagen ? null : false">
            <b-form-file id="imagen" v-model="imagen" type="file" accept=".png" @change="handleFileChange" required></b-form-file>
          </b-form-group>
          <b-button class="mt-3" type="submit" variant="success">Enviar</b-button>
        </b-form>
      </b-card>
    </div>
  </b-conteiner>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        errors: [],
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        direccion: null,
        nacimiento: null,
        email: null,
        numero: null,
        imagen: null,
        validarEdad: false,
        validarImagen: false,
      };
    },
    methods: {
      validarForm: function (e) {
        this.errors = [];

        if (!this.nombre) {
          this.errors.push("Nombre obligatorio.");
        }

        if (!this.apellidoP) {
          this.errors.push("Apellido Paterno obligatorio.");
        }

        if (!this.direccion) {
          this.errors.push("Direccion obligatoria.");
        }

        if (!this.nacimiento) {
          this.errors.push("Fecha de Nacimiento obligatoria.");
        } else {
          const hoy = new Date();
          const fechaNacimiento = new Date(this.nacimiento);
          const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
          const diferenciaMes = hoy.getMonth() - fechaNacimiento.getMonth();
          if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            this.validarEdad = edad - 1;
          } else {
            this.validarEdad = edad;
          }
          if (this.validarEdad < 18) {
            this.errors.push("La edad debe ser 18 o más.");
          }
        }

        if (!this.email) {
          this.errors.push("Correo Electrónico obligatorio.");
        } else if (!this.validarEmail(this.email)) {
          this.errors.push("Por favor ingresa una dirección de correo válida.");
        }

        if (!this.numero || this.numero.length < 10) {
          this.errors.push("El número de teléfono debe tener al menos 10 caracteres.");
        }

        if (!this.imagen || !this.validarImagen) {
          this.errors.push("La foto es obligatoria y debe tener menos de 3 MB.");
        }

        if (!this.errors.length) {
          return true;
        }

        e.preventDefault();
      },
      validarEmail: function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      validarNumero: function (numero) {
        return true;
      },
      handleFileChange(event) {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
          const file = fileInput.files[0];
          const tamañoMaximoMB = 3;

          if (file.size > tamañoMaximoMB * 1024 * 1024) {
            this.validarImagen = false;
            this.errors.push(`El tamaño de la foto debe ser menos de ${tamañoMaximoMB} MB.`);
          } else {
            this.validPhoto = true;
          }
        }
      },
    }
  });
</script>

<style></style>