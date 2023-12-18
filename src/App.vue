<template>
  <div>
    <RwvHeader />
    <router-view></router-view>
    <RwvFooter />
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader.vue";
import RwvFooter from "@/components/TheFooter.vue";
import useTheme from "@/theme/use-theme.js";
const { setup } = useTheme();

setup();

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>

<style></style>
