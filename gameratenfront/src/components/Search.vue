<template>
  <v-toolbar
    dark
    color="teal"
  >
    <v-toolbar-title>Buscador de juegos</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      dense
      :search-input.sync="autocomplete"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Título"
      solo-inverted
    ></v-autocomplete>
    <v-btn @click="search"><v-icon>mdi-card-search-outline</v-icon></v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      items: [],
      autocomplete: null,
      select: null
    }
  },
  computed: {
    ...mapGetters(['getTitles', 'getIdByTitle'])
  },
  watch: {
    autocomplete (val) {
        val && val !== this.select && this.querySelections(val)
      },
  },
  methods: {
     querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.getTitles.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },

    search () {
      const gameId = this.getIdByTitle(this.select)
      this.$router.push({name: 'GameDetail', params:{gameId: gameId}})
      location.reload(true)
    }
  },

}
</script>

<style>

</style>