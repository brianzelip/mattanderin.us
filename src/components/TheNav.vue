<template>
  <nav class="mt3 flex justify-center">
    <ul class="list-reset container mx-auto flex-auto flex justify-around">
      <li class="col-12 center">
        <a
          class="button"
          href="/"
        >Erin &amp; Matt!</a>
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
