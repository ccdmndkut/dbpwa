<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>V2V</span>
        <span v-if="isMobileDevice" class="font-weight-light"> - Calc </span>
        <span v-if="!isMobileDevice" class="font-weight-light"> - Calculator </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/ccdmndkut/dbpwa/tree/testing" target="_blank">
        <span class="mr-2">1.2</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloWorld v-bind:isMobileDevice="isMobileDevice" />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      now: new Date()
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
