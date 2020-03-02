<template>
  <div class="header-container">
    <a href="#">
      <i class="fab fa-reddit logo-icon"></i>
      <span class="link-text logo-text" style="margin-left:2px">NotReddit</span>
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
  </div>
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
  color: #ffaf1b;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  padding: 0 5px 0 5px;
}
.logo-text,
.logo-icon {
  text-transform: lowercase;
  font-size: 2.5rem;
  font-weight: 700;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  box-sizing: border-box;
  padding: 0 100px 0 20px;
  position: fixed;
  background-color: #e9e9e9;
  z-index: 9;
}

.dark .header-container {
  background-color: #2e2d42;
}

.dark a,
li,
button {
  color: #ed7268;
  /* color: #eebbc3; */
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

@media (max-width: 651px) {
  .link-text {
    display: none;
  }
}

@media (max-width: 745px) {
  header {
    padding: 0 20px 0 20px;
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
@media (max-width: 335px) {
  .link-text {
    display: none;
  }
  .navbar a {
    font-size: 13px;
  }
  .nav-item {
    padding-bottom: 5px;
  }
  header {
    padding: 0 15px 0 15px;
  }
}

@media (max-width: 260px) {
  li,
  a,
  button {
    padding: 0 1px 0 1px;
  }
  header {
    padding: 0 5px 0 5px;
  }
}

@media (max-width: 171px) {
  .toggleBtn {
    display: none;
  }
  li,
  a,
  button {
    padding: 0 3px 0 0;
  }
}
</style>

