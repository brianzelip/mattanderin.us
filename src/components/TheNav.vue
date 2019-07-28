<template>
  <nav class="mt1 flex justify-center">
    <ul class="list-reset container mx-auto flex-auto flex justify-around">
      <li
        class="col-12 center"
        v-if="listIsSticky"
      >
        <a
          class="button bold"
          href="/"
        >Erin &amp; Matt!</a>
      </li>
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
  data() {
    return {
      listIsSticky: false
    };
  },
  mounted() {
    const vm = this;

    const list = document.querySelector("ul");
    const initialListOffsetTop = list.offsetTop;

    function stickyList() {
      if (window.pageYOffset > initialListOffsetTop) {
        vm.listIsSticky = true;
        list.classList.add("sticky");
      } else {
        vm.listIsSticky = false;
        list.classList.remove("sticky");
      }
    }

    window.onscroll = function() {
      stickyList();
    };
    // [sticky header on scroll via](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
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
