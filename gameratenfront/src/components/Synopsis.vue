<template>
    <v-textarea readonly :value="game.synopsis">
    </v-textarea>
</template>

<script>
export default {
    name: "Synopsis",

    props: {
       game: {}
    },

}
</script>

<style>

</style>