<template>
  <div id="app">
    <navigation :routes="routes" />
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/menu/Menu";

export default {
  components: {
    navigation: Menu
  },
  data() {
    return {
      routes
    };
  }
};
</script>

<style>
@import "./styles/common.css";

#app {
  max-width: 90vw;
  margin: 0 auto;
  width: 100%;
}
</style>
