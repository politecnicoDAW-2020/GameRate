<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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
      </div>

      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">{{ userLogged }}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="container">
      <v-main>
        <router-view />
      </v-main>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import axios from "axios";
import Footer from "./components/Footer.vue";
import auth from "./logic/auth";

export default {
  components: { Footer },
  name: "App",

  data: () => ({
    //
  }),

  computed: {
    userLogged() {
      return auth.getUserLogged();
    },
  },

  mounted() {
    this.$store.dispatch("loadGames");
  },

  create: function() {
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(AUTH_LOGOUT);
        }
        throw err;
      });
    });
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
