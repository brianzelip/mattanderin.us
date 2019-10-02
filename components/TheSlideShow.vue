<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
    <figure
      :key="index"
      v-for="(image, index) in imagesEntries"
    >
      <img
        :alt="image[0]"
        :src="image[1]"
        :title="image[0]"
      />
      <figcaption>{{ image[0] }}</figcaption>
    </figure>
  </main>
</template>

<script>
import images from "../img/slideshow/*.jpg";
// Parcel returns an object of filename:path pairs
// see https://github.com/parcel-bundler/parcel/issues/1668#issuecomment-402620813

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

<style scoped>
figure {
  margin: 0 0 2rem 0;
}
</style>