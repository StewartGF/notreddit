<template>
  <div id="app" class="light">
    <top-nav-bar />
    <div class="container">
      <h1>r/News</h1>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
        <path
          fill-opacity="1"
          d="M0,192L80,186.7C160,181,320,171,480,144C640,117,800,75,960,53.3C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
    <footer-info />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import FooterInfo from "./components/FooterInfo.vue";

export default {
  name: "App",

  components: {
    TopNavBar,
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
  height: 100vh;
  min-width: 100vw;
  transition: background 0.35s ease-in-out;
  position: relative;
}
.wave {
  fill: #f8ce37;
  z-index: 0;
  bottom: 0;
  position: fixed;
  left: 0;
  opacity: 0.75;
}
.dark .wave {
  fill: #f7d8dd;
}
.light {
  background-color: #fffffe;
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
