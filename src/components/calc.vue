<template>
  <div id="ig" class="innergrid">
    <div class="buttons">
      <div v-for="(rate, i) in rates" :key="i">
        <!-- <div class='buttonContainer'> -->
        <v-btn @click="addrate(rate)" block outline flat class="button display-1 font-weight-bold">
          <span id="butstyle"> {{rate}}</span> </v-btn>
        <!-- <div class="button display-1 font-weight-bold">{{rate}}</div> -->
        <!-- </div> -->
      </div>
    </div>
    <div class="top">
      <div id="combinedcalc">{{combinedRate}}%</div>
      <div id="rates">
        <div class="rateDisplay" v-for="(rates, index) in myrates" :key="index">
          <v-chip class='mychips' small @input="popper(index, rates)" close>{{rates}}</v-chip>
        </div>
      </div>
    </div>
    <div class="right">
      <v-btn @click="clear" id="clearbutton" class='headline' flat block color="success">CLR</v-btn>
      <v-btn @click="undofunc" id="clearbutton" class='headline' flat block color="success">UNDO</v-btn>
      <v-btn @click="clear" id="clearbutton" disabled class='headline' flat block color="success">REDO</v-btn>

      <!-- <div id="clear">CLEAR</div> -->
    </div>
  </div>

</template>

<script>
export default {
  name: "calc",
  props: {},
  data() {
    return {
      rates: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      undo: {
        lastrate: "",
        ran: true
      },
      myrates: [],
      mycalc: Number,
      buttoncolor: "#2a353b"
    };
  },
  created() {
    document.getElementById("ig").addEventListener("dblclick", function(event) {
      event.preventDefault();
    });
  },
  methods: {
    popper(i, rate) {
      const r = this.myrates;
      r.splice(i, 1);
      this.undo.ran = false;
      console.log(rate);
      this.lastrate = rate;
    },
    undofunc() {
      if (this.undo.ran === false) {
        if (Array.isArray(this.lastrate)) {
          this.myrates = this.lastrate;
          this.undo.ran = true;
        } else {
          this.myrates.push(this.lastrate);
          this.undo.ran = true;
        }
      } else {
        this.lastrate = "";
        console.log("undo already ran");
      }
    },
    addrate(r) {
      const arr = this.myrates;
      this.lastrate = r;
      arr.push(r);
      console.log(arr.toString());
    },
    clear() {
      this.lastrate = this.myrates;
      this.undo.ran = false;
      this.myrates = [];
    }
  },
  computed: {
    combinedRate() {
      let a = this.myrates.reduce(function(b, a) {
        return b - (a / 100) * b;
      }, 100);
      return Math.round(100 - a);
    }
  }
};
</script>

<style >
::-webkit-scrollbar {
  width: 0px;
  background: yellow;
  display: inline !important;
}
#butstyle {
  color: white;
}
#clearbutton {
  height: 100%;
  padding: 0px;
  margin: 0px;
  border: 1px solid #2a353b;
  border-radius: 0px;
}
html {
touch-action: manipulation;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
#clear {
  position: relative;
  transform: rotate(90deg);
  top: 50%;
  font-size: 30px;
  font-weight: bold;
}
#ratemar {
  margin-left: 10px;
  font-size: 25px;
}
.rateDisplay {
  display: inline-block;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
}
.innergrid {
  width: 450px;
  height: 650px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 2fr 5fr;
  justify-content: center;
  outline: 1px solid #2a353b;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
@media screen {
  .innergrid {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 2fr 5fr;
    justify-content: center;
    outline: 1px solid #2a353b;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
}
.buttonBorder {
  outline: 1px solid #2a353b;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5c7b89;
  position: relative;
  border: none;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
.buttonContainer {
  font-size: 35px;
  font-weight: bold;
  color: white;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  background-color: #5c7b89;
}
.button {
  text-align: center;
  height: 100%;
  background-color: #5c7b89;
  margin: 0px;
  border: 1px solid #2a353b;
  border-radius: 0px;
}
.top {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
  background-color: #2a353b;
  padding-right: 20px;
  padding-left: 20px;
  font-family: roboto;
}
#combinedcalc {
  width: 100%;
  text-align: right;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  color: white;
  align-self: end;
  justify-self: end;
  font-size: 40px;
  background-color: #5c7b89;
  border-radius: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
#rates {
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
  color: white;
  align-self: end;
  justify-self: end;
  margin-bottom: 6px;
}
.right {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;
  outline: 1px solid #2a353b;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: #acbdc4;
}
button#gridbtn {
  width: 100%;
  margin: 0px;
}
</style>
