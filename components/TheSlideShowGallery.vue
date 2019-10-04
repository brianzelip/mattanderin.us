<template>
  <main>
    <h1 class="mt0 regular center pageTitle">
      Slide Show of L<svg
        class="heart"
        viewBox="0 0 512 512"
      >
        <path
          d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"
          fill="red"
        />
      </svg>ve
    </h1>
    <ul
      class="list-reset"
      data-slide-container
    >
      <li data-grid-sizer></li>
      <li
        :key="index"
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
    const msnry = new Masonry(grid, {
      columnWidth: "[data-grid-sizer]",
      itemSelector: "[data-grid-item]",
      percentPosition: true
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
.heart {
  width: 1.5rem;
  margin-right: 0.25rem;
}
</style>
