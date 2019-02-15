<template>
  <button class="btn" :class="dinamicStyle" :type="type">{{ text }}</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonStyle: String
  },
  computed: {
    dinamicStyle() {
      switch (this.buttonStyle) {
        case "default":
          return "btn-default";
        case "danger":
          return "btn-danger";
        default:
          return "btn-default";
      }
    }
  }
};
</script>

<style scoped>
.btn {
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  padding: 10px;
  margin: 10px;
}

.btn-default {
  background-color: lightseagreen;
}

.btn-danger {
  background-color: firebrick;
}
</style>
