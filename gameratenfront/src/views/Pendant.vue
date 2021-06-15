<template>
  <div class="pendant-container">
    <div class="pendant-spinner" v-if="loading">
      <pixel-spinner :animation-duration="2000" :size="70" color="teal" />
    </div>
    <div v-else>
      <paginate class="pendant-cards" name="games" :list="games" :per="3">
        <li>
<game-card-list
            v-for="game in paginated('games')"
            :key="game.id"
            :game="game"
          />
        </li>
      </paginate>
      <paginate-links
        class="paginate-links"
        for="games"
        :show-step-links="true"
      ></paginate-links>
    </div>
  </div>
</template>

<script>
import { PixelSpinner } from "epic-spinners";
import auth from "../logic/auth";
import API_URL from "../constants/endpoints";
import axios from "axios";
import GameCard from "../components/GameCard.vue";
import GameCardList from "../components/GameCardList.vue";

export default {
  components: { GameCard, GameCardList, PixelSpinner },
  data() {
    return {
      title: "Tus juegos pendientes",
      games: [],
      paginate: ["games"],
      loading: false,
    };
  },

  computed: {
    userId() {
      return auth.getUserId();
    },
  },

  mounted() {
    this.loading = true;
    console.log(this.userId)
    axios
      .get(`http://127.0.0.1:8000/api/games/list/${this.userId}`)
      .then((response) => (response.data))
      .then((games) => {
        (this.games = games)})
      .finally(() => (this.loading = false));
  },
};
</script>

<style>

.pendant-spinner {
  margin-top: 15%;
  margin-left: 40%;
}

ul {
  display: block;
}

.pendant-cards li {
  display:flex
}

.paginate-links {
  margin-top: 40px;
}
</style>