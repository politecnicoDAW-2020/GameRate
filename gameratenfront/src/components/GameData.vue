<template>  
    <v-container>
        <v-row>
            <v-col>
                <span>{{game.title}}</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                 <v-textarea
                solo
                name="input-7-4"
                label="Solo textarea"
                >
                    {{game.synopsis}}
                </v-textarea>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        game: {}
    },

}
</script>

<style>

</style>