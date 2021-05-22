<template>
  <v-rating
    v-model="rating"
    color="warning"
    half-increments
    hover
    length="5"
    size="20"
    @input="handleRating($event)"
  ></v-rating>
</template>

<script>
import auth from "../logic/auth"
export default {
  data() {
    return {
      rating: 5,
    };
  },
  props: {
    game: {},
  },

  methods: {
    handleRating(value) {
      axios
        .post(`${API_URL}/api/scores/` + "/" + user.id + game.id, {
            user: auth.getUserLogged(),
            score: value
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    axios
      .get(`${API_URL}/api/scores/` + game.id)
      .then((response) => response.data)
      .then((rating) => (this.rating = rating));
  },
};
</script>

<style>
</style>