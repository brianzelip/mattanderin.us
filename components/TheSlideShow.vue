<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
    <figure v-for="(image, index) in imagesEntries" :key="index">
      <img :src="image[1]" :alt="image[0]" :title="image[0]" />
      <figcaption>{{ image[0] }}</figcaption>
    </figure>
  </main>
</template>

<script>
import images from "../img/slideshow/*.jpg";

export default {
  data() {
    return {
      prev: 0,
      current: 1,
      next: 2
    };
  },
  computed: {
    imagesEntries() {
      return Object.entries(images);
    }
  },
  created() {
    console.log("images:::::::", Object.entries(images));
  }
};
</script>
