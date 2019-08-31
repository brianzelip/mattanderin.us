<template>
  <header
    :style="{ marginBottom: marginBottom }"
    class="p3"
  >
    <div class="inline-block">
      <h1 class="m0 soft-white regular lh1 italic">
        Erin
        <span>&amp;</span> Matt
      </h1>
      <h2 class="mt0 soft-white regular lh1">Winter Solstice &sdot; December 21, 2019</h2>
      <h2 class="mt0 soft-white regular lh1">Maurice, Louisiana</h2>
      <hr />
      <TheNavHeader3
        :currentPath="currentPath"
        class="col-12 md-show"
        v-on:add-margin-bottom="setMarginBottom"
        v-on:reset-margin-bottom="resetMarginBottom"
      ></TheNavHeader3>
    </div>
    <TheNavMobile class="md-hide"></TheNavMobile>
  </header>
</template>

<script>
import TheHeaderH1 from "./TheHeaderH1.vue";
import TheNavMobile from "./TheNavMobile.vue";
import TheNav from "./TheNav.vue";
import TheNavHeader3 from "./TheNavHeader3.vue";

export default {
  data() {
    return {
      marginBottom: "1rem"
    };
  },
  props: ["currentPath"],
  components: {
    TheHeaderH1,
    TheNavMobile,
    TheNav,
    TheNavHeader3
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


<style scoped>
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1rem;
}

@media (min-width: 40em) {
  h1 {
    font-size: 4.75rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}

.sup {
  font-size: 0.83em;
  vertical-align: super;
  margin-left: -0.3rem;
}

.help {
  cursor: help;
}

hr {
  background-color: var(--soft-white);
  height: 4px;
  border: none;
}
</style>
