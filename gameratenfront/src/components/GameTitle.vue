<template>
    <div class="title-detail-container">
    <span><h1>{{game.title}}</h1></span>
    </div>
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
    .title-detail-container {
        margin-top: 30px;
    }

</style>