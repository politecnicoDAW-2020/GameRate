<template>
  <v-rating
  color="warning"
  half-increments
  hover
  length="5"
  size="24"
  :value="rating"
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
            
        }
    },

}
</script>

<style>

</style>