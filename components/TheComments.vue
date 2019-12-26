<template>
  <main>
    <h1 class="mt0 regular center pageTitle">Comments of Love</h1>
    <p class="rsvpCopy">
      Thanks so much for coming to our wedding!
    </p>
    <p class="rsvpCopy">
      Leave a comment for the newlyweds by using the form below.
    </p>
    <div class="sincerely">
      <span class="heart">❤️</span>
      <p class="center Italianno signature">Erin &amp; Matt</p>
    </div>
    <form
      class="mx-auto p2 border rounded"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="Comments"
      v-on:submit.prevent="handleSubmit"
    >
      <input name="form-name" type="hidden" value="Comments" />

      <section id="respondentName">
        <label class="block mb1" for="respondent">Your name or party</label>
        <input
          class="col-12 field"
          id="respondent"
          required
          type="text"
          v-model="respondent"
        />
      </section>

      <section class="mt3" id="comments">
        <label class="block mb1" for="comments">Comments</label>
        <textarea
          class="field col-12"
          id="comments"
          name="comments"
          required
          rows="3"
          v-model="comments"
        ></textarea>
      </section>

      <button class="mt3 btn btn-primary regular" type="submit">
        Submit
      </button>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      respondent: "",
      comments: ""
    };
  },
  computed: {
    submissionData() {
      return {
        respondent: this.respondent,
        comments: this.comments
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
            "form-name": "Comments",
            ...this.submissionData
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push("/comments/success");
        })
        .catch(() => {
          this.$router.push("/comments/fail");
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
