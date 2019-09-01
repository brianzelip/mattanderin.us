<template>
  <section class="vh100 flex">
    <TheHeader3
      class="no-shrink-sticky-top-align-self"
      color="black"
    ></TheHeader3>
    <component
      :is="component"
      class="relative col-12 p3"
    ></component>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHeader3 from "./TheHeader3.vue";
import TheOurStory from "./TheOurStory.vue";
import TheSchedule from "./TheSchedule.vue";
import TheLocation from "./TheLocation.vue";
import TheWeddingParty from "./TheWeddingParty.vue";
import TheHoneymoonFund from "./TheHoneymoonFund.vue";
import TheSlideShow from "./TheSlideShow.vue";
import TheRSVP from "./TheRSVP.vue";
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
    TheHeader,
    TheHeader3,
    TheOurStory,
    TheSchedule,
    TheLocation,
    TheWeddingParty,
    TheHoneymoonFund,
    TheSlideShow,
    TheRSVP,
    TheRSVPSuccess,
    TheRSVPFail,
    TheOurStory3,
    TheSchedule3,
    TheLocation3,
    TheWeddingParty3,
    TheHoneymoonFund3,
    TheSlideShow3,
    TheRSVP3
  }
};
</script>

<style scoped>
/* this !SO answer helped w/ the align-self insight!
  https://stackoverflow.com/a/44446672/2145103 */
.no-shrink-sticky-top-align-self {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  align-self: flex-start;
}
</style>
