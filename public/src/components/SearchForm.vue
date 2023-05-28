<template>
    <section class="search">
        <div class="w-full max-w-md mx-auto">
            <form v-on:submit.prevent="Search()">
                <div class="mb-4">
                    <label class="block text-gray-900 font-medium mb-1" for="Domain">
                        Domain
                    </label>
                    <input type="text" class="form-control" id="Domain" placeholder="Domain" v-model="Domain" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-900 font-medium mb-1" for="Domain">
                        sort by
                    </label>
                    <input type="text" class="form-control" id="Domain" placeholder="Domain" v-model="sort" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-900 font-medium mb-1" for="NCBI_Superkingdom">
                        NCBI_Superkingdom
                    </label>
                    <input type="text" class="form-control" id="NCBI_Superkingdom" placeholder="NCBI_Superkingdom"
                        v-model="NCBI_Superkingdom" />
                </div>

                <div class="mb-4">
                    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
                        search
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
  
<script>
import axios from "axios";
export default {
    name: "search-comp",
    data() {
        return {
            sort: "",
            NCBI_Superkingdom: "",
            Domain: "",
        };
    },
    methods: {
        Search() {
            this.$emit("search", {
                Domain: this.Domain,
                sort: this.sort,
                NCBI_Superkingdom: this.NCBI_Superkingdom,
            });
        },
        searchAll(value) {
            console.log(value);
            axios
                .get(
                    `http://localhost:8000/human_info/aggregation?domain=${value.Domain}&sort_by=${value.sort}&group_by=${value.NCBI_Superkingdom}`
                )
                .then((res) => {
                    this.list = res.data;
                }).catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
  
<style></style>