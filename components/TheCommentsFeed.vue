<template>
  <ul class="list-reset">
    <li
      :key="i"
      v-for="(comment, i) in comments"
    >
      <Comment :comment="comment"></Comment>
    </li>
  </ul>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  components: { Comment },
  data() {
    return {
      comments: [
        {
          msg:
            "I want to place some SVG images before some selected elements. I am using JQuery but that is irrelevant. I would like to have the :before element to be as:",
          by: "Brian Zelip and family",
          date: "2020-01-08T14:34:57.380Z"
        },
        {
          msg:
            "I want to place some SVG images before some selected elements. I am using JQuery but that is irrelevant. I would like to have the :before element to be as:",
          by: "Brian Zelip and family",
          date: "2019-12-26T15:37:06.201Z"
        },
        {
          msg:
            "I want to place some SVG images before some selected elements. I am using JQuery but that is irrelevant. I would like to have the :before element to be as:",
          by: "Brian Zelip and family",
          date: "2019-12-26T15:30:57.223Z"
        },
        {
          msg:
            "I want to place some SVG images before some selected elements. I am using JQuery but that is irrelevant. I would like to have the :before element to be as:",
          by: "Brian Zelip and family",
          date: "2019-12-26T15:37:06.201Z"
        }
      ]
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
</style>
