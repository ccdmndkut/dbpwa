<template>
  <v-app>
    <calc />
  </v-app>
</template>

<script>
import calc from "../components/calc";

export default {
  name: "App",
  components: {
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
