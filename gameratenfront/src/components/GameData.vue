<template>  
    <v-container>
        <v-row>
            <v-col>
                <span>{{game[0].title}}</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                 <v-textarea
                solo
                name="input-7-4"
                label="Solo textarea"
                :value="game[0].synopsis"
                >
                </v-textarea>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "GameData",
    props: {
        game: {}
    },

}
</script>

<style>

</style>