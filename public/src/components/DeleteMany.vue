<template>
  <div class="add">
    <div class="w-full max-w-md mx-auto">
      <form>
        <div class="mb-4">
          <div class="text-lg text-gray-700 px-4 py-2 rounded-md ">
            Select: {{ selected }}
          </div>

          <select v-model="selected"
            class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500">
            <option disabled value="">Please select Key</option>
            <option>_id</option>
            <option>HMP_ID</option>
            <option>GOLD_ID</option>
            <option>Organism_Name</option>
            <option>Domain</option>
            <option>NCBI_Superkingdom</option>
            <option>HMP_Isolation_Body_Site</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-900 font-medium mb-1" :for="selected">
            value
          </label>
          <input type="text"
            class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            :id="selected" :placeholder="selected" v-model="value" />
        </div>

        <button @click.prevent="deleteAll" class="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700">
          Delete All
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: "",
      value: "",
    };
  },
  updated() {
    console.log(this.selected);
    console.log(this.value);
  },

  methods: {
    deleteAll() {
      axios
        .get(
          `http://localhost:8000/human_info/delete_many/?field=${this.selected}&value=${this.value}`
        )
        .then(() => {
          console.log("run");
        })
        .catch(() => {
          console.log("not run");
        });
    },
  },
};
</script>

<style scoped></style>
