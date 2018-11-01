<template>
  <div>
    <v-container fluid fill-height>
      <v-btn @click="popup('https://amazing-tereshkova-51136d.netlify.com/calc.html','Calc',400, 500)" color="success">Calc</v-btn>

      <!-- <v-btn @click="popup('http://localhost:8080/calc.html','Calc',400, 500)" color="success">Calc</v-btn> -->

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
  computed: {},
  methods: {
    popup(url, title, w, h) {
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 1.5;
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
