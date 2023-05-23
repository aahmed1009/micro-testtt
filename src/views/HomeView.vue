<template>
  <div class="home">
    <AppTeam />
    <!-- <ShowRecords /> -->
  </div>
</template>

<script>
// @ is an alias to /src

import AppTeam from "@/components/AppTeam.vue";
// import ShowRecords from "@/components/ShowRecords.vue";

export default {
  name: "HomeView",
  components: {
    // ShowRecords,
    AppTeam,
  },
};
</script>
