<template>
  <header>
    <a href="#">
      <i class="fab fa-reddit"></i>
      <span class="link-text logo-text">NotReddit</span>
    </a>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fab fa-hotjar"></i>
            <span class="link-text">Hot</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="far fa-star-half"></i>
            <span class="link-text">New</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-arrow-up"></i>
            <span class="link-text">Top</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-chart-line"></i>
            <span class="link-text">Rising</span>
          </a>
        </li>
      </ul>
    </nav>
    <Toggle :mode="mode" />
    <!-- <button class="switch" id="switch">
      <span>
        <i class="fas fa-sun"></i>
      </span>
      <span>
        <i class="fas fa-moon"></i>
      </span>
    </button>-->
  </header>
</template>

<script>
import Toggle from "@/components/Toggle.vue";
export default {
  props: ["mode"],
  components: {
    Toggle
  }
};
</script>

<style lang="css" scoped>
li,
a,
button {
  font-weight: 500;
  color: #ffcf1b;
  font-size: 22px;
  text-decoration: none;
  list-style: none;
  padding: 0 5px 0 5px;
}
.logo-text {
  text-transform: lowercase;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 5%;
  box-sizing: border-box;
  padding: 0 15px 0 15px;
}
.dark a,
li,
button {
  color: thistle;
}
.dark .nav-link:hover {
  color: rgb(153, 129, 153);
}

.nav-item {
  display: inline-block;
}

.nav-link {
  transition: all 0.3s ease 0s;
}

.nav-link:hover {
  color: #d4ad20;
}

@media (max-width: 650px) {
  .link-text {
    display: none;
  }
}
</style>

