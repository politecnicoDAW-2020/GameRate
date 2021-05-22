<template>
  <div class="app-container">
    <v-app>
      <v-app-bar app color="teal" dark>
        <div class="d-flex align-center">
          <v-btn to="/pendant"> Lista </v-btn>
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
  </div>
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

  created() {
    this.$store.dispatch("loadGames");
  },

/*   create: function () {
    axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(AUTH_LOGOUT);
        }
        throw err;
      });
    });
  }, */
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
}
</style>
