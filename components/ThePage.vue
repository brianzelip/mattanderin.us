<template>
  <section>
    <TheHeader
      :color="isHome ? 'white' : 'black'"
      class="header"
    ></TheHeader>
    <component
      :is="component"
      class="component"
    ></component>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHero from "./TheHero.vue";
import TheOurStory from "./TheOurStory.vue";
import TheSchedule from "./TheSchedule.vue";
import TheLocation from "./TheLocation.vue";
import TheWeddingParty from "./TheWeddingParty.vue";
import TheHoneymoonFund from "./TheHoneymoonFund.vue";
import TheSlideShow from "./TheSlideShow.vue";
import TheRSVP from "./TheRSVP.vue";
import TheRSVPSuccess from "./TheRSVPSuccess.vue";
import TheRSVPFail from "./TheRSVPFail.vue";

export default {
  props: ["component"],
  components: {
    TheHeader,
    TheHero,
    TheRSVPSuccess,
    TheRSVPFail,
    TheOurStory,
    TheSchedule,
    TheLocation,
    TheWeddingParty,
    TheHoneymoonFund,
    TheSlideShow,
    TheRSVP
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
