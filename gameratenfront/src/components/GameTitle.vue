<template>
    <span><h1>{{game.title}}</h1></span>
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