<template>
  <v-form class="create-form" v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.title"
            :counter="50"
            :rules="titleValidation"
            label="Título"
            required
          ></v-text-field>
          <v-row>
            <v-select
              v-model="form.genre"
              :items="genres"
              label="Género"
              :rules="[(v) => !!v || 'Seleccione un género']"
            ></v-select>
          </v-row>
          <v-row>
            <v-select
              v-model="form.players"
              :items="players"
              label="Jugadores"
              :rules="[(v) => !!v || 'Seleccione los jugadores']"
            ></v-select>
          </v-row>
          <v-row>
            <v-checkbox
              v-model="form.online"
              label="Tiene modo online"
              color="indigo"
              hide-details
            ></v-checkbox>
          </v-row>
          <v-row>
            <v-textarea
              v-model="form.synopsis"
              label="Sinopsis"
              required
            ></v-textarea>
          </v-row>
          <v-row>
            <v-btn class="mr-4 mt-4" @click="submit"> submit </v-btn>
            <v-btn class="mt-4" @click="clear"> clear </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
import API_URL from "../constants/endpoints";

export default {
  data: () => ({
    form: {
      title: "",
      genre: "",
      players: 0,
      synopsis: "",
      online: false,
    },
    valid: false,
    titleValidation: [
      (v) => !!v || "Este campo es requerido",
      (v) => (v && v.length <= 50) || "No debe superar los 50 caracteres",
    ],
    genres: [
      "Acción",
      "Aventura",
      "Lucha",
      "Terror",
      "Plataformas",
      "Puzzles",
      "Shooter",
      "RPG",
      "Deportes"
    ],
    players: [1, 2, 3, 4],
  }),

  computed: {},

  methods: {
    submit() {
        const imgToString = this.form.title.replace(/\s+/g, "-").toLowerCase();
        const imgToPng = `${imgToString}.png`;

        axios
          .post(`http://127.0.0.1:8000/api/games/save`, {
            ...this.form,
            image: imgToPng,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(this.$router.push('/'));
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    clear() {
      this.$v.$reset();
      this.form.title = "";
      this.form.genre = "";
      this.form.synopsis = "";
      this.form.online = false;
    },
};
</script>

<style>
.create-form {
  position: relative;
  left: 25%;
}
</style>
