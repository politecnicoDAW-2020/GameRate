<template>
  <v-col>
    <div class="text-center">
      <v-dialog width="500"
        v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="teal" dark v-bind="attrs" v-on="on">
            Escribe tu opinión<v-icon>mdi-message-draw</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Escribe aquí tu opinión
          </v-card-title>
          <v-col>
            <v-textarea
              filled
              auto-grow
              v-model="textReview"
              full.width
              background-color="rgb(170,240,209)"
              name="input-7-4"
            ></v-textarea>
          </v-col>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text @click="publish"> Publicar </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <h1>
      Opiniones de los usuarios
    </h1>
    <paginate name="reviews" :list="reviews" :per="5">
      <div v-if="!reviewsAreEmpty" class="reviews">
    <v-row v-for="review in paginated('reviews')" :key="review.id">
      <review :review="review" />
    </v-row>
    </div>
    <div v-else>Este juego aún no tiene ninguna opinión</div>
    </paginate>
    <paginate-links for="reviews" :show-step-links="true" :hide-single-page="true"
></paginate-links>
    <span v-if="$refs.paginator">
  Viewing {{$refs.paginator.pageItemsCount}} results
</span>
  </v-col>
</template>

<script>
import axios from "axios";
import { mapGetters, mapState } from "vuex";
import Review from "../components/Review.vue";
export default {
  components: { Review },
  data() {
    return {
      reviews: [],
      paginate: ['reviews'],
      textReview: "",
      dialog: false
    };
  },

  methods: {
    publish() {
      axios
        .post(`http://127.0.0.1:8000/api/review/save`, {
          user_id: localStorage.getItem('userId'),
          game_id: this.$route.params.gameId,
          review: this.textReview,
        })
        .then((res) => {
          console.log(res);
          this.dialog = false
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(this.$router.push(`/game/reviews/${this.$route.params.gameId}`));
    },
  },

  computed: {
    ...mapGetters(["gameById", "reviewsById"]),
    reviewsAreEmpty() {
      return this.reviews.length === 0
    }
  },
  mounted() {
    axios
      .get(
        `http://127.0.0.1:8000/api/games/reviews/${this.$route.params.gameId}/`
      )
      .then((response) => response.data)
      .then((reviews) => {
        console.log(reviews);
        this.reviews = reviews;
      });
  },
};
</script>

<style>
 .paginate-links{
    width:100%;
    list-style: none;
    text-align: center;
}
.paginate-links li {
    display: inline;
    background-color: teal;
    color:white;
    padding:0.5rem;
    margin-left:0.3rem;
    margin-right: 0.3rem;
    cursor:pointer;
    border-radius: 3px;
}

ul.paginate-links > li.active {
  background-color: rgb(170,240,209);
}
.paginate-links li a {
    color:white;

}
.paginate-result{
    width: 100%;
    text-align:center;
    margin-bottom: 1rem;
}
</style>