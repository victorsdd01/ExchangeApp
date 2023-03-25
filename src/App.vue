<template>
  <div class="app-container">
    <Header />
    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    Header: defineAsyncComponent(() =>
      import("@/components/header/Header.vue")
    ),
  },
};
</script>

<style scoped>
.app-container {
  height: 100vh;
}
</style>
