<template>
  <div id="app">
    <top-nav-bar />
    <div class="container">
      <Card />
    </div>
    <footer-info />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import FooterInfo from "./components/FooterInfo.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",

  components: {
    TopNavBar,
    Card,
    FooterInfo
  },
  methods: {}
};
</script>

<style>
:root {
  font-size: 12px;
}
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Nunito";
}
html,
body {
  transition: background 0.35s ease-in-out;
  height: 100%;
}
#app {
  /* esto soluciona el problema con los dobles scrollbar y que nada quepa dentro del 100% body y html */
  max-height: 100%;
  /* esto soluciona el problema con los dobles scrollbar y que nada quepa dentro del 100% body y html */
  min-width: 100%;
  position: relative;
}
.container {
  height: 100%;
  width: 100%;
  /* para evitar el header */
  padding-top: 70px;
  /* esto hace que el scroll se vea por debajo */
  overflow: auto;
  /* esto hace que el scroll se vea por debajo */
}
.light {
  background-color: #fffffe;
  color: #111111;
}
.dark {
  background-color: #2e2d42;
  color: white;
}
</style>
