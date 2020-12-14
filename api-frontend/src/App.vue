<template>
  <div id="app">
    <ul>
      <li><router-link to="/faults">Faults</router-link></li>
      <li><router-link to="/page2">Page2</router-link></li>
      <li><router-link to="/faults/add">Add Fault</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
