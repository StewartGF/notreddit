<template>
  <div id="app" :class="mode">
    <top-nav-bar :mode="mode" />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";

export default {
  name: "App",

  data() {
    return {
      mode: "light"
    };
  },
  components: {
    TopNavBar
  },
  methods: {}
};
</script>

<style>
:root {
  font-size: 16px;
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
}

.light {
  background-color: #f3f3f3;
  color: #111111;
}
.dark {
  background-color: #2e2d42;
  color: white;
}
</style>
