<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.title"
            :rules="nameRules"
            :counter="10"
            label="Título"
            required
          ></v-text-field>
        </v-col>
          <h1>{{convertStringTitle}}</h1>
        <v-col cols="12" md="4">
          <v-select v-model="form.genre" :items="genres" label="Género"></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-textarea
            v-model="form.synopsis"
            :rules="emailRules"
            label="Sinopsis"
            required
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="4">
          <v-checkbox
            v-model="form.online"
            label="Tiene modo online"
            color="indigo"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-btn class="mr-4" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    form: {
        title: "",
        genre: "",
        synopsis: "",
        online: false,
    },
    valid: false,
    genres: ["Acción", "Aventura", "Lucha", "Terror", "Plataformas", "Puzzles"],
  }),

  computed: {
    convertStringTitle: function() {
      return this.form.title.replace(/\s+/g, "-").toLowerCase();
    },
  },

  methods: {
    submit() {
        axios.post("http://127.0.0.1:8000/api/create", {...this.form, image: this.convertStringTitle()})
        .then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        });
        const dataobj = { ...this.form, image: this.convertStringTitle};
        console.log(dataobj)
    },
    clear() {
      this.$v.$reset();
      this.form.title = "";
      this.form.genre = "";
      this.form.synopsis = "";
      this.form.online = false;
    },
  },
};
</script>

<style></style>
