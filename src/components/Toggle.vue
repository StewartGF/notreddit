<template>
  <div class="toggle-wrapper" v-on:click="btnToggle">
    <button class="switch active" id="switch">
      <span>
        <i class="fas fa-sun"></i>
      </span>
      <span>
        <i class="fas fa-moon"></i>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["mode"],
  methods: {
    btnToggle() {
      const btnSwitch = document.querySelector("#switch");
      //cambio en el div app que esta en App.vue la clase, entre dark y light
      document.getElementById("app").classList.toggle("dark");
      document.getElementById("app").classList.toggle("light");
      btnSwitch.classList.toggle("active");
    }
  }
};
</script>

<style lang="css" scoped>
.switch {
  background-color: #343d5b;
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;
}

.switch::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  background: #f1f1f1;
  top: 0;
  left: 0;
  right: unset;
  border-radius: 100px;
  transition: 0.3s ease all;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
}
.switch.active {
  background: #ffd803;
  color: #000;
}

.active::after {
  right: 0;
  left: unset;
}
span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: block;
  background: none;
  color: #fff;
}
</style>