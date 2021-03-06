<template>
  <header>
    <div class="hwrapper">
      <TheHeaderH1
        :color="color"
        v-if="isHome"
      ></TheHeaderH1>
      <router-link
        class="hover-text-decoration-none"
        to="/"
        v-else
      >
        <TheHeaderH1 :color="color"></TheHeaderH1>
      </router-link>
      <h2 class="hide">Winter Solstice, December 21, 2019</h2>
      <p
        :class="{
          'soft-black': color === 'black',
          'soft-white': color === 'white'
        }"
        class="date"
      ></p>
      <h2
        :class="{
          'soft-black': color === 'black',
          'soft-white': color === 'white'
        }"
        class="place baskerville regular"
      >Maurice, Louisiana</h2>
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
    <TheNavMobile
      :class="{ show: showNavMobile }"
      :color="color"
      v-on:close="showNavMobile = !showNavMobile"
    ></TheNavMobile>
    <hr
      :class="{
        'bg-soft-black': color === 'black',
        'bg-soft-white': color === 'white'
      }"
    />
    <TheNav
      :color="color"
      class="desktopNav"
    ></TheNav>
  </header>
</template>

<script>
import TheHeaderH1 from "./TheHeaderH1.vue";
import TheNavMobile from "./TheNavMobile.vue";
import TheNav from "./TheNav.vue";

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
    TheNavMobile,
    TheNav
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
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
@media screen and (min-width: 780px) {
  header {
    padding: 1.5rem;
  }
}
@media screen and (min-width: 960px) {
  header {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}
@media screen and (min-width: 1024px) {
  header {
    padding: 2rem;
  }
}

.boxShadow {
  box-shadow: 0 1px var(--soft-black);
}
@media screen and (min-width: 960px) {
  .boxShadow {
    box-shadow: none;
  }
}

.hwrapper {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 960px) {
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

svg {
  width: 1.5rem;
  fill: currentColor;
}

h1 {
  font-size: 3rem;
  margin-bottom: -0.5rem;
  flex-shrink: 0;
}
@media screen and (min-width: 780px) {
  h1 {
    font-size: 3.75rem;
    margin-bottom: -0.75rem;
  }
}
@media screen and (min-width: 960px) {
  h1 {
    font-size: 4.25rem;
  }
}
@media screen and (min-width: 1024px) {
  h1 {
    font-size: 5.75rem;
    margin-bottom: -1rem;
  }
}

p,
.place {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
}
.date {
  margin-bottom: 0.25rem;
}
@media screen and (min-width: 780px) {
  .date,
  .place {
    font-size: 1.25rem;
  }
}
@media screen and (min-width: 960px) {
  .place {
    margin-bottom: 0.5em;
  }
}
@media screen and (min-width: 1024px) {
  .date {
    margin-bottom: 0.5em;
  }
  .date,
  .place {
    font-size: 1.5rem;
  }
}
.date::after {
  content: "Winter Solstice \22C5  Dec 21, 2019";
}
@media screen and (min-width: 480px) {
  .date::after {
    content: "Winter Solstice \22C5  December 21, 2019";
  } /* U+22C5 is unicode for &sdot; */
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
@media screen and (min-width: 960px) {
  hr {
    display: block;
    width: 100%;
    height: 4px;
  }
}

@media screen and (min-width: 960px) {
  .mobileNav {
    display: none;
  }
}

.desktopNav {
  display: none;
}

@media screen and (min-width: 960px) {
  .desktopNav {
    display: block;
  }
}
</style>
