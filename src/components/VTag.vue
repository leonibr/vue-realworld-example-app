<template>
  <router-link :to="homeRoute" :class="className"
    ><span v-text="name"></span
  ></router-link>
</template>

<script>
export default {
  name: "RwvTag",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "tag-pill tag-default"
    }
  },
  computed: {
    homeRoute() {
      return { name: "home-tag", params: { tag: this.name } };
    }
  }
};
</script>
