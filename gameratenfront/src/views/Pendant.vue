<template>
  <div class="pendant-container">
      <pendent-list :games="games" />
  </div>
</template>

<script>
import PendentList from '../components/PendentList.vue'
import auth from '../logic/auth'

export default {
  components: { PendentList },
  data() {
      return {
          games = []
      }
  },

  created() {
    axios
      .get("http://127.0.0.1:8000/api/games/pendent" + auth.getUserLogged())
      .then((response) => response.data)
      .then((games) => (this.games = games));
  },
}
</script>

<style>

</style>