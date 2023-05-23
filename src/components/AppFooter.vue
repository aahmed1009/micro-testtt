<template>
    <footer class="text-gray-600 body-font">
        <div
            class="container px-8 mx-auto py-8 my-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <button @click="RedirectHome()"
                    class="flex title-font font-medium items-center md:justify-start justify-center text-gray-800">
                    <router-link to="/Home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"
                            class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg></router-link>
                    <button @click="RedirectHome()"
                        class="flex items-center mb-4 font-medium text-gray-800 title-font md:mb-0 cur">
                        <span class="ml-3 text-xl">Microbiome</span>
                    </button>
                </button>
                <br />
                <p class="mt-2 text-sm text-gray-500">
                    an aim to characterize the microbes inhabiting human bodies and to elucidate their role in sickness and
                    health.
                </p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">


                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <router-link to="/Whymicrobiome">
                        <h2 class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3">
                            Whymicrobiome
                        </h2>
                    </router-link>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <router-link to="/AppData">
                        <h2 class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3">
                            Data
                        </h2>
                    </router-link>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <router-link to="/AppTeam">
                        <h2 class="title-font font-medium text-gray-900 hover:text-green-700 tracking-widest text-sm mb-3">
                            Team
                        </h2>
                    </router-link>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script>

</script>
  
<style></style>
  