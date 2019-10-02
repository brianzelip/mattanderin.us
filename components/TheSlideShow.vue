<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Slide Show</h1>
    <figure>
      <img
        :alt="activeImage.name"
        :src="activeImage.path"
        :title="activeImage.name"
      />
      <button @click="goBack" class="prev">
        <svg viewBox="0 0 512 512">
          <path
            d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-86.6-224.5l115.1-115c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L209 256l99.5 99.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-115.1-115c-4.6-4.8-4.6-12.4.1-17.1z"
          />
        </svg>
      </button>
      <button @click="goForward" class="next">
        <svg viewBox="0 0 512 512">
          <path
            d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z"
          />
        </svg>
      </button>
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
  methods: {
    goBack() {
      this.$set(this, "active", this.prevIndex);
    },
    goForward() {
      this.$set(this, "active", this.nextIndex);
    }
  },
  watch: {
    active() {
      this.$set(this, "prev", this.prevIndex);
      this.$set(this, "next", this.nextIndex);
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
  height: 2rem;
  width: 2rem;
  padding: 0;
  color: rgba(51, 34, 34, 0.5);
  border: none;
  background-color: transparent;
}
button:hover {
  color: var(--soft-black);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
svg {
  fill: currentColor;
  font-size: 2rem;
}
</style>
