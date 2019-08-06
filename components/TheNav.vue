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
        <a
          class="button"
          href
        >Location</a>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >Lodging</a>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >Bridal Party</a>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >Honeymoon Fund</a>
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
    const initialListOffsetTop = nav.offsetTop;

    function stickyList() {
      if (window.pageYOffset > initialListOffsetTop) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    }

    window.onscroll = function() {
      stickyList();
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
