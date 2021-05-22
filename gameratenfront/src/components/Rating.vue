<template>
<div class="div">
  <v-rating
    v-model="rating"
    color="warning"
    half-increments
    hover
    length="5"
    size="20"
    @input="handleRating($event)"
  ></v-rating>
  </div>
</template>

<script>
import auth from "../logic/auth"
import axios from 'axios'
export default {
  data() {
    return {
      rating: 0,
    };
  },
  props: {
    game: {},
    user: {}
  },

  methods: {
    handleRating(value) {
      axios
        .post(`http://127.0.0.1:8000/api/scores/` + "/" + this.user.id + this.game.id, {
            user: auth.getUserLogged(),
            score: value
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/scores/` + this.game.id)
      .then((response) => response.data)
      .then((rate) => {
        const sum = rate.reduce(
          (scores, {score}) =>  scores += score, 0
        ) 
        console.log(sum/rate.length)
        const stars = sum/rate.length
        this.rating = stars
      });
  },
};
</script>

<style>
</style>