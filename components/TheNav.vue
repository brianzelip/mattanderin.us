<template>
  <nav class="flex justify-center">
    <ul class="list-reset mb0">
      <li :key="i" v-for="(page, i) in pages">
        <router-link
          :class="{
            'soft-black': color === 'black',
            'soft-white': color === 'white',
            active: page.path === currentPath
          }"
          :to="page.path"
          class="button"
          >{{ page.text }}</router-link
        >
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
        { path: "/story", text: "Our Story" },
        { path: "/schedule", text: "Schedule" },
        { path: "/location", text: "Location" },
        { path: "/party", text: "Wedding Party" },
        { path: "/honeymoon", text: "Honeymoon Fund" },
        { path: "/slideshow", text: "Slide Show of Love" },
        { path: "/comments", text: "Leave a Comment" }
      ]
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
nav {
  flex-grow: 1;
  position: relative;
}

ul {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
}

@media screen and (max-height: 570px) {
  ul:hover {
    overflow-y: scroll;
  }
}

.button {
  display: block;
  padding: 0.5rem;
  font-size: 1.25rem;
  text-decoration: none;
}
.button:hover {
  background-color: rgba(51, 34, 34, 0.4);
  color: var(--soft-white);
}

.active,
.active:hover {
  background-color: var(--soft-black);
  color: var(--soft-white);
  cursor: default;
}
</style>
