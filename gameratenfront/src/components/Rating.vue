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
export default {
    data() {
        return {
            rating: 5
        }
    },
    props: {
        game: {}
    },

    methods: {
        handleRating(value) {
            console.log(value)
        }
    },

    mounted() {
       axios
        .get("http://127.0.0.1:8000/api/scores/" + game.id)
        .then((response) => response.data)
        .then((rating) => (this.rating = rating)); 
    }

}
</script>

<style>

</style>