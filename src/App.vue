<template>
  <div id="app" class="light">
    <top-nav-bar />
    <div class="container">
      <h1>r/News</h1>

      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,261.3C640,256,800,224,960,208C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
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
#app {
  height: 100%;
  min-width: 100vw;
  transition: background 0.35s ease-in-out;
  position: relative;
}
.container {
  height: 90vh;
  width: 100vw;
  /* para evitar el header */
  padding-top: 10vh;
}
.wave {
  fill: #ff891b;
  z-index: 0;
  bottom: 0;
  position: fixed;
  left: 0;
  opacity: 0.7;
}
.dark .wave {
  fill: #cc6d64;
}
.light {
  background-color: #e9e9e9;
  color: #111111;
}
.dark {
  background-color: #2e2d42;
  color: white;
}

h1 {
  text-align: center;
}
</style>
