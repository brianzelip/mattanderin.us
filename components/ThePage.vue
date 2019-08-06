<template>
  <section class="vh100">
    <TheHeader></TheHeader>
    <component :is="page" class="relative"></component>
  </section>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheHoneyMoon from './TheHoneyMoon.vue';

export default {
  props: ['page'],
  components: {
    TheHeader,
    TheHoneyMoon
  }
}
</script>
