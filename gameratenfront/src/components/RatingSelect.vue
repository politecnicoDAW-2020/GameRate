<template>
<div class="rating-select">
  <v-select
    v-model="select"
    :items="scores"
    :label="userScore"
    menu-props="auto"
    hide-details
    prepend-icon="mdi-star"
    single-line
    @change="handleRating($event)"
  ></v-select>
  </div>
</template>

<script>
import axios from 'axios';
import auth from '../logic/auth';
export default {
  data() {
    return {
      select: {nota: 0},
      scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      user: auth.getUserId(),
      userScore: "Mi nota: "
    };
  },
  props: {
    game : {},
  },
  computed: {
    userLogged() {
      return auth.getUserLogged(); 
    }
  },
  methods: {
    handleRating(value) {
      axios
        .post(
          `http://127.0.0.1:8000/api/scores/`,
          {
            game: this.game.id,
            email: this.userLogged,
            score: value,
          }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },

  mounted () {
    axios.get(`http://127.0.0.1:8000/api/scoreuser/${this.game.id}/${this.user}`).then(response => response.data)
    .then((score) => this.userScore = this.userScore + String(score) );
  },
};
</script>

<style>
</style>