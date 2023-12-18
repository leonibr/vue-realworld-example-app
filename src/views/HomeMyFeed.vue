<template>
  <div class="home-my-feed"><RwvArticleList type="feed" /></div>
</template>

<script>
import RwvArticleList from "@/components/ArticleList.vue";

export default {
  name: "RwvHomeMyFeed",
  components: {
    RwvArticleList
  }
};
</script>
