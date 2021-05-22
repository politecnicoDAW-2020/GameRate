<template>
  <div class="pendant-container">
      <pendent-list :games="games" :title="title" />
  </div>
</template>

<script>
import PendentList from '../components/PendentList.vue'
import auth from '../logic/auth'
import API_URL from "../constants/endpoints"
import axios from 'axios'

export default {
  components: { PendentList },
  data() {
      return {
          title: "Pendant",
          games: ["A", "B", "C", "D"]
      }
  },

  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/games/pendent/`, + auth.getUserLogged())
      .then((response) => response.data)
      .then((games) => (this.games = games));
  },
}
</script>

<style>

</style>