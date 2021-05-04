<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
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
      <search-bar />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">{{userLogged}}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
<Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import SearchBar from './components/SearchBar.vue';
import auth from './logic/auth'

export default {
  components: { Footer, SearchBar },
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
      userLogged() {
        return auth.getUserLogged();
      }
  },

  mounted () {
  this.$store.dispatch('loadGames')
;
  },
};
</script>

<style scoped>

</style>
