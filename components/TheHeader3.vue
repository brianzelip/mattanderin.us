<template>
  <header
    :style="{ marginBottom: marginBottom }"
    class="p3"
  >
    <TheHeader3H1
      :color="color"
      v-if="isHome"
    ></TheHeader3H1>
    <router-link
      class="hover-text-decoration-none"
      to="/"
      v-else
    >
      <TheHeader3H1 :color="color"></TheHeader3H1>
    </router-link>
    <h2
      :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
      class="mt0 regular lh1"
    >Winter Solstice &sdot; December 21, 2019</h2>
    <h2
      :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
      class="mt0 regular lh1"
    >Maurice, Louisiana</h2>
    <hr />
    <TheNavHeader3
      :color="color"
      class="col-12 md-show"
      v-on:add-margin-bottom="setMarginBottom"
      v-on:reset-margin-bottom="resetMarginBottom"
    ></TheNavHeader3>
    <TheNavMobile class="md-hide"></TheNavMobile>
  </header>
</template>

<script>
import TheHeaderH1 from "./TheHeaderH1.vue";
import TheHeader3H1 from "./TheHeader3H1.vue";
import TheNavMobile from "./TheNavMobile.vue";
import TheNav from "./TheNav.vue";
import TheNavHeader3 from "./TheNavHeader3.vue";

export default {
  props: ["black", "white", "color"],
  data() {
    return {
      marginBottom: "1rem"
    };
  },
  components: {
    TheHeaderH1,
    TheHeader3H1,
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
