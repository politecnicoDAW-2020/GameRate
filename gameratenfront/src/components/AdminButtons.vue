<template>
  <div class="admin-options">
    <v-btn to="/create" color="teal">Añadir</v-btn>
    <router-link
      :to="{
        name: 'Update',
        params: { gameId: game.id },
      }"
      ><v-btn color="blue">Editar</v-btn>
    </router-link>
    <v-btn color="red" @click="deleteGame">Eliminar</v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    game: {},
  },

  methods: {
    deleteGame() {
      axios.delete(
        `http://127.0.0.1:8000/api/games/${this.$route.params.gameId}`
      );
    },
  },
};
</script>

<style>
</style>