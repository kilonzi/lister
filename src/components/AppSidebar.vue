<template>
  <ul id="sideBar">
    <li>
      <i class="large th icon"></i>
    </li>
    <li>
      <i class="large tasks icon"></i>
    </li>
    <li>
      <i class="large user icon"></i>
    </li>
    <li>
      <i class="large shekel icon"></i>
    </li>
    <li>
      <i class="large settings icon"></i>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding: 0 1.1rem;
  color: white;
  background-color: #4da1ff;
  border-radius: 0.28571429rem;
}
@media only screen and (min-width: 962px) {
  .hidden {
    visibility: visible;
    display: flex;
  }
}
@media only screen and (max-width: 961.999999999px) {
  #sideBar {
    visibility: hidden;
    display: none;
  }
}
</style>