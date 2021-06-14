<template>
<v-container>
    <v-col>
        <span class="user-review">Usuario: {{review.email}}</span>
        <v-textarea
          filled
          auto-grow
          readonly
          full.width
          background-color="teal lighten-2"
          name="input-7-4"
          :value="review.review"
        ></v-textarea>
        </v-col>
</v-container>

</template>

<script>
export default {

    props: {
        review: ""
    },
};
</script>

<style>
.user-review {
    font-weight: bold;
}
</style>