<template>
  <header :class="{ boxShadow: !isHome }">
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
      <h2 class="hide">Winter Solstice, December 21, 2019</h2>
      <h2 class="hide">Maurice, Louisiana</h2>
      <p
        :class="{
          'soft-black': color === 'black',
          'soft-white': color === 'white'
        }"
        class="date"
      ></p>
      <p
        :class="{
          'soft-black': color === 'black',
          'soft-white': color === 'white'
        }"
        class="place"
      ></p>
    </div>
    <button
      @click="showNavMobile = !showNavMobile"
      class="mobileNav"
    >
      <svg viewBox="0 0 448 512">
        <path
          d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
        />
      </svg>
    </button>
    <TheNavMobile3
      :class="{ show: showNavMobile }"
      :color="color"
      v-on:close="showNavMobile = !showNavMobile"
    ></TheNavMobile3>
    <hr :class="{'bg-soft-black': color === 'black', 'bg-soft-white': color === 'white'}" />
    <TheNav3
      :color="color"
      class="desktopNav"
      v-on:add-margin-bottom="setMarginBottom"
      v-on:reset-margin-bottom="resetMarginBottom"
    ></TheNav3>
  </header>
</template>

<script>
import TheHeaderH1 from "./TheHeaderH1.vue";
import TheHeader3H1 from "./TheHeader3H1.vue";
import TheNavMobile from "./TheNavMobile.vue";
import TheNavMobile3 from "./TheNavMobile3.vue";
import TheNav from "./TheNav.vue";
import TheNav3 from "./TheNav3.vue";

export default {
  props: ["black", "white", "color"],
  data() {
    return {
      marginBottom: "1rem",
      showNavMobile: false
    };
  },
  components: {
    TheHeaderH1,
    TheHeader3H1,
    TheNavMobile,
    TheNavMobile3,
    TheNav,
    TheNav3
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
  },
  watch: {
    $route() {
      this.$set(this, "showNavMobile", false);
    }
  }
};
</script>


<style scoped>
header {
  position: relative;
  display: block;
  padding: 1rem;
}
@media (min-width: 960px) {
  header {
    display: inline-block;
  }
}
@media (min-width: 1024px) {
  header {
    padding: 2rem;
  }
}

.boxShadow {
  box-shadow: 0 1px var(--soft-black);
}
@media (min-width: 960px) {
  .boxShadow {
    box-shadow: none;
  }
}

.hwrapper {
  display: flex;
  flex-direction: column;
}
@media (min-width: 960px) {
  .hwrapper {
    display: block;
  }
}

button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0.25rem 0 0 0; /* top margin for better look */
  padding: 0;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  border: none;
  text-decoration: none;
  cursor: default;
  background-color: var(--soft-black);
  color: var(--soft-white);
  -webkit-appearance: none;
}

button:hover {
  background-color: var(--soft-white);
  color: var(--soft-black);
}

svg {
  width: 1.5rem;
  fill: currentColor;
}

h1 {
  font-size: 2.5rem;
  flex-shrink: 0;
}
@media (min-width: 780px) {
  h1 {
    font-size: 3rem;
  }
}
@media (min-width: 1024px) {
  h1 {
    font-size: 4.75rem;
  }
}

p {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
}
@media (min-width: 780px) {
  p {
    font-size: 1.25rem;
  }
}
@media (min-width: 1024px) {
  p {
    font-size: 1.5rem;
  }
}
.date::after {
  content: "Winter Solstice 2019";
}
.place {
  margin-bottom: 0;
}
@media (min-width: 960px) {
  .place {
    margin-bottom: 0.5em;
  }
}
.place::after {
  content: "Maurice, LA";
}
@media (min-width: 480px) {
  .date::after {
    content: "Winter Solstice \22C5  December 21, 2019";
  } /* U+22C5 is unicode for &sdot; */
  .place::after {
    content: "Maurice, Louisiana";
  }
}

.sup {
  font-size: 0.83em;
  vertical-align: super;
  margin-left: -0.3rem;
}

hr {
  display: none;
  border: none;
}
@media (min-width: 960px) {
  hr {
    display: block;
    height: 4px;
  }
}

@media (min-width: 960px) {
  .mobileNav {
    display: none;
  }
}

.desktopNav {
  display: none;
}

@media (min-width: 960px) {
  .desktopNav {
    display: block;
  }
}
</style>
