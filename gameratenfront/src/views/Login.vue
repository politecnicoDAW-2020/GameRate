<template>
  <div class="login">
    <h1 class="title">Accede a la web</h1>
    <h1 class="register">¿Aún no tienes cuenta? <a class="register-link" href="/register">Regístrate</a></h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password:</label>
      <input v-model="password" class="form-input" type="password" id="password" placeholder="Password">
    <v-alert
        v-if="error"
        border="right"
        color="red"
        type="error"
    >Email o contraseña incorrecta</v-alert>
    <input class="form-submit" type="submit" value="Login">

    </form>
  </div>
</template>

<script>
import auth from '../logic/auth';
import axios from 'axios'
export default {
    data() {
        return {
            email: "",
            password: "",
            error: false
        }
    },

    methods: {
        async login() {
             try {
                const result = await auth.login(this.email, this.password);
                const type = result.data.user.type
                const userId = result.data.user.id
                auth.setUserLogged(this.email, userId);
                auth.setUserType(type)
                this.$router.push("/");
                location.reload()
            } catch (error) {
                this.error = true;
      }
        }
    },

};
</script>

<style lang="scss" scoped>

.register-link {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-decoration: none;
}

.login {
  padding: 2rem;
  background-image: url("../assets/images/login-background.png");
  background-size: cover;
}
.title, .register {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>