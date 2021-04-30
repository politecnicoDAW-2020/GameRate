<template>
  <card-game :title="title">
  </card-game>
</template>

<script>
import CardGame from './CardGame.vue'
export default {
  components: { CardGame },

  data() {
      return {
          title: "title"
      }
  },

}
</script>

<style>

</style>