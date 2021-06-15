
<template>
      <router-link :to="{name: 'GameDetail', params: { gameId: game.id }}"> 
<span>{{game.title}}</span>
      </router-link>
</template>

<script>
export default {
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