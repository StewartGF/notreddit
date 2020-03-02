<template>
  <div class="footer">
    <ul>
      <li class="footer-item">
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li class="footer-item">
        <a href="#">
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
  width: 100vw;
  height: 10vh;
  padding-right: 50px;
}

.footer-item {
  display: inline-block;
  padding: 0 15px 0 15px;
}

.footer a {
  font-size: 3.5rem;
  color: white;
}

@media (max-width: 335px) {
  .footer {
    height: 5vh;
  }
  .footer a {
    font-size: 2rem;
    color: white;
  }
}

@media (max-width: 185px) {
  .footer a {
    font-size: 2rem;
    color: #2e2d42;
  }
  .dark .footer a {
    font-size: 2rem;
    color: #fffffe;
  }
}
@media (max-width: 650px) {
  .footer a {
    font-size: 2rem;
    color: #2e2d42;
  }
  .dark .footer a {
    font-size: 2rem;
    color: #fffffe;
  }
}

@media (max-width: 110px) {
  .footer a {
    font-size: 1rem;
    color: #2e2d42;
  }
  .dark .footer a {
    font-size: 1rem;
    color: #fffffe;
  }
}
</style>