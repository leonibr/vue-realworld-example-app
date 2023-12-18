<template>
  <router-link :to="homeRoute" :class="className">
    <div v-text="name"></div>
  </router-link>
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
    homeRoute: () => ({ name: "home-tag", params: { tag: name } })
  }
};
</script>
