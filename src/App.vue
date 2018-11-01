<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Veteran 2 Veteran</span>
        <span class="font-weight-light">Main Page</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">1.0</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld />

    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import calc from "./components/calc";

export default {
  name: "App",
  components: {
    HelloWorld,
    calc
  },
  data() {
    return {
      now: new Date()
    };
  },
  computed: {},
  mounted() {}
};
</script>
