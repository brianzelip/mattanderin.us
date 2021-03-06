<template>
  <section>
    <TheHeader
      :color="isHome ? heroColor : 'black'"
      class="header"
    ></TheHeader>
    <keep-alive>
      <component
        :class="{ component: !isHome }"
        :is="component"
        v-on:update-hero-color="updateHeroColor"
      ></component>
    </keep-alive>
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
import TheSlideShowOfLove from "./TheSlideShowOfLove.vue";
import TheRSVP from "./TheRSVP.vue";
import TheComments from "./TheComments.vue";
import TheCommentsFail from "./TheCommentsFail.vue";

export default {
  props: ["component"],
  components: {
    TheHeader,
    TheHero,
    TheOurStory,
    TheSchedule,
    TheLocation,
    TheWeddingParty,
    TheHoneymoonFund,
    TheSlideShowOfLove,
    TheRSVP,
    TheComments,
    TheCommentsFail
  },
  data() {
    return {
      heroColor: "",
      titleMap: {
        story: "Our Story",
        schedule: "Schedule",
        location: "Location",
        party: "Wedding Party",
        honeymoon: "Honeymoon Fund",
        slideshow: "Slide Show of Love",
        rsvp: "RSVP",
        comments: "Leave a Comment",
        fail: "Failed Comment"
      }
    };
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    },
    titlePrefix() {
      return this.titleMap[this.$route.name];
    },
    title() {
      const base =
        "Erin ＆ Matt’s Wedding · Winter Solstice 2019 · Maurice, Louisiana";
      return this.$route.name === "home"
        ? base
        : `${this.titlePrefix} | ${base}`;
    }
  },
  methods: {
    updateHeroColor(color) {
      this.$set(this, "heroColor", color);
    }
  },
  metaInfo() {
    return { title: this.title };
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
  margin-top: 2rem;
  padding: 1rem;
}
@media screen and (min-width: 960px) {
  .component {
    margin-top: 0;
    padding: 1.5rem 1.5rem 1.5rem 0;
  }
}
@media screen and (min-width: 1024px) {
  .component {
    padding: 2rem 2rem 2rem 0;
  }
}
</style>

<style>
.pageTitle {
  font-size: 1.75rem;
}
.component h2 {
  font-size: 1.25rem;
}
.component p,
.component label,
.component button,
.component figcaption {
  font-size: 1rem;
}
.component a {
  text-decoration: underline;
}
.component a:hover {
  color: red;
}

@media screen and (min-width: 480px) {
  .pageTitle {
    font-size: 1.875rem;
  }
}
@media screen and (min-width: 780px) {
  .pageTitle {
    font-size: 2rem;
  }
  .component p,
  .component label,
  .component button,
  .component figcaption {
    font-size: 1.125rem;
  }
}
@media screen and (min-width: 960px) {
  .pageTitle {
    font-size: 2.25rem;
  }
  .component h2 {
    font-size: 1.5rem;
  }
  .component p,
  .component label,
  .component button,
  .component figcaption {
    font-size: 1.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .pageTitle {
    font-size: 2.5rem;
  }
  .component h2 {
    font-size: 1.75rem;
  }
}
</style>
