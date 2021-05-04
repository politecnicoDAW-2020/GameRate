<template>
<v-container>
    <v-row>
        <v-col>
            <game-card :game="game"></game-card>
        </v-col>
        <v-col>
            <game-data :game="game"></game-data>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import GameCard from "../components/GameCard"
import GameData from "../components/GameData"
export default {

    components: {
        GameCard,
        GameData
    },

    computed: {
        ...mapState(["games"])
    },
    methods: {
        ...mapActions(["findGameById"])
    },

    mounted () {
        this.$store.dispatch('findGameById', [1]).finally((data) => this.game = data)
    },
}
</script>

<style>

</style>