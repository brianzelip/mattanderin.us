<template>
  <div id="app">
    <router-view></router-view>
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
