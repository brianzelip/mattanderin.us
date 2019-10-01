<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
  </main>
</template>

<script>
import images from "../img/slideshow/*.jpg";

export default {
  created() {
    console.log("images:::::::", Object.entries(images));
  }
};
</script>
