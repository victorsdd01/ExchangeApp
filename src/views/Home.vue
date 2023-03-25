<template>
  <div>
    <Table :assets="assets" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import api from "@/api";
export default {
  name: "home-view",
  components: {
    Table: defineAsyncComponent(() => import("@/components/table/Table.vue")),
  },
  data: () => {
    return {
      assets: [],
    };
  },

  created() {
    api.getAssets().then((data) => (this.assets = data));
    console.log(this.assets);
  },
};
</script>

<style scoped></style>
