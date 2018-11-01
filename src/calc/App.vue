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
  mounted() {
    // let deferredPrompt;
    // window.addEventListener("beforeinstallprompt", e => {
    //   // Prevent Chrome 67 and earlier from automatically showing the prompt
    //   e.preventDefault();
    //   // Stash the event so it can be triggered later.
    //   deferredPrompt = e;
    //   // Update UI notify the user they can add to home screen
    //   btnAdd.style.display = "block";
    // });
  }
};
</script>
