<template>
  <header
    :style="{ marginBottom: marginBottom }"
    class="pt2"
  >
    <TheHeaderH1 v-if="isHome"></TheHeaderH1>
    <router-link
      class="hover-text-decoration-none"
      to="/"
      v-else
    >
      <TheHeaderH1></TheHeaderH1>
    </router-link>
    <h2 class="mt0 px2 regular center lh1">
      Winter Solstice &sdot; December 21
      <span class="sup">st</span>, 2019 &sdot; Maurice, Louisiana
    </h2>
    <TheNavMobile class="md-hide"></TheNavMobile>
    <TheNav
      class="md-show"
      v-on:add-margin-bottom="setMarginBottom"
      v-on:reset-margin-bottom="resetMarginBottom"
    ></TheNav>
  </header>
</template>

<script>
import TheHeaderH1 from "./TheHeaderH1.vue";
import TheNavMobile from "./TheNavMobile.vue";
import TheNav from "./TheNav.vue";

export default {
  data() {
    return {
      marginBottom: "1rem"
    };
  },
  components: {
    TheHeaderH1,
    TheNavMobile,
    TheNav
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    }
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
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1rem;
}

@media (min-width: 40em) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 1.25rem;
  }
}

.sup {
  font-size: 0.83em;
  vertical-align: super;
  margin-left: -0.3rem;
}
</style>
