<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Honeymoon Fund</h1>

    <figure>
      <img
        alt="A beach on Caye Caulker, a small island off the coast of Belize"
        src="../img/CayeCaulker.jpg"
        title="Caye Caulker, a small island off the coast of Belize where we'll be staying"
      />
    </figure>

    <p>
      If you know us at all, you know that we&rsquo;ve been living in sin for
      quite some time. That means we don&rsquo;t really need much more than
      we&rsquo;ve already acquired, so we are doing a Honeymoon Fund in lieu of
      gifts! Of course, if you&rsquo;d rather give a gift, that&rsquo;s
      certainly appreciated too.
    </p>

    <p>
      We are going to
      <a href="https://en.wikipedia.org/wiki/Caye_Caulker">Caye Caulker</a>, a small island in the Caribbean Sea off the coast of Belize.
    </p>

    <p class="mb3">Click the button below if you&rsquo;d like to contribute using PayPal.</p>

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
figure {
  margin: 0 0 1rem 0;
}
img {
  border: 2px solid var(--soft-black);
}
@media screen and (min-width: 960px) {
  img {
    border-width: 4px;
  }
}
</style>
