<template>
  <section
    class="vh100 splash04"
    id="hero"
    ref="hero"
  >
    <TheHeader3
      class="inline-block"
      color="white"
    ></TheHeader3>
    <TheHeroImageControl
      v-on:left="left"
      v-on:right="right"
    ></TheHeroImageControl>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHeader2 from "./TheHeader2.vue";
import TheHeader3 from "./TheHeader3.vue";
import TheHeroImageControl from "./TheHeroImageControl.vue";

export default {
  data() {
    return {
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
  components: { TheHeader, TheHeader2, TheHeader3, TheHeroImageControl },
  methods: {
    left() {
      if (this.start === 1) {
        const prev = 1;
        const next = 9;
        this.$set(this, "start", next);
        this.$refs.hero.classList.replace(`splash0${prev}`, `splash0${next}`);
      } else {
        const prev = this.start;
        const next = this.start - 1;
        this.$set(this, "start", next);
        this.$refs.hero.classList.replace(`splash0${prev}`, `splash0${next}`);
      }
    },
    right() {
      if (this.start === 9) {
        const prev = 9;
        const next = 1;
        this.$set(this, "start", next);
        this.$refs.hero.classList.replace(`splash0${prev}`, `splash0${next}`);
      } else {
        const prev = this.start;
        const next = this.start + 1;
        this.$set(this, "start", next);
        this.$refs.hero.classList.replace(`splash0${prev}`, `splash0${next}`);
      }
    }
  }
};
</script>


<style>
#hero {
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
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
