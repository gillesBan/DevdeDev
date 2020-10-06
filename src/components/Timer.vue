<template>
  <div>
    <h1>{{ timer }}</h1>
    <h1>{{ buzzy }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class TimerClass extends Vue {
  timer = 0;
  buzzy = "";
  // @Prop({type: String, default:"Fizz"}) fizz : string;
  // @Prop({type: String, default:'Buzz'}) buzz : string;
  // @Prop({type: String, default:'BuzzFizz'}) buzzFizz : string;
  //inc =0

  fizz = "Fizz";
  buzz = "Buzz";
  buzzFizz = "BuzzFizz";
  fizzBuzz = "FizzBuzz";
  getincondition = false;

  mounted() {
    //this.inc = this.timer;
    setInterval(() => {
      //console.log(this.inc)
      this.timer++;
    }, 1000);
  }
  get getFizz(): string {
    return this.fizz;
  }
  get getBuzz(): string {
    return this.buzz;
  }
  get BuzzFizz(): string {
    return this.buzzFizz;
    //return this.FizzBuzz
  }
  FizzBuzz() {
    if (this.randomNumber() === 2) this.buzzy = this.fizzBuzz;
    else this.buzzy = this.buzzFizz;
  }

  randomNumber() {
    const randomValue = Math.floor(Math.random() * Math.floor(3));
    return randomValue;
  }

  setBuzzy(value: string) {
    this.buzzy = value;
  }

  modulo3and5() {
    this.buzzy = this.BuzzFizz;
    this.FizzBuzz();
    console.log(this.buzzy, "3&5");
  }
  modulo3() {
    this.setBuzzy(this.getFizz);
    console.log(this.buzzy, "3");
  }
  modulo5() {
    this.setBuzzy(this.getBuzz);
    console.log(this.buzzy, "5");
  }
  @Watch("timer")
  onGetBuzzFizz() {
    switch (true) {
      case this.timer % 3 === 0 && this.timer % 5 === 0:
        this.modulo3and5();
        break;
      case this.timer % 3 === 0:
        this.modulo3();
        break;
      case this.timer % 5 === 0:
        this.modulo5();
        break;
      default:
        this.setBuzzy("vide");
        break;
    }
  }
}
</script>
