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
        hero5: "black"
      },
      images: [
        "splash01.jpg",
        "splash02.jpg",
        "splash03.jpg",
        "splash04.JPG",
        "splash05.jpg",
        "splash06.jpg",
        "splash07.jpg",
        "splash08.jpg",
        "splash09.jpg"
      ],
      start: 4
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
    const _class = `hero${rando(1, 5)}`;
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
.hero5 {
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

.splash01 {
  background-image: url(../img/splash01.jpg);
}
.splash02 {
  background-image: url(../img/splash02.jpg);
}
.splash03 {
  background-image: url(../img/splash03.jpg);
}
.splash04 {
  background-image: url(../img/splash04.jpg);
  background-position: top left;
}
.splash05 {
  background-image: url(../img/splash05.jpg);
}
.splash06 {
  background-image: url(../img/splash06.jpg);
}
.splash07 {
  background-image: url(../img/splash07.jpg);
}
.splash08 {
  background-image: url(../img/splash08.jpg);
}
.splash09 {
  background-image: url(../img/splash09.jpg);
}
.splash10 {
  background-image: url(../img/splash10.jpg);
}
.splash11 {
  background-image: url(../img/splash11.jpg);
}
</style>
