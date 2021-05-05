<template>
    <v-banner>
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