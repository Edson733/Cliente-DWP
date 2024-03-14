<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2>Registro de usuario</h2>
                <form @submit.prevent="registerUser">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" v-model="user.name" required>
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" id="username" v-model="user.username" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" v-model="user.password" required>
                    </div>
                    <b-button class="mt-3" type="submit" variant="outline-primary">Registrar</b-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                user: {
                    name: '',
                    username: '',
                    password: ''
                },
            };
        },
        methods: {
            registerUser() {
                axios.post('http://localhost:8080/auth/addNewUser', this.user)
                    .then(response => {
                        console.log('Respuesta del servidor: ', response.data);
                    })
                    .catch(error => {
                        console.error('Hubo un error al registrar el usuario', error);
                    });
            }
        }
    }
</script>

<style></style>