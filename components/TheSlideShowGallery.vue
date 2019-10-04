<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show of Love</h1>
    <ul
      class="list-reset"
      data-slide-container
    >
      <li data-grid-sizer></li>
      <li
        :key="index"
        class="hover-nudge-up"
        data-grid-item
        v-for="(image, index) in imagesEntries"
      >
        <figure class="m0">
          <img
            :alt="image[0]"
            :src="image[1]"
            :title="image[0]"
          />
        </figure>
      </li>
    </ul>
  </main>
</template>

<script>
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

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
  },
  mounted() {
    const grid = document.querySelector("[data-slide-container]");
    imagesLoaded(grid, () => {
      const msnry = new Masonry(grid, {
        columnWidth: "[data-grid-sizer]",
        itemSelector: "[data-grid-item]",
        percentPosition: true
      });
    });
  }
};
</script>

<style scoped>
/* ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
} */
/* fluid 4 columns */
[data-grid-sizer],
[data-grid-item] {
  width: 33.333%;
}
[data-grid-item] {
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
}
/* 2 columns wide */
[data-grid-item].big {
  width: 50%;
}
.hover-nudge-up {
  transition: 200ms ease-in-out;
}
.hover-nudge-up:hover {
  transform: translateY(-0.25rem);
  transition: 200ms ease-in-out;
}
</style>
