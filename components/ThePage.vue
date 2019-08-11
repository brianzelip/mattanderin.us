<template>
  <section class="vh100">
    <TheHeader></TheHeader>
    <component
      :is="page"
      class="relative"
    ></component>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHoneyMoon from "./TheHoneyMoon.vue";
import TheBridalParty from "./TheBridalParty.vue";
import TheLocation from "./TheLocation.vue";

export default {
  props: ["page"],
  components: {
    TheHeader,
    TheHoneyMoon,
    TheBridalParty,
    TheLocation
  }
};
</script>
