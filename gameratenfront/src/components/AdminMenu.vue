
<template>
  <v-row justify="space-around">
    <v-menu
      v-for="([text, rounded], index) in btns"
      :key="text"
      :rounded="rounded"
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          :color="colors[index]"
          class="white--text ma-5"
          v-bind="attrs"
          v-on="on"
        >
          {{ text }} Radius
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item"
          link
        >
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      btns: [
        ['Custom', 'lg'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [...Array(4)].map((_, i) => `Item ${i}`),
    }),
  }
</script>

<style>

</style>