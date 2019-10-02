<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
    <ul class="list-reset">
      <li
        :key="index"
        class="mb3 col-3"
        v-for="(image, index) in imagesEntries"
      >
        <figure class="m0">
          <img
            :alt="image[0]"
            :src="image[1]"
            :title="image[0]"
          />
          <figcaption>{{ image[0] }}</figcaption>
        </figure>
      </li>
    </ul>
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
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
