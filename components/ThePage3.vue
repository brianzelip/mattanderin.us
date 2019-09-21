<template>
  <section>
    <!-- TheHero HEADER HAD class="inline-block" for desktop -->
    <!-- TheHero HEADER NEEDS color="white"  -->
    <TheHeader3
      class="header"
      color="black"
    ></TheHeader3>
    <component
      :is="component"
      class="col-12 p2"
    ></component>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHeader3 from "./TheHeader3.vue";
import TheHero3 from "./TheHero3.vue";
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
    TheHero3,
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

section {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.header {
  /* flex-shrink: 0;
  position: sticky;
  top: 0;
  align-self: flex-start; */
  /* overflow-y: scroll; */
}
</style>
