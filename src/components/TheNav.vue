<template>
  <nav class="mt1 flex justify-center">
    <ul class="list-reset container mx-auto flex-auto flex justify-around">
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
        >Wedding Party</a>
      </li>
      <li class="col-12 center">
        <a
          class="button"
          href
        >Registry</a>
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
    const list = document.querySelector("ul");
    const initialListOffsetTop = list.offsetTop;

    function stickyList() {
      if (window.pageYOffset > initialListOffsetTop) {
        list.classList.add("sticky");
      } else {
        list.classList.remove("sticky");
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
  width: 64rem;
  background-color: rgba(0, 0, 0, 0.1);
}

.button {
  display: block;
  padding: 1rem;
  text-decoration: none;
}
.button:hover {
  background-color: rgba(51, 34, 34, 0.1);
}
</style>
