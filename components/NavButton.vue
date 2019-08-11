<template>
  <li class="col-12 center">
    <router-link
      :to="`/${path}`"
      class="button"
    >{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  data() {
    return {
      story: "Our Story",
      schedule: "Schedule",
      location: "Location",
      party: "Wedding Party",
      honeymoon: "Honeymoon Fund",
      slideshow: "Slide Show",
      rsvp: "RSVP"
    };
  },
  props: ["path"],
  computed: {
    text() {
      return this[path];
    }
  }
};
</script>