<template>
  <header>
    <div class="hwrapper">
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
      >Winter Solstice 2019</h2>
      <h2
        :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
        class="mt1"
      >Maurice, LA</h2>
      <!-- <h2
        :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
      >Winter Solstice &sdot; December 21, 2019</h2>
      <h2
        :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
      >Maurice, Louisiana</h2>-->
      <!-- <h2
        :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
      >December 21, 2019</h2>-->
    </div>
    <button
      :class="{'soft-black': color === 'black', 'soft-white': color === 'white', buttonBlack: color === 'black', buttonWhite: color === 'white' }"
    >
      Menu
      <svg viewBox="0 0 448 512">
        <path
          d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
        />
      </svg>
    </button>
    <!-- <hr :class="{'bg-soft-black': color === 'black', 'bg-soft-white': color === 'white'}" /> -->
    <!-- <TheNavHeader3
      :color="color"
      class="col-12 md-show"
      v-on:add-margin-bottom="setMarginBottom"
      v-on:reset-margin-bottom="resetMarginBottom"
    ></TheNavHeader3>
    <TheNavMobile class="md-hide"></TheNavMobile>-->
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
header {
  position: relative;
  padding: 0.5rem;
  /* display: flex;
  justify-content: space-between; */
  /* align-items: center; */
}
.hwrapper {
  display: flex;
  flex-direction: column;
}

button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  margin: 0.25rem 0 0 0; /* top margin for better look */
  padding: 0.5rem 0.5rem;
  height: auto;
  display: flex;
  align-self: flex-start;
  align-items: center;
  border: 1px solid currentColor;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 400;
  font-variant: small-caps;
  text-decoration: none;
  cursor: default;
  background-color: transparent;
  -webkit-appearance: none;
}

.buttonBlack:hover {
  color: var(--soft-white);
  border-color: var(--soft-white);
  background-color: var(--soft-black);
}
.buttonWhite:hover {
  color: var(--soft-black);
  border-color: var(--soft-white);
  background-color: var(--soft-white);
}

svg {
  margin-left: 0.25rem;
  width: 1rem;
  fill: currentColor;
}
h1 {
  text-align: left;
  font-size: 2.5rem;
  flex-shrink: 0;
}
h2 {
  margin: 0;
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
  text-align: left;
}

.h2wrapper {
  display: flex;
  flex-direction: column;
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

hr {
  height: 4px;
  border: none;
}
</style>
