<template>
  <nav class="flex justify-center">
    <ul class="list-reset mb0">
      <li
        :key="i"
        v-for="(page, i) in pages"
      >
        <router-link
          :class="{'soft-black': color === 'black', 'soft-white': color === 'white', active: page.path === currentPath}"
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
        { path: "/slideshow", text: "Slide Show of Love" },
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
/* sticky header on scroll via
   https://www.w3schools.com/howto/howto_js_sticky_header.asp */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--soft-white);
  z-index: 10;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
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
