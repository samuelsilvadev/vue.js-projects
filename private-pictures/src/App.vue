<template>
  <div id="app">
    <h1 class="title">Private Pictures</h1>
    <ul class="photos-list">
      <li class="photos-list__item" v-for="photo of photos" :key="photo.id">
        <photo-panel :title="photo.title">
          <img :src="photo.url" :alt="photo.title" />
        </photo-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import { BASE_API, PHOTOS_END_POINT } from "./config/api.js";
import PhotoPanel from "./components/shared/PhotoPanel";

export default {
  components: {
    "photo-panel": PhotoPanel
  },
  data() {
    return {
      photos: []
    };
  },
  created() {
    this.$http
      .get(`${BASE_API}${PHOTOS_END_POINT}`)
      .then(response => response.json())
      .then(photos => (this.photos = photos));
  }
};
</script>

<style scoped>
@import "./styles/common.css";

#app {
  max-width: 90vw;
  margin: 0 auto;
  width: 100%;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 30px auto;
}

.photos-list {
  list-style: none;
  text-align: center;
}

.photos-list__item {
  display: inline-block;
  margin-right: 15px;
  width: 200px;
}

.photos-list__item img {
  max-width: 100%;
  width: 100%;
}
</style>
