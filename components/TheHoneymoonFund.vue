<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Honeymoon Fund</h1>

    <p class="mb2 belize">
      We are going to
      <a href="https://en.wikipedia.org/wiki/Belize">Belize</a> 🎉
    </p>

    <p>If you know us at all, you know that we&rsquo;ve been living in sin for quite some time. That means we don&rsquo;t really need much more than we&rsquo;ve already acquired, so we are doing a Honeymoon Fund in lieu of gifts! Of course, if you&rsquo;d rather give a gift, that&rsquo;s certainly appreciated too.</p>

    <p class="mb3">Click the PayPal button below if you'd like to contribute online.</p>

    <TheHoneyMoonFundDonateBtn></TheHoneyMoonFundDonateBtn>
  </main>
</template>

<script>
import TheHoneyMoonFundDonateBtn from "./TheHoneyMoonFundDonateBtn.vue";

export default {
  components: {
    TheHoneyMoonFundDonateBtn
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