<template>
  <div class="header-container">
    <a href="#">
      <i class="fab fa-reddit logo-icon"></i>
      <span class="link-text logo-text" style="margin-left:2px">NotReddit</span>
    </a>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link" @click="setSort('hot')">
            <i class="fab fa-hotjar"></i>
            <span class="link-text">Hot</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="setSort('new')">
            <i class="far fa-star-half"></i>
            <span class="link-text">New</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="setSort('top')">
            <i class="fas fa-arrow-up"></i>
            <span class="link-text">Top</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="setSort('rising')">
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
  },
  methods: {
    setSort(payload) {
      this.$store.dispatch("setSort", {
        sort: payload
      });
      this.$store.dispatch("getPosts", {
        subreddit: this.$store.state.actualSubreddit,
        sort: this.$store.state.sort
      });
    }
  }
};
</script>

<style lang="css" scoped>
li,
a,
button {
  font-weight: 400;
  color: #dc3e04;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  padding: 0 5px 0 5px;
}
.dark a,
li,
button {
  color: #e69fa9;
}
.logo-text {
  text-transform: lowercase;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1.5px;
}
.logo-icon {
  font-size: 3.5rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  padding: 0 60px 0 20px;
  position: fixed;
  background-color: #fffffe;
  transition: background 0.25s ease-in-out;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);
}

.dark .header-container {
  background-color: #2e2d42;
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

@media (max-width: 700px) {
  header {
    padding: 0 20px 0 20px;
  }
  .logo-text {
    font-size: 1.7rem;
  }
  .logo-icon {
    font-size: 2.5rem;
  }
  .toggleBtn {
    transform: scale(0.8);
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
@media (max-width: 380px) {
  .link-text {
    display: none;
  }
  .navbar a {
    font-size: 13px;
  }
  .nav-item {
    padding-bottom: 5px;
  }
  .header-container {
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
