<template>
  <main>
    <h1 class="mt0 regular center pageTitle">RSVP</h1>
    <p class="rsvpCopy">We can&rsquo;t wait to celebrate with you!</p>
    <p class="rsvpCopy">
      Kindly respond by November 11
      <span class="sup">th</span> for yourself and others in your party.
    </p>
    <p class="rsvpCopy">We&rsquo;ll email you a copy of your response.</p>
    <div class="sincerely">
      <span class="heart">❤️</span>
      <p class="center Italianno signature">Erin &amp; Matt</p>
    </div>
    <form
      class="mx-auto p2 border rounded"
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

      <section id="responderName">
        <label
          class="block mb1"
          for="responder"
        >Your name</label>
        <input
          class="col-12 field"
          id="responder"
          required
          type="text"
          v-model="responder"
        />
      </section>

      <section
        class="mt3"
        id="userEmail"
      >
        <label
          class="block mb1"
          for="email"
        >Your email address</label>
        <input
          class="col-12 field"
          id="email"
          required
          type="email"
          v-model.trim="email"
        />
      </section>

      <section
        class="mt3"
        id="attendance"
      >
        <p class="block mb1">Will you be attending?</p>
        <div class="mb2">
          <label for="yay">Yes</label>
          <input
            :value="true"
            id="yay"
            name="attending"
            type="radio"
            v-model="attending"
          />
        </div>
        <div>
          <label for="nay">No</label>
          <input
            :value="false"
            id="nay"
            name="attending"
            type="radio"
            v-model="attending"
          />
        </div>
      </section>

      <section
        class="mt3"
        id="partySize"
      >
        <label
          class="block mb1"
          for="partyOf"
        >Number of people in your party</label>
        <input
          class="field"
          id="partyOf"
          required
          type="number"
          v-model.number="partyOf"
        />
      </section>

      <section
        class="mt3"
        id="otherComments"
        v-if="attending"
      >
        <label
          class="block mb1"
          for="comments"
        >Other comments</label>
        <textarea
          class="field col-12"
          id="comments"
          name="comments"
          rows="3"
          v-model="comments"
        ></textarea>
      </section>

      <button
        :disabled="attending == null"
        class="mt3 btn btn-primary regular"
        type="submit"
      >Submit</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      responder: "",
      attending: null,
      email: "",
      adults: 0,
      youth: 0,
      children: 0,
      partyOf: null,
      comments: ""
    };
  },
  computed: {
    submissionData() {
      return {
        "user email": this.email,
        "group size": this.partyOf,
        "other comments": this.comments
      };
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };

      axios
        .post(
          "/",
          this.encode({
            "form-name": "RSVP",
            ...this.submissionData
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push("/rsvp/success");
        })
        .catch(() => {
          this.$router.push("/rsvp/fail");
        });
    }
  }
};
</script>

<style scoped>
.rsvpCopy {
  text-align: center;
  font-size: 1.3rem;
}
@media screen and (min-width: 780px) {
  .rsvpCopy {
    font-size: 1.5rem;
  }
}

.sup {
  font-size: 0.83em;
  vertical-align: super;
  margin-left: -0.45rem;
}

.sincerely {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}
.heart {
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 1.875rem;
}
.signature {
  margin: 0;
  font-size: 2.75rem;
}
@media screen and (min-width: 780px) {
  .heart {
    font-size: 2rem;
  }
  .signature {
    font-size: 3rem;
  }
}
@media screen and (min-width: 960px) {
  .heart {
    font-size: 2.25rem;
  }
  .signature {
    font-size: 3.5rem;
  }
}

form {
  width: 100%;
}
@media screen and (min-width: 480px) {
  form {
    width: 75%;
  }
}

input,
textarea {
  border-color: var(--soft-black);
}

input[type="number"] {
  width: 6rem;
}

.vertical-align-unset {
  vertical-align: baseline;
}

.btn-primary {
  color: var(--soft-white);
  background-color: var(--soft-black);
  border-radius: 3px;
}

.btn-primary:disabled {
  cursor: not-allowed;
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
