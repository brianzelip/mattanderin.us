<template>
  <article>
    <p class="msg">{{ comment.msg }}</p>
    <p class="by pt2 mb0">{{ comment.by }}</p>
    <time :datetime="comment.date">{{ date }}</time>
  </article>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: ["comment"],
  computed: {
    date() {
      return dayjs(this.comment.date).format("MMMM DD, YYYY");
    }
  }
};
</script>

<style scoped>
time {
  display: block;
}
.by,
time {
  text-align: right;
  font-size: 1.125rem;
}
.msg {
  font-size: 1.3rem;
}
@media screen and (min-width: 780px) {
  .by,
  time {
    font-size: 1.25rem;
  }
  .msg {
    font-size: 1.5rem;
  }
}
</style>
