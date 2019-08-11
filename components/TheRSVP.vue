<template>
  <article class="vh100">
    <div class="container">
      <h1 class="mt0 pt2 center">RSVP</h1>
      <p class="h3 center">You can respond for yourself and others in your party.</p>
      <form
        class="col-5 mx-auto p2 border rounded"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        name="rsvp"
      >
        <section class="col-6">
          <label
            class="block mb1"
            for="partyOf"
          >Total number in your party</label>
          <input
            class="field"
            id="partyOf"
            type="number"
          />
        </section>
      </form>
    </div>
  </article>
</template>

<style scoped>
input {
  border-color: var(--soft-black);
}

input[type="number"] {
  width: 6rem;
}
</style>