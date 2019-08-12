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
        name="RSVP"
        v-on:submit.prevent="handleSubmit"
      >
        <input
          name="form-name"
          type="hidden"
          value="RSVP"
        />
        <section id="partySize">
          <label
            class="block mb1"
            for="partyOf"
          >Number of people in your party</label>
          <input
            class="field"
            id="partyOf"
            type="number"
            v-model.number="partyOf"
            required
          />
        </section>

        <section
          class="mt3"
          id="guestNames"
          v-if="partyOf > 0"
        >
          <ol class="list-reset mb0">
            <li
              :key="i"
              class="flex mb2 border p1 rounded"
              v-for="(guest, i) in partyOf"
            >
              <p class="mb0 mr1 guestNum">{{ i + 1 }}</p>
              <div class="col-12">
                <label
                  :for="`guest-${i+1}`"
                  class="vertical-align-unset"
                >Full name</label>
                <input
                  :id="`guest-${i+1}`"
                  class="col-12 field"
                  type="text"
                  v-on:input="editGuest"
                  required
                />
              </div>
            </li>
          </ol>
        </section>

        <section
          class="mt3"
          id="dietaryRestrictions"
          v-if="partyOf > 0"
        >
          <label
            class="block mb1"
            for="dietary"
          >Please list any dietary restrictions</label>
          <textarea
            class="field col-12"
            id="dietary"
            name="dietary"
            rows="3"
            v-model="dietary"
          ></textarea>
        </section>

        <section
          class="mt3"
          id="otherComments"
          v-if="partyOf > 0"
        >
          <label
            class="block mb1"
            for="comments"
          >Any other comments?</label>
          <textarea
            class="field col-12"
            id="comments"
            name="comments"
            rows="3"
            v-model="comments"
          ></textarea>
        </section>
        <button
          class="mt3 btn btn-primary regular"
          type="submit"
          v-if="partyOf > 0"
        >Submit</button>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      partyOf: null,
      guests: [],
      dietary: '',
      comments: ''
    };
  },
  methods: {
    editGuest(e) {
      const idExists = this.guests.findIndex(guest => guest.id === e.target.id ) > -1;

      if (!idExists){
        this.$set(this.guests, this.guests.length, { id: `${e.target.id}`, name: `${e.target.value}` });
      } else {
        this.$set(this.guests[this.guests.findIndex(guest => guest.id === e.target.id)], 'name', e.target.value)
      }
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    }
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

.btn-primary {
  color: var(--soft-white);
  background-color: var(--soft-black);
  border-radius: 3px;
}

.btn-primary:hover {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.0625);
}

.btn-primary:active {
  box-shadow: inset 0 0 0 20rem rgba(0, 0, 0, 0.125),
    inset 0 3px 4px 0 rgba(0, 0, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.125);
}

.field:invalid {
  border-color: var(--soft-black);
}
</style>
