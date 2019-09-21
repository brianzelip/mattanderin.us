<template>
  <nav ref="nav">
    <div class="flex justify-end">
      <button @click="close">
        <svg viewBox="0 0 320 512">
          <path
            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
          />
        </svg>
      </button>
    </div>
    <ul class="list-reset mb0 flex flex-wrap">
      <li
        :key="i"
        class="col-6"
        v-for="(page, i) in pages"
      >
        <router-link
          :class="{ active: page.path === currentPath }"
          :to="page.path"
          class="button"
        >{{ page.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["color"],
  data() {
    return {
      pages: [
        { path: "/", text: "Home" },
        { path: "/story", text: "Our Story" },
        { path: "/schedule", text: "Schedule" },
        { path: "/location", text: "Location" },
        { path: "/party", text: "Wedding Party" },
        { path: "/honeymoon", text: "Honeymoon Fund" },
        { path: "/slideshow", text: "Slide Show" },
        { path: "/rsvp", text: "RSVP" }
      ]
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  watch: {
    $route() {
      this.$refs.nav.classList.remove("show");
    }
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  /* width: calc(100% - 1rem); */
  width: calc(75% - 1rem);
  height: 100vh;
  z-index: 10;
  background-color: var(--soft-black);
  padding: 1rem 0.5rem;
  margin-right: calc(-75% - 1rem);
  /* margin-right: calc(-100% - 1rem); */
  transition: all 0.3s ease 0s;
  box-shadow: 0 0 12px 2px rgba(51, 34, 34, 0.7);
}

nav.show {
  margin-right: 0;
  transition: all 0.3s ease 0s;
}

button {
  margin: 0.25rem 0 0 0; /* top margin for better look */
  padding: 0.5rem 1rem;
  height: auto;
  display: flex;
  align-self: flex-start;
  align-items: center;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  color: var(--soft-white);
  /* font-variant: small-caps; */
  text-decoration: none;
  cursor: default;
  background-color: transparent;
  -webkit-appearance: none;
}

button:hover {
  background-color: var(--soft-white);
  color: var(--soft-black);
}

svg {
  /* margin-left: 0.25rem; */
  width: 1rem;
  fill: currentColor;
}

.button {
  display: block;
  padding: 0.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  color: var(--soft-white);
}
.button:hover {
  background-color: var(--soft-white);
  color: var(--soft-black);
  transition: all 0.3s ease 0s;
}

.active,
.active:hover {
  background-color: var(--soft-white);
  color: var(--soft-black);
  cursor: default;
}

.justify-end {
  justify-content: flex-end;
}
</style>
