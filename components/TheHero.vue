<template>
  <main ref="hero">
    <div class="hero2"></div>
  </main>
</template>

<script>
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

.hero1 {
  width: 100%;
  height: 100vh;
  background-image: url(../img/splash04.jpg);
  background-size: cover;
  background-repeat: no-repeat;
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
  width: 100%;
  height: 100vh;
  background-image: url(../img/splash06.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left 47% center;
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
