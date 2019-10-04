<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show of Love</h1>
    <ul
      class="list-reset"
      data-slide-container
    >
      <li data-grid-sizer></li>
      <li data-gutter-sizer></li>
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
        gutter: "[data-gutter-sizer]",
        itemSelector: "[data-grid-item]",
        percentPosition: true
      });
    });
  }
};
</script>

<style scoped>
[data-grid-sizer],
[data-grid-item] {
  width: 100%;
}
[data-gutter-sizer] {
  width: 0;
}
[data-grid-item] {
  margin-bottom: 0.5rem;
}
@media screen and (min-width: 780px) {
  [data-grid-sizer],
  [data-grid-item] {
    width: calc(50% - 4px);
  } /* see this !SO answer for the crazy Masonry percentage sizing width calc based on number of columns and gutter width,
  https://stackoverflow.com/a/51290967/2145103 */
  [data-gutter-sizer] {
    width: 0.5rem;
  }
  [data-grid-item] {
    margin-bottom: 0.25rem;
  }
}
@media screen and (min-width: 1200px) {
  [data-grid-sizer],
  [data-grid-item] {
    width: calc(33.333% - 5.4px);
  }
}

@media screen and (min-width: 780px) {
  .hover-nudge-up {
    transition: 200ms ease-in-out;
  }
  .hover-nudge-up:hover {
    transform: translateY(-0.25rem);
    transition: 200ms ease-in-out;
  }
}
</style>
