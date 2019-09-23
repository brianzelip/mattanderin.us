<template>
  <section>
    <TheHeader3
      :color="isHome ? 'white' : 'black'"
      class="header"
    ></TheHeader3>
    <component
      :is="component"
      class="component"
    ></component>
  </section>
</template>

<script>
import TheHeader3 from "./TheHeader3.vue";
import TheHero3 from "./TheHero3.vue";
import TheOurStory3 from "./TheOurStory3.vue";
import TheSchedule3 from "./TheSchedule3.vue";
import TheLocation3 from "./TheLocation3.vue";
import TheWeddingParty3 from "./TheWeddingParty3.vue";
import TheHoneymoonFund3 from "./TheHoneymoonFund3.vue";
import TheSlideShow3 from "./TheSlideShow3.vue";
import TheRSVP3 from "./TheRSVP3.vue";
import TheRSVPSuccess from "./TheRSVPSuccess.vue";
import TheRSVPFail from "./TheRSVPFail.vue";

export default {
  props: ["component"],
  components: {
    TheHeader3,
    TheHero3,
    TheRSVPSuccess,
    TheRSVPFail,
    TheOurStory3,
    TheSchedule3,
    TheLocation3,
    TheWeddingParty3,
    TheHoneymoonFund3,
    TheSlideShow3,
    TheRSVP3
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    }
  }
};
</script>

<style scoped>
/* this !SO answer helped w/ the align-self insight!
  https://stackoverflow.com/a/44446672/2145103 */

@media screen and (min-width: 960px) {
  section {
    display: flex;
  }
}
@media screen and (min-width: 960px) {
  .header {
    flex-shrink: 0;
  }
}
@media screen and (min-width: 960px) and (min-height: 550px) {
  .header {
    position: sticky;
    top: 0;
    align-self: flex-start;
  }
}

.component {
  width: 100%;
  padding: 1rem;
}
@media screen and (min-width: 960px) {
  .component {
    padding: 1.5rem 1.5rem 1.5rem 0;
  }
}
@media screen and (min-width: 1024px) {
  .component {
    padding: 2rem 2rem 2rem 0;
  }
}
</style>
