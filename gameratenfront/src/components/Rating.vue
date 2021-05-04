<template>
  <v-rating
  color="warning"
  half-increments
  hover
  length="5"
  size="24"
  :value="rating"
  @input="handleRating"
></v-rating>
</template>

<script>
export default {
    data() {
        return {
            rating: 4.5
        }
    },

    methods: {
        handleRating() {
            //axios put rate in score.
        }
    },

}
</script>

<style>

</style>