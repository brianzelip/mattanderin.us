<template>
  <main>
    <h1 class="mt0 regular center pageTitle">RSVP</h1>
    <p class="rsvpCopy">
      Kindly respond by Monday, November 11
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

      <section id="respondentName">
        <label
          class="block mb1"
          for="respondent"
        >Your full name</label>
        <input
          class="col-12 field"
          id="respondent"
          required
          type="text"
          v-model="respondent"
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
        id="adults"
        v-if="attending"
      >
        <label
          class="block mb1"
          for="num-adults"
        >Total number of adults age 21+ in your party</label>
        <input
          class="field"
          id="num-adults"
          type="number"
          v-model.number="adults"
        />
      </section>

      <section
        class="mt3"
        id="youth"
        v-if="attending"
      >
        <label
          class="block mb1"
          for="num-youth"
        >Total number of youth age 8 to 20 in your party</label>
        <input
          class="field"
          id="num-youth"
          type="number"
          v-model.number="youth"
        />
      </section>

      <section
        class="mt3"
        id="children"
        v-if="attending"
      >
        <label
          class="block mb1"
          for="num-children"
        >Total number of children younger than 8 in your party</label>
        <input
          class="field"
          id="num-children"
          type="number"
          v-model.number="children"
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
      respondent: "",
      attending: null,
      email: "",
      adults: 0,
      youth: 0,
      children: 0,
      comments: ""
    };
  },
  computed: {
    submissionData() {
      return {
        respondent: this.respondent,
        email: this.email,
        attending: this.attending == true ? "Yes" : "No",
        "total adults": this.adults != null ? this.adults : 0,
        "total youth": this.youth != null ? this.youth : 0,
        "total children": this.children != null ? this.children : 0,
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
  margin-bottom: 1rem;
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
