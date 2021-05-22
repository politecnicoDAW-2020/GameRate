<template>
  <div class="contain">
    <game-title :game="game" />
    <v-container>
      <v-row>
        <v-col>
          <game-card :game="game" />
        </v-col>
        <v-col>
          <synopsis :game="game" />
        </v-col>
      </v-row>
      <recommendations :genre="game.genre" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import GameData from "../components/GameData.vue";
import GameCard from "../components/GameCard";
import Recommendations from "../components/Recommendations.vue";
import Synopsis from "../components/Synopsis.vue";
import GameTitle from "../components/GameTitle.vue";
import API_URL from "../constants/endpoints"

export default {
  data() {
    return {
      game: {
        id: 1,
        title: "Uncharted",
        genre: "aventura",
        synopsis: "aaaaaa",
        online: 0,
        image: "uncharted.png",
        rating: 9,
      },
    };
  },

    components: {
        GameCard,
        GameData
    },

    computed: {
        ...mapState(["games"])
    },
    methods: {
        ...mapActions(["findGameById"]),
    
    getGameById(id) {
      axios.get("http://127.0.0.1:8000/api/games/"+id)
      .then(response => this.game = response.data)       
       }
    },

    mounted () {
        this.getGameById(this.$route.params.id);
  props: ["id"],

  components: {
    GameData,
    GameCard,
    Recommendations,
    Synopsis,
    Recommendations,
    GameTitle,
  },
  mounted() {
      axios
        .get(`${API_URL}/api/games/` + id)
        .then((response) => response.data)
        .then((game) => (this.game = game));
    },
  },
        .then((game) => (this.game = game));  },

  methods: {}
};
</script>

<style></style>
