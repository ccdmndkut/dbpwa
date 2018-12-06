<template>
  <v-app>
   <calc></calc>
  </v-app>
</template>

<script>
import calc from "./components/calc";

export default {
  name: "App",
  components: {
    calc
  },
  data() {
    return {

    };
  },
  computed: {
    isMobileDevice() {
      return (
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    }
  },
  mounted() {}
};
</script>
