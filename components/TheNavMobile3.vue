<template>
  <nav>
    <ul class="list-reset mb0">
      <li
        :key="i"
        v-for="(page, i) in pages"
      >
        <router-link
          :class="{active: page.path === currentPath}"
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
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  z-index: 10;
  background-color: var(--soft-black);
  padding: .5rem;
  margin-right: calc(-50% - 1rem);
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
  background-color: var(--soft-black);
  color: var(--soft-white);
  cursor: default;
}
</style>
