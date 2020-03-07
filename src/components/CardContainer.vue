<template>
  <div>
    <div class="cards-container">
      <h1 class="actual-subreddit">r/News</h1>
      <Card v-for="post in posts" :key="post.id" :post="post.data" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card
  },
  computed: {
    posts() {
      return this.$store.state.redditPosts;
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
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
</style>
