<template>
  <main
    class="splash04"
    id="hero"
    ref="hero"
  ></main>
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

<style>
#hero {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  z-index: -1;
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
