<template>
  <header class="pt2">
    <h1 class="m0 h00 regular Italianno center lh1">
      Erin
      <span class="mx2">&amp;</span> Matt
    </h1>
    <h2 class="mt0 h3 regular center lh1">
      December 21
      <span class="sup">st</span>, 2019 &sdot; Maurice, Louisiana
    </h2>
    <TheNav></TheNav>
  </header>
</template>

<script>
import TheNav from "./TheNav.vue";

export default {
  components: {
    TheNav
  }
};
</script>


<style>
.sup {
  font-size: 0.83em;
  vertical-align: super;
  margin-left: -0.3rem;
}
</style>
