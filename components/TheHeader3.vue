<template>
  <header
    :style="{ marginBottom: marginBottom }"
    class="p2"
  >
    <div class="flex-grow mr2">
      <h1 class="m0 regular Italianno lh1">
      Erin
        <span class="mx2">&amp;</span> Matt
      </h1>
      <h2 class="mt0 regular lh1">
        Winter Solstice &sdot; December 21
        <span class="sup">st</span>, 2019 &sdot; Maurice, Louisiana
      </h2>
    </div>
    <TheNavMobile class="md-hide"></TheNavMobile>
    <TheNavHeader3
      :currentPath="currentPath"
      class="col-12 md-show"
      v-on:add-margin-bottom="setMarginBottom"
      v-on:reset-margin-bottom="resetMarginBottom"
    ></TheNavHeader3>
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

.container{
  max-width:64rem;
  margin-left:auto;
  margin-right:auto;
}
</style>
