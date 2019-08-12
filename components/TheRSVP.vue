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
        <section id="partySize">
          <label
            class="block mb1"
            for="partyOf"
          >Total number in your party</label>
          <input
            class="field"
            id="partyOf"
            type="number"
            v-model.number="partyOf"
          />
        </section>

        <section
          class="mt3"
          id="guestNames"
        >
          <ol class="list-reset mb0">
            <li
              :key="i"
              class="flex mb2 border p1 rounded"
              v-for="(guest, i) in partyOf"
            >
              <p class="mb0 mr1 guestNum">{{ i + 1 }}</p>
              <div class="mr1">
                <label
                  :for="`guest-${i+1}-first-name`"
                  class="vertical-align-unset"
                >First name</label>
                <input
                  :id="`guest-${i+1}-first-name`"
                  class="col-12 field"
                  type="text"
                />
              </div>
              <div>
                <label
                  :for="`guest-${i+1}-last-name`"
                  class="vertical-align-unset"
                >Last name</label>
                <input
                  :id="`guest-${i+1}-last-name`"
                  class="col-12 field"
                  type="text"
                />
              </div>
            </li>
          </ol>
        </section>

        <section
          class="mt3"
          id="dietaryRestrictions"
        >
          <label
            class="block mb1"
            for="dietary"
          >Please list dietary restrictions if any</label>
          <textarea
            class="field col-12"
            id="dietary"
            name="dietary"
            rows="3"
          ></textarea>
        </section>
        <button class="mt3 btn btn-outline">Submit</button>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      partyOf: null
    };
  }
};
</script>

<style scoped>
input,
textarea {
  border-color: var(--soft-black);
}

input[type="number"] {
  width: 6rem;
}

.guestNum {
  vertical-align: middle;
}

.vertical-align-unset {
  vertical-align: baseline;
}
</style>