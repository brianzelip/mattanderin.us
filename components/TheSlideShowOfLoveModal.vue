<template>
  <section>
    <figure>
      <img
        :alt="activeImage.name"
        :src="activeImage.path"
        :title="activeImage.name"
      />
      <button @click="goBack" class="prev">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            class="fa-background"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm72.5 349.6a23.9 23.9 0 0 1 0 33.9l-17 17a23.9 23.9 0 0 1-33.9 0L142.1 273a24 24 0 0 1 0-34l135.5-135.5a23.9 23.9 0 0 1 33.9 0l17 17a23.9 23.9 0 0 1 0 33.9L226.9 256z"
          />
          <path
            class="fa-chevron"
            d="M142.1 239l135.5-135.5a23.9 23.9 0 0 1 33.9 0l17 17a23.9 23.9 0 0 1 0 33.9L226.9 256l101.6 101.6a23.9 23.9 0 0 1 0 33.9l-17 17a23.9 23.9 0 0 1-33.9 0L142.1 273a24 24 0 0 1 0-34z"
          />
        </svg>
      </button>
      <button @click="goForward" class="next">
        <svg viewBox="0 0 512 512">
          <path
            class="fa-background"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm113.9 265L234.4 408.5a23.9 23.9 0 0 1-33.9 0l-17-17a23.9 23.9 0 0 1 0-33.9L285.1 256 183.5 154.4a23.9 23.9 0 0 1 0-33.9l17-17a23.9 23.9 0 0 1 33.9 0L369.9 239a24 24 0 0 1 0 34z"
          />
          <path
            class="fa-chevron"
            d="M369.9 273L234.4 408.5a23.9 23.9 0 0 1-33.9 0l-17-17a23.9 23.9 0 0 1 0-33.9L285.1 256 183.5 154.4a23.9 23.9 0 0 1 0-33.9l17-17a23.9 23.9 0 0 1 33.9 0L369.9 239a24 24 0 0 1 0 34z"
          />
        </svg>
      </button>
      <figcaption>{{ activeImage.name }}</figcaption>
    </figure>
  </section>
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
section {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.9);
}

figure {
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 2rem;
}
.fa-background {
  fill: rgb(255, 249, 249);
}
.fa-chevron {
  fill: rgba(51, 34, 34, 0.5);
}
svg:hover .fa-chevron {
  fill: rgb(51, 34, 34);
}
</style>
