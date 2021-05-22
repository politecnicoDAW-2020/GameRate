<template>  
<div class="container">
    <GameCard :game="game" />
</div>
</template>

<script>
export default {
  components: { GameCard: () => import('./GameCard') },
   
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