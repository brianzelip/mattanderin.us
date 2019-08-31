<template>
  <section class="vh100">
    <TheHeader></TheHeader>
    <component
      :is="component"
      class="relative"
    ></component>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
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
    TheOurStory,
    TheSchedule,
    TheLocation,
    TheWeddingParty,
    TheHoneymoonFund,
    TheSlideShow,
    TheRSVP,
    TheRSVPSuccess,
    TheRSVPFail
  }
};
</script>
