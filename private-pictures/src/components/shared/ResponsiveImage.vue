<template>
  <img class="responsive-img" :src="src" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.responsive-img {
  max-width: 100%;
  width: 100%;
}
</style>
