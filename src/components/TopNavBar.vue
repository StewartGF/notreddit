<template>
  <header>
    <a href="#">
      <i class="fab fa-reddit logo-icon"></i>
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
    <Toggle :mode="mode" class="toggleBtn" />
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
  font-size: 1.65rem;
  text-decoration: none;
  list-style: none;
  padding: 0 5px 0 5px;
}
.logo-text,
.logo-icon {
  text-transform: lowercase;
  font-size: 2.5rem;
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
@media (max-width: 290px) {
  .link-text {
    display: none;
  }
  .navbar a {
    font-size: 13px;
  }
  .nav-item {
    padding-bottom: 5px;
  }
}

@media (max-width: 254px) {
  li,
  a,
  button {
    padding: 0 1px 0 1px;
  }
  header {
    padding: 0 5px 0 5px;
  }
}

@media (max-width: 161px) {
  .toggleBtn {
    display: none;
  }
}
</style>

