<template>
  <div class="app-container">
    <v-app>
      <v-app-bar app color="teal" dark>
        <div class="d-flex align-center">
           <v-banner
      single-line
    >
      <a class="logo" href="/">GameRate</a>
    </v-banner>
        </div>
        <div class="menu">
          <v-btn to="/pendant"> Mi Lista </v-btn>
        </div>
        <v-spacer></v-spacer>
          <span><search class="search" /></span>
          <span class="mr-2">{{ userLogged }}</span>
        <v-btn
          @click = "logout"
          target="_blank"
        >
          <span v-if="isAuthenticated"><v-icon>mdi-open-in-new</v-icon></span>
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
import Search from "./components/Search.vue"
import auth from "./logic/auth";

export default {
  components: { Footer, Search, Search },
  name: "App",

  data: () => ({
     btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [...Array(4)].map((_, i) => `Item ${i}`),
  }),

  methods: {
    logout() {
      auth.deleteUserLogged();
      this.$router.push("/login");
      location.reload()
    }
  },

  computed: {
    userLogged() {
      return auth.getUserLogged();
    },
    isAdmin() {
      return auth.getUserType() == "admin"
    },
    isAuthenticated() {
      return auth.isAuthenticated()
    }
  },

  created() {
    this.$store.dispatch("loadGames");
    this.$store.dispatch("loadScores");
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
  width: 80%;
}
.menu {
  display: flex;
}

.search {
  margin-right: 50px;
}

.logo {
  color: white;
  font: 2em sans-serif;
  text-decoration: none;
  padding-right: 10px;
}

</style>
