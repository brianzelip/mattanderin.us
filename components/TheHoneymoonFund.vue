<template>
  <main class="container">
    <h1 class="mt0 regular center pageTitle">Honeymoon Fund</h1>
    <p>If you know us at all, you know that we&rsquo;ve been living in sin for quite some time. That means we don&rsquo;t really need much more than we&rsquo;ve already acquired, so we are doing a Honeymoon Fund in lieu of gifts! Of course, if you&rsquo;d rather give a gift, that&rsquo;s certainly appreciated too.</p>

    <p>If you want to contribute to it here, that would be awesome. We are going to Belize!</p>

    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input
        name="cmd"
        type="hidden"
        value="_s-xclick"
      />
      <input
        name="hosted_button_id"
        type="hidden"
        value="N6CRT47RPSWGS"
      />
      <input
        alt="Donate with PayPal button"
        border="0"
        class="paypal"
        name="submit"
        placeholder="Donate"
        title="PayPal - The safer, easier way to pay online!"
        type="image"
      />
      <img
        alt
        border="0"
        height="1"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
      />
    </form>
  </main>
</template>

<style scoped>
.paypal {
  background: yellow;
}
</style>