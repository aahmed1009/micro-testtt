<template>
  <div class="home">


    <!-- <ShowRecords /> -->
    <AppFeatures />
    <AppStats />
  </div>
</template>

<script>
// @ is an alias to /src

import AppStats from "@/components/AppStats.vue";
import AppFeatures from "@/components/AppFeatures.vue";
// import ShowRecords from "@/components/ShowRecords.vue";

export default {
  name: "HomeView",
  components: {
    // ShowRecords,
    AppFeatures,
    AppStats
  },
};
</script>
