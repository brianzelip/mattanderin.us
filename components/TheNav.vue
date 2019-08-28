<template>
  <nav class="flex justify-center">
    <ul class="list-reset mb0 container flex-auto flex justify-around">
      <li
        :key="i"
        class="col-12 center"
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
  props: ["currentPath"],
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
  mounted() {
    // [sticky header on scroll via](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
    const nav = document.querySelector("nav");
    const navHeight = nav.offsetHeight;
    const navOffsetTop = nav.offsetTop;
    const vm = this;

    function stickyNav() {
      if (window.pageYOffset > navOffsetTop) {
        nav.classList.add("sticky");
        // tell the parent to add bottom margin
        // ps - 23 is a magic number, in fact, 23, 24, and 25 all work
        vm.$emit("add-margin-bottom", navOffsetTop - navHeight + 23);
      } else {
        nav.classList.remove("sticky");
        // tell the parent to reset bottom margin
        vm.$emit("reset-margin-bottom");
      }
    }

    window.onscroll = function() {
      stickyNav();
    };
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
  padding: 1rem 0;
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
