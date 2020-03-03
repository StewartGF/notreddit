<template>
  <div class="cards-container">
    <h1>r/News</h1>

    <div class="card">
      <div class="card-title">
        <h1>Propiedades Computadas y Observadores</h1>
      </div>
      <div class="card-body">
        <span>Comments : | Upvotes :</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <h1>Propiedades Computadas y Observadores</h1>
      </div>
      <div class="card-body">
        <span>Comments : | Upvotes :</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <h1>Propiedades Computadas y Observadores</h1>
      </div>
      <div class="card-body">
        <span>Comments : | Upvotes :</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <h1>Propiedades Computadas y Observadores</h1>
      </div>
      <div class="card-body">
        <span>Comments : | Upvotes :</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <h1>Propiedades Computadas y Observadores</h1>
      </div>
      <div class="card-body">
        <span>Comments : | Upvotes :</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <h1>Propiedades Computadas y Observadores</h1>
      </div>
      <div class="card-body">
        <span>Comments : | Upvotes :</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.cards-container {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  position: relative;
  box-sizing: border-box;
}

.card {
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
  height: 200px;
  border: thin solid #f1f1f1;
  margin: 1% 1% 1% 1%;
  border-radius: 6px;
}
.dark .card {
  color: black;
}
.card-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
  text-align: center;
}

.card-body {
  font-size: 12px;
  color: rgb(70, 70, 70);
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
  text-align: center;
  overflow: hidden;
}
</style>