<template>
  <section
    class="vh100"
    id="hero"
  >
    <TheHeader></TheHeader>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  components: { TheHeader }
};
</script>


<style>
#hero {
  /* "ANIMATION • Isabel & Carlos - Save the Date" by António Ferreira is licensed under CC BY-NC 4.0. https://www.behance.net/gallery/26803301/ANIMATION-Isabel-Carlos-Save-the-Date */
  background-image: url(../img/couple.png);
}
</style>
