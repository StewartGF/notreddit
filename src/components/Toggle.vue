<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input type="checkbox" :checked="(mode === 'dark') ? 'checked' : false " />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["mode"]
};
</script>

<style lang="css" scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: #2e2d42;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2e2d42;
}

input:checked + .toggler:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

.toggler.round {
  border-radius: 22px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>