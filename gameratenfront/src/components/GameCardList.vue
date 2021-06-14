<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{game.title}}
        </v-list-item-title>
        <v-list-item-subtitle>{{game.genre}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      >            <v-img :src="require(`../assets/images/${game.image}`)"></v-img>
</v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        color="red"
        @click="deleteFromList(game.id)"
      >
        Eliminar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        game: {}
    },
    methods: {
        deleteFromList(gameId) {
            axios.delete(`http://127.0.0.1:8000/api/games/list/${gameId}`)
        }
    },
}
</script>

<style>

</style>