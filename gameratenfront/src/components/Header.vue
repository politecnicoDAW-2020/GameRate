<template>
      <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <v-btn to="/pendant">
          Lista
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">{{ user.name }}</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
import { getUserLogged } from "../logic/auth"
export default {
  data() {
    return {
      user: ""
    }
  },

  mounted() {
    this.user = getUserLogged();
  }

}
</script>

<style>

</style>