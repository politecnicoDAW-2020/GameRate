<template>
  <div class="detail-container">
    <div class="spinner" v-if="loading">
      <pixel-spinner :animation-duration="2000" :size="70" color="teal" />
    </div>
    <div v-else>
      <game-title :game="game" />
      <div class="admin-buttons" v-if="isAdmin">
        <admin-buttons :game="game" />
      </div>
      <v-container>
        <v-row>
          <v-col>
            <GameCard :game="game" />
          </v-col>
          <v-col class="content-detail">
            <v-row>Género: {{ game.genre }}</v-row>
            <v-row>Jugadores: {{ game.players }}</v-row>
            <v-row><synopsis :game="game" /></v-row>
            <v-row class="sub-actions">
              <router-link
                :to="{
                  name: 'Reviews',
                  params: { gameId: this.$route.params.gameId },
                }"
              >
                <v-btn color="teal">Opiniones</v-btn>
              </router-link>
              <span>Añadir a pendientes
              <v-btn
                @click="addToList"
                class="mx-2"
                fab
                dark
                small
                color="teal"
              >
                <v-icon dark> mdi-plus-circle </v-icon>
              </v-btn></span></v-row
            >
            <v-row class="recommendations"
              ><recommendations :genre="game.genre" :title="game.title"
            /></v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Recommendations from "../components/Recommendations.vue";
import { PixelSpinner } from "epic-spinners";
import Synopsis from "../components/Synopsis.vue";
import GameTitle from "../components/GameTitle.vue";
import auth from "../logic/auth";
import { mapActions, mapGetters, mapState } from "vuex";
import AdminButtons from "../components/AdminButtons.vue";

export default {
  components: {
    Recommendations,
    Synopsis,
    GameTitle,
    GameCard: () => import("../components/GameCard"),
    AdminButtons,
    PixelSpinner,
  },
  props: ["id"],
  data() {
    return {
      game: {},
      loading: false,
    };
  },

  computed: {
    ...mapGetters(["gameById"]),
    userLogged() {
      return auth.getUserLogged();
    },
    isAdmin() {
      return auth.getUserType() == "admin";
    },
  },
  methods: {
    addToList() {
      axios
        .post(`http://127.0.0.1:8000/api/games/list/`, {
          game: this.game.id,
          email: this.userLogged,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        .finally(alert("Añadido correctamente"));
    },
    ...mapActions(["getRecommendations"]),
  },
  mounted() {
    this.loading = true;
    axios
      .get(`http://127.0.0.1:8000/api/games/${this.$route.params.gameId}`)
      .then((response) => response.data)
      .then((game) => (this.game = game))
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
.detail-container {
  width: 70%;
}

.sub-actions {
  display: flex;
  justify-content: space-between;
}

.recommendations {
  padding-top: 100px;
}

.spinner {
  position: relative;
  left: 65%;
}

.content-detail {
  margin-top: 50px;
}
</style>
