<template>
  <div class="footer">
    <ul>
      <li class="footer-item">
        <a href="https://www.github.com/StewartGF" target="_blank">
          <i id="githubIcon" class="fab fa-github"></i>
        </a>
      </li>
      <li class="footer-item">
        <a href="https://www.linkedin.com/in/stewart-granger-flores/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10%;
  padding-right: 20px;
}

.footer-item {
  display: inline-block;
  padding: 0 0 0 10px;
}

.dark .footer a {
  font-size: 3.5rem;
  color: #fffffe;
}
.light .footer a {
  font-size: 3.5rem;
  color: #fffffe;
}

@media (max-width: 650px) {
  .light .footer a {
    font-size: 2rem;
  }
  .dark .footer a {
    font-size: 2rem;
  }
}
@media (max-width: 560px) {
  .light .footer-item {
    display: list-item;
    padding: 0 0 0 10px;
    text-decoration: none;
    list-style-type: none;
  }
  .dark .footer-item {
    display: list-item;
    padding: 0 0 0 10px;
    text-decoration: none;
    list-style-type: none;
  }
}
@media (max-width: 400px) {
  .footer {
    display: none;
  }
}
@media (max-width: 1000px) {
  .dark .footer a {
    color: #e69fa9;
  }
  .light .footer a {
    color: #dc3e04;
  }
}
</style>
