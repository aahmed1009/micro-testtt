<template>
  <div class="Header">
    <section class="header">
      <div data-v-2974e96a="" class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-0">
          <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <router-link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="2" class="w-10 h-10 p-2 text-white bg-teal-500 rounded-full"
                  viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg></router-link>
              <router-link to="/">
                <button class="flex items-center mb-4 font-medium text-gray-800 title-font md:mb-0 cur">
                  <span class="ml-3 text-xl">Microbiome</span>
                </button>
              </router-link>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
              <button type="button" aria-expanded="false"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <span class="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  aria-hidden="true" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                  </path>
                </svg>
              </button>
            </div>
            <div class="hidden md:flex md:space-x-6 items-center justify-end">
              <button class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700">
                <router-link :to="{
                  name: 'home',
                }">Home</router-link>
              </button>
              <button class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700">
                <router-link :to="{
                  name: 'ShowRecords',
                }">Data</router-link>
              </button>

              <router-link :to="{
                name: 'AppTeam',
              }" class="text-gray-800 text-sm font-semibold leading-5 hover:text-green-700">
                Team
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    // RedirectHome() {
    //   this.$router.push("/");
    // },

  },
};
</script>
