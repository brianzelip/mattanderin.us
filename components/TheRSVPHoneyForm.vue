<template>
  <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="RSVP"
      hidden
    >
      <input name="form-name" type="hidden" value="RSVP" />
      <input type="email" name="user email" />
      <input type="number" name="group size" />
      <input type="text" name="guests" />
      <textarea name="dietary concerns"></textarea>
      <textarea name="other comments"></textarea>
    </form>
</template>
