<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
    <figure>
      <img
        :alt="activeImage.name"
        :src="activeImage.path"
        :title="activeImage.name"
      />
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
  margin: 0;
}
</style>
