<template>
  <div>
    <v-container fluid fill-height>
      <v-btn v-if="!isMobileDevice" @click="gotocalc" color="success">Calc</v-btn>
      <v-btn v-if="!isMobileDevice" @click="popup('https://amazing-tereshkova-51136d.netlify.com/calc.html','Calc',400, 550)" color="success">Calc</v-btn>

      <v-btn v-if="!isMobileDevice" @click="popup('http://localhost:8080/calc.html','Calc',400, 550)" color="success">Calc</v-btn>

    </v-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      checker: false
    };
  },
  props: ["isMobileDevice"],
  computed: {},
  methods: {
    gotocalc() {
      window.location.assign(
        "https://amazing-tereshkova-51136d.netlify.com/calc.html"
      );
    },
    popup(url, title, w, h) {
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 1.6;
      return window.open(
        url,
        title,
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
          w +
          ", height=" +
          h +
          ", top=" +
          top +
          ", left=" +
          left
      );
    }
  }
};
</script>

<style>
</style>
