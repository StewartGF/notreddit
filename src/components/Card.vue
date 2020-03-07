<template>
  <div class="card">
    <div class="card-title">
      <h1>
        {{ post.title }}
      </h1>
    </div>
    <div class="card-body">
      <span>Comments : {{ post.num_comments }}| Upvotes : {{ post.ups }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style lang="css" scoped>
.card {
  width: 60%;
  background-color: white;
  display: inline-block;
  padding: 15px 15px 15px 15px;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
  border: 1px solid #f1f1f1;
  margin: 0.3% 1% 0.5% 1%;
  transition: background 0.25s ease-in-out;
  border-radius: 6px;
}
.dark .card {
  color: white;
  border: 1px solid #11111a;
  background-color: #35344b;
}
.dark .card-body {
  color: white;
}
.card-title {
  white-space: pre-line;
  text-align: start;
  overflow: hidden;
  word-wrap: break-word;
}

.card-title h1 {
  font-size: 1.4rem;
}

.card-body {
  font-size: 1rem;
  color: rgb(70, 70, 70);
  white-space: pre-line;
  width: 90%;
  text-align: center;
  overflow: hidden;
}

@media (max-width: 1000px) {
  .card-title h1 {
    font-size: 1.1rem;
  }
}
</style>
