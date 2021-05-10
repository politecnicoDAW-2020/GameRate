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

    methods: {
        handleRating(value) {
            console.log(value)
        }
    },

}
</script>

<style>

</style>