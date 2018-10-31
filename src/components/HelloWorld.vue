<template>

  <v-container v-if="calcopen == 'false'">
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          VA Combined Rating Calculator App
        </h1>
        <p class="subheading font-weight-regular">
          Click below to open.
        </p>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="opencalc" color="success">OPEN</v-btn>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      checker: false
    };
  },
  created() {
    // sessionStorage.setItem("calc", "false");
  },
  computed: {
    calcopen() {
      return sessionStorage.getItem("calc");
    }
  },
  methods: {
    opencalc() {
      sessionStorage.setItem("calc", "true");
      console.log(this.calcopen);
      this.checker = sessionStorage.getItem("calc");
      console.log(this.checker);

      var u = "camw.html",
        n = "http://localhost:8080/",
        w = 100,
        h = 100;

      var myparameters =
        "width=" +
        w +
        ", height=" +
        h +
        ", resizable = yes, toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = no, resizable = no";

      window.close();
      var b = window.open(u, n, myparameters);
      var c = window.focus();
      return [b, c];
    }
  }
};
</script>

<style>
</style>
