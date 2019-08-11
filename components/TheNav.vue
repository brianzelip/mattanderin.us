<template>
  <nav class="flex justify-center">
    <ul class="list-reset mb0 container mx-auto flex-auto flex justify-around">
      <li class="col-12 center">
        <a
          class="button"
          href
        >Our Story</a>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >Schedule</a>
      </li>
      <li class="col-12 center">
        <router-link
          class="button"
          href
          to="/location"
        >Location</router-link>
      </li>
      <li class="col-12 center">
        <router-link
          class="button"
          to="/wedding-party"
        >Wedding Party</router-link>
      </li>
      <li class="col-12 center">
        <router-link
          class="button"
          to="/honeymoon"
        >Honeymoon Fund</router-link>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >Slide Show</a>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >RSVP</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
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
  background-color: rgba(0, 0, 0, 0.1);
}

.button {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
}
.button:hover {
  background-color: rgba(51, 34, 34, 0.1);
}
</style>
