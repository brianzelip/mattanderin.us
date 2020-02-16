<template>
  <ul
    class="list-reset"
    id="feed"
    v-if="comments.length > 0"
  >
    <li
      :key="i"
      v-for="(comment, i) in comments"
    >
      <Comment :comment="comment"></Comment>
    </li>
  </ul>
</template>

<script>
import comments from "../data/comments.json";
import Comment from "./Comment.vue";

export default {
  components: { Comment },
  data() {
    return {
      comments
    };
  }
};
</script>

<style scoped>
li::after {
  content: "";
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
  background-image: url("../img/divider.svg");
  background-size: 100px 100px;
  height: 100px;
  width: 100px;
}
@media screen and (min-width: 780px) {
  li::after {
    background-size: 110px 110px;
    height: 110px;
    width: 110px;
  }
}
li:last-of-type::after {
  display: none;
}
</style>
