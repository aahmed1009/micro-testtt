<template>
  <div class="edit flex flex-col max-w-md mx-auto">
    <div class="my-4">
      <h2 class="text-lg text-gray-900 font-semibold">Add Record</h2>
    </div>
    <form v-on:submit.prevent="editForm">
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
        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-8 ml-32   rounded-md">
          Edit
        </button>

      </div>
    </form>
  </div>
</template>




<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        _id: "",
        HMP_ID: "",
        GOLD_ID: "",
        Organism_Name: "",
        Domain: "",
        NCBI_Superkingdom: "",
        HMP_Isolation_Body_Site: "",
      },
      id: this.$route.params.itemID,
    };
  },
  created() {
    axios.get(`http://localhost:8000/human_info/${this.id}`).then((res) => {
      this.form = res.data;
      console.log(res.data);
    });
  },
  methods: {
    editForm() {
      axios
        .patch(
          `http://localhost:8000/human_info/${this.id}/`,
          {
            _id: this.form._id,
            HMP_ID: this.id,
            GOLD_ID: this.form.GOLD_ID,
            Organism_Name: this.form.Organism_Name,
            Domain: this.form.Domain,
            NCBI_Superkingdom: this.form.NCBI_Superkingdom,
            HMP_Isolation_Body_Site: this.form.HMP_Isolation_Body_Site,
          },
          this.form
        )
        .then(
          () => {
            this.$router.push({
              name: "ShowRecords",
            });
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
};
</script>
