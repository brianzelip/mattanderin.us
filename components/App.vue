<template>
  <div>
    <router-view></router-view>
    <section class="vh100"></section>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheHero from "./TheHero.vue";

export default {
  components: {
    TheHeader,
    TheHero
  }
};
</script>
