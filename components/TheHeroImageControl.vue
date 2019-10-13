<template>
  <aside>
    <button
      class="mr1"
      v-on:click="left"
    >⬅️</button>
    <button v-on:click="right">➡️</button>
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

button {
  padding: 0;
  font-size: 2rem;
  border: none;
  text-decoration: none;
  background-color: transparent;
  cursor: default;
  color: inherit;
  -webkit-appearance: none;
}
</style>
