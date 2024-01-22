<template>
  <div class="py-5 px-5">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nombre(s):" label-for="input-1">
        <b-form-input id="input-1" v-model="form.nombre" placeholder="Coloca tu nombre(s)" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" class="mt-3" label="Apellido Paterno" label-for="input-2">
        <b-form-input id="input-2" v-model="form.apaterno" placeholder="Coloca tu apellido paterno" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" class="mt-3" label="Apellido Materno:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.amaterno" placeholder="Coloca tu apellido materno"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" class="mt-3" label="Direccion Completa:" label-for="input-4">
        <b-form-input id="input-4" v-model="form.direccion" placeholder="Coloca tu direccion"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" class="mt-3" label="Fecha de Nacimiento:" label-for="input-5">
        <b-form-datepicker id="example-datepicker" v-model="value" placeholder="Coloca tu fecha de nacimiento" class="mb-2"></b-form-datepicker>
      </b-form-group>
      <b-form-group id="input-group-6" class="mt-3" label="Correo Electronico:" label-for="input-6">
        <b-form-input id="input-6" v-model="form.email" type="email" placeholder="Coloca tu email" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-7" class="mt-3" label="Numero Telefonico:" label-for="input-7">
        <b-form-input id="input-7" v-model="form.phone" placeholder="Coloca tu numero telefonico"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-8" class="mt-3" label="Selecciona una Fotografia:" label-for="input-8">
        <b-form-file v-model="image" plain></b-form-file>
      </b-form-group>

      <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>
      <b-button class="mt-3" type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  };
</script>

<style></style>