<template>
  <div>
    <div class="cards-container">
      <h1 class="actual-subreddit">
        r/{{ this.$store.state.actualSubreddit }}
      </h1>
      <Card v-for="post in redditPosts" :key="post.id" :post="post.data" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapState } from "vuex";

export default {
  components: {
    Card
  },
  computed: {
    ...mapState(["redditPosts"])
  },
  mounted() {
    this.$store.dispatch("getPosts", {
      subreddit: this.$store.state.actualSubreddit,
      sort: this.$store.state.sort
    });
  }
};
</script>

<style lang="css" scoped>
.actual-subreddit {
  font-size: 2rem;
}
.cards-container {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: auto;
}
@media (max-width: 290px) {
  .actual-subreddit {
    font-size: 1.5rem;
  }
}
@media (max-width: 200px) {
  .actual-subreddit {
    font-size: 1rem;
  }
}
</style>
