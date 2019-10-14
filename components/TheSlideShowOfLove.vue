<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show of Love</h1>
    <iframe
      allow="encrypted-media"
      allowtransparency="true"
      class="playlist"
      frameborder="0"
      src="https://open.spotify.com/embed/playlist/5hSVaR4tTZWAok30T3cE7K"
    ></iframe>
    <ul
      class="list-reset"
      data-slide-container
    >
      <li data-grid-sizer></li>
      <li data-gutter-sizer></li>
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
            @click="openModalAt(index)"
            class="hover-shadow"
          />
        </figure>
      </li>
    </ul>
    <TheSlideShowOfLoveModal
      :imagesEntries="imagesEntries"
      :keyboard-nav="keyboardNav"
      :startIndex="startIndex"
      v-if="showModal"
      v-on:close="closeModal"
    ></TheSlideShowOfLoveModal>
  </main>
</template>

<script>
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

import images from "../img/slideshow/*.jpg";
// Parcel returns an object of filename:path pairs
// see https://github.com/parcel-bundler/parcel/issues/1668#issuecomment-402620813

import TheSlideShowOfLoveModal from "./TheSlideShowOfLoveModal";

export default {
  components: {
    TheSlideShowOfLoveModal
  },
  data() {
    return {
      showModal: false,
      keyboardNav: {},
      startIndex: null
    };
  },
  computed: {
    imagesEntries() {
      return Object.entries(images);
    }
  },
  methods: {
    openModalAt(i) {
      this.$set(this, "startIndex", i);
      this.$set(this, "showModal", true);
    },
    escListener(e) {
      if (e.keyCode === 27 && this.showModal) {
        this.closeModal();
      }
    },
    leftListener(e) {
      if (e.keyCode === 37 && this.showModal) {
        this.$set(this, "keyboardNav", {
          direction: "back",
          timestamp: new Date()
        });
      }
    },
    rightListener(e) {
      if (e.keyCode === 39 && this.showModal) {
        this.$set(this, "keyboardNav", {
          direction: "forward",
          timestamp: new Date()
        });
      }
    },
    closeModal() {
      this.showModal = false;
    }
  },
  created() {
    document.addEventListener("keydown", this.escListener);
    document.addEventListener("keydown", this.leftListener);
    document.addEventListener("keydown", this.rightListener);
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
  },
  destroyed() {
    document.removeEventListener("keyup", this.escListener);
    document.removeEventListener("keyup", this.leftListener);
    document.removeEventListener("keyup", this.rightListener);
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
  .hover-shadow {
    transition: 200ms ease-in-out;
  }
  .hover-shadow:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    transform: scale3d(1.001, 1.001, 1.001);
    transition: 200ms ease-in-out;
  }
}

main {
  cursor: url("../img/heart.png"), default;
  transition: 200ms ease-in-out;
}

.playlist {
  height: 75px;
  width: 100%;
  margin-bottom: 0.5rem;
}
@media screen and (min-width: 780px) {
  .playlist {
    height: 180px;
  }
}
@media screen and (min-width: 960px) {
  .playlist {
    height: 230px;
    margin-bottom: 0;
  }
}
</style>
