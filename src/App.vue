<template>
  <div id="app">
    <top-nav-bar />
    <div class="container">
      <Card />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
      <path
        fill-opacity="1"
        d="M0,320L80,309.3C160,299,320,277,480,256C640,235,800,213,960,197.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
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
  transition: background 0.25s ease-in-out;
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
  /* para evitar el header */
  padding-top: 70px;
  /* esto hace que el scroll se vea por debajo */
  overflow: auto;
  /* esto hace que el scroll se vea por debajo */
}
.wave {
  position: fixed;
  bottom: 0;
  fill: #ffaf1b;
  opacity: 0.6;
  z-index: -1;
}
.dark .wave {
  position: fixed;
  bottom: 0;
  fill: #eebbc3;
  opacity: 0.6;
  z-index: -1;
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
