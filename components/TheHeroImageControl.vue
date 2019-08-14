<template>
  <aside>
    <section
      class="mr1"
      v-on:click="left"
    >⬅️</section>
    <section v-on:click="right">➡️</section>
  </aside>
</template>

<script>
export default {
  methods: {
    left() {
      this.$emit("left");
    },
    right() {
      this.$emit("right");
    }
  }
};
</script>

<style scoped>
aside {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

section {
  font-size: 2rem;
}
</style>