<template>
      <v-app-bar app color="teal" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
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