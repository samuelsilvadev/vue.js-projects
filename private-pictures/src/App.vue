<template>
  <div id="app">
    <nav>
      <ul>
        <li v-for="route of routes" :key="route.path">
          <router-link :to="route.path ? route.path : '/'">{{
            route.title
          }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";

export default {
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
