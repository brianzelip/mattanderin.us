<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Honeymoon Fund</h1>

    <p>
      If you know us at all, you know that we&rsquo;ve been living in sin for
      quite some time. That means we don&rsquo;t really need much more than
      we&rsquo;ve already acquired, so we are doing a Honeymoon Fund in lieu of
      gifts! Of course, if you&rsquo;d rather give a gift, that&rsquo;s
      certainly appreciated too.
    </p>

    <p>
      We are going to <a href="https://en.wikipedia.org/wiki/Belize">Belize</a>
      ✈️ 🌴 🎉
    </p>

    <p class="mb3">
      Click the button below if you&rsquo;d like to contribute using PayPal.
    </p>

    <TheHoneymoonFundDonateBtn></TheHoneymoonFundDonateBtn>
  </main>
</template>

<script>
import TheHoneymoonFundDonateBtn from "./TheHoneymoonFundDonateBtn.vue";

export default {
  components: {
    TheHoneymoonFundDonateBtn
  }
};
</script>

<style scoped>
.belize {
  font-size: 1.3rem;
}
@media screen and (min-width: 780px) {
  .belize {
    font-size: 1.5rem;
  }
}
</style>
