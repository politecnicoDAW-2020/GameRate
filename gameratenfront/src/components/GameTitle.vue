<template>
    <v-banner elevation="10">
        {{game.title}}
    </v-banner>
</template>

<script>
export default {
    name: "GameTitle",
    props: {
        game: {
            type: Object,
            default: {}
        },
    },

}
</script>

<style>

</style>