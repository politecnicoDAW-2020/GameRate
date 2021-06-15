<template>
<div class="game-list">
    <paginate name="games" :list="sortGamesAlphabet" :per="5">
            <li v-for="game in sortGamesAlphabet" :key="game.id">{{game.title}}</li>
      </paginate>
      <paginate-links
        class="paginate-links"
        for="games"
        :show-step-links="true"
      ></paginate-links>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import AlphabetGameTitle from '../components/AlphabetGameTitle.vue'
export default {
  components: { AlphabetGameTitle },
      data() {
        return {
            paginate: ["games"],
        }
    },
    computed: {
        ...mapGetters(['sortGamesAlphabet'])
    },

}
</script>

<style>
.game-list ul li {
    list-style: none;
}

</style>