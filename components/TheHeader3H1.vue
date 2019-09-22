<template>
  <h1
    :class="{'soft-black': color === 'black', 'soft-white': color === 'white'}"
    class="m0 regular lh1 Italianno"
  >
    Erin
    <span>&amp;</span> Matt
  </h1>
</template>

<script>
export default {
  props: ["color"]
};
</script>