<template>
  <section class="photo-panel">
    <h2 class="photo-panel__title" v-on:dblclick="visible = !visible">
      {{ title }}
    </h2>
    <div v-show="visible">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
.photo-panel {
  border: solid 2px grey;
  box-shadow: 5px 5px 10px grey;
  display: inline-block;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  vertical-align: top;
  width: 100%;
}

.photo-panel__title {
  background-color: lightblue;
  border-bottom: 2px solid;
  cursor: pointer;
  margin: 0 0 15px 0;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
}
</style>
