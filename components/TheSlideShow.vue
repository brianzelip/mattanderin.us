<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
    <figure>
      <img
        :alt="activeImage.name"
        :src="activeImage.path"
        :title="activeImage.name"
      />
      <button class="prev">&lsaquo;</button>
      <button class="next">&rsaquo;</button>
      <figcaption>{{ activeImage.name }}</figcaption>
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
      prev: null,
      active: 0,
      next: null
    };
  },
  computed: {
    numImages() {
      return Object.entries(images).length;
    },
    prevIndex() {
      return this.active === 0 ? this.numImages - 1 : this.active - 1;
    },
    nextIndex() {
      return this.active === this.numImages - 1 ? 0 : this.active + 1;
    },
    imagesEntries() {
      return Object.entries(images);
    },
    activeImage() {
      return {
        name: Object.entries(images)[this.active][0],
        path: Object.entries(images)[this.active][1]
      };
    }
  },
  created() {
    console.log("images:::::::", Object.entries(images));
  },
  mounted() {
    this.$set(this, "prev", this.prevIndex);
    this.$set(this, "next", this.nextIndex);
  }
};
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

figure {
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
}

img {
  position: absolute;
  max-height: 100%;
}

button {
  position: absolute;
  align-self: center;
  color: rgba(51, 34, 34, 0.5);
  border: none;
  background-color: transparent;
}
button:hover {
  color: var(--soft-black);
}
.prev {
  left: 0;
  font-size: 4rem;
}
.next {
  right: 0;
  font-size: 4rem;
}
</style>
