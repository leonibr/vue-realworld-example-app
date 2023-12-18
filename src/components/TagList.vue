<template>
  <ul class="tag-list">
    <li
      v-for="(tag, index) of tags"
      :key="index"
      class="tag-default tag-pill tag-outline"
    >
      <span v-text="tag" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TagList",
  props: {
    tags: Array
  }
};
</script>
