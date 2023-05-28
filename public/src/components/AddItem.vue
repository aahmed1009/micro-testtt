<template>
  <div class="add flex flex-col max-w-md mx-auto">
    <div class="my-4">
      <h2 class="text-lg text-gray-900 font-semibold">Add Record</h2>
    </div>
    <form v-on:submit.prevent="addForm">
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="_id">
          _id
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="_id" placeholder="_id" v-model="form._id" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="HMP_ID">
          HMP_ID
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="HMP_ID" placeholder="HMP_ID" v-model="form.HMP_ID" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="GOLD_ID">
          GOLD_ID
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="GOLD_ID" placeholder="GOLD_ID" v-model="form.GOLD_ID" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="Organism_Name">
          Organism_Name
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="Organism_Name" placeholder="Organism_Name" v-model="form.Organism_Name" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="Domain">
          Domain
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="Domain" placeholder="Domain" v-model="form.Domain" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="NCBI_Superkingdom">
          NCBI_Superkingdom
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="NCBI_Superkingdom" placeholder="NCBI_Superkingdom" v-model="form.NCBI_Superkingdom" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 font-medium mb-1" for="HMP_Isolation_Body_Site">
          HMP_Isolation_Body_Site
        </label>
        <input type="text"
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          id="HMP_Isolation_Body_Site" placeholder="HMP_Isolation_Body_Site" v-model="form.HMP_Isolation_Body_Site" />
      </div>
      <div class="mb-4">
        <button @click="showModal = true" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md">
          Add Record
        </button>
        <div v-if="itemAdded" class="bg-green-200 text-green-800 px-4 py-2 mt-4 rounded">
          record added successfully!
        </div>
      </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      showModal: false,
      form: {
        _id: null,
        HMP_ID: null,
        GOLD_ID: null,
        Organism_Name: "",
        Domain: "",
        NCBI_Superkingdom: "",
        HMP_Isolation_Body_Site: "",
      },
      itemAdded: false,
    };
  },
  methods: {
    async addForm() {
      await axios
        .post("http://localhost:8000/human_info/create_one/", this.form)
        .then((res) => {
          //Perform Success Action
          console.log(res.data);
          console.log("success");
          this.form = {
            _id: "",
            HMP_ID: "",
            GOLD_ID: "",
            Organism_Name: "",
            Domain: "",
            NCBI_Superkingdom: "",
            HMP_Isolation_Body_Site: "",
          };

          // Close the modal
          this.showModal = false;
          // Show the item added message
          this.itemAdded = true;

          // Clear the message after 2 seconds
          setTimeout(() => {
            this.$router.push({
              name: "ShowRecords",
            });
          }, 2000);
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
