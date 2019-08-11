<template>
  <header
    :style="{marginBottom: marginBottom}"
    class="pt2"
  >
    <router-link
      class="hover-text-decoration-none"
      to="/"
    >
      <h1 class="m0 h00 regular Italianno center lh1">
        Erin
        <span class="mx2">&amp;</span> Matt
      </h1>
    </router-link>
    <h2 class="mt0 h3 regular center lh1">
      Winter Solstice &sdot; December 21
      <span class="sup">st</span>, 2019 &sdot; Maurice, Louisiana
    </h2>
    <TheNav
      :currentPath="currentPath"
      v-on:add-margin-bottom="setMarginBottom"
      v-on:reset-margin-bottom="resetMarginBottom"
    ></TheNav>
  </header>
</template>

<script>
import TheNav from "./TheNav.vue";

export default {
  data() {
    return {
      marginBottom: "1rem"
    };
  },
  props: ["currentPath"],
  components: {
    TheNav
  },
  methods: {
    setMarginBottom(amount) {
      this.marginBottom = `${amount}px`;
    },
    resetMarginBottom() {
      this.marginBottom = `1rem`;
    }
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
