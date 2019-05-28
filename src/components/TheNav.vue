<template>
  <nav class="mt3 container mx-auto">
    <ul class="list-reset flex">
      <li class="flex-auto center">
        <a
          class="block"
          href
        >Schedule</a>
      </li>
      <li class="flex-auto center">
        <a
          class="block"
          href
        >Location</a>
      </li>
      <li class="flex-auto center">
        <a
          class="block"
          href
        >Lodging</a>
      </li>
      <li class="flex-auto center">
        <a
          class="block"
          href
        >Wedding Party</a>
      </li>
      <li class="flex-auto center">
        <a
          class="block"
          href
        >Registry</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    // sticky header on scroll via
    // https://www.w3schools.com/howto/howto_js_sticky_header.asp
    window.onscroll = function() {
      myFunction();
    };

    var nav = document.querySelector("ul");
    var sticky = nav.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
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
  width: 64rem;
}
</style>
