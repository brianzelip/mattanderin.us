<template>
  <main ref="hero">
    <div :class="randomClass"></div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      randomClass: "",
      heroColorMap: {
        hero1: "white",
        hero2: "black",
        hero3: "black",
        hero4: "white",
        hero5: "black",
        hero6: "black"
      }
    };
  },
  methods: {
    setHeroColor(color) {
      this.$emit("update-hero-color", color);
    }
  },
  mounted() {
    function rando(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    } //via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
    const _class = `hero${rando(1, 6)}`;
    this.$set(this, "randomClass", _class);
    this.$emit("update-hero-color", this.heroColorMap[_class]);
  }
};
</script>

<style scoped>
main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero1,
.hero2,
.hero3,
.hero4,
.hero5,
.hero6 {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero1 {
  background-image: url(../img/splash04.jpg);
}
@media screen and (orientation: portrait) {
  .hero1 {
    background-position: right 50% bottom;
  }
}
@media screen and (orientation: landscape) {
  .hero1 {
    background-position: right 50%;
  }
}

.hero2 {
  background-image: url(../img/splash06-flipped.jpg);
  background-position: right 42% center;
}

.hero3 {
  background-image: url(../img/splash07-flipped.jpg);
}
@media screen and (orientation: portrait) {
  .hero3 {
    background-position: bottom right 28%;
  }
}
@media screen and (orientation: landscape) {
  .hero3 {
    background-position: right 63%;
  }
}

.hero4 {
  background-image: url(../img/splash02-flipped.jpg);
}
@media screen and (orientation: portrait) {
  .hero4 {
    background-position: 72% top;
  }
}
@media screen and (orientation: landscape) {
  .hero4 {
    background-position: right 75%;
  }
}

.hero5 {
  background-image: url(../img/splash01-flipped.jpg);
}
@media screen and (orientation: portrait) {
  .hero5 {
    background-position: center;
  }
}
@media screen and (min-width: 480px) and (orientation: portrait) {
  .hero5 {
    background-position: 61% top;
  }
}
@media screen and (orientation: landscape) {
  .hero5 {
    background-position: center;
  }
}

.hero6 {
  background-image: url(../img/splash03.jpg);
}
@media screen and (orientation: portrait) {
  .hero6 {
    background-position: 28% bottom;
  }
}
@media screen and (orientation: landscape) {
  .hero6 {
    background-position: 65% bottom;
  }
}
</style>
