<template>
  <section class="vh100">
    <TheHeader :currentPath="currentPath"></TheHeader>
    <component
      :is="page"
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
  props: ["page"],
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
  },
  data() {
    return {
      dict: {
        TheOurStory: "/story",
        TheSchedule: "/schedule",
        TheLocation: "/location",
        TheWeddingParty: "/party",
        TheHoneymoonFund: "/honeymoon",
        TheSlideShow: "/slideshow",
        TheRSVP: "/rsvp"
      }
    };
  },
  computed: {
    currentPath() {
      return this.dict[this.$props.page];
    }
  }
};
</script>
