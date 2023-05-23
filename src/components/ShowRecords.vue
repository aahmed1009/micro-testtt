<template>
  <div class="employee">
    <SearchForm @search="searchAll($event)" />
    <h1>list all records</h1>

    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="py-2 px-4 border-b border-gray-200">_id</th>
          <th class="py-2 px-4 border-b border-gray-200">HMP_ID</th>
          <th class="py-2 px-4 border-b border-gray-200">GOLD_ID</th>
          <th class="py-2 px-4 border-b border-gray-200">Organism_Name</th>
          <th class="py-2 px-4 border-b border-gray-200">Domain</th>
          <th class="py-2 px-4 border-b border-gray-200">NCBI_Superkingdom</th>
          <th class="py-2 px-4 border-b border-gray-200">
            HMP_Isolation_Body_Site
          </th>
          <th class="py-2 px-4 border-b border-gray-200"></th>
          <th class="py-2 px-4 border-b border-gray-200"></th>
          <th class="py-2 px-4 border-b border-gray-200"></th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="item in list" :key="String(item._id)">
          <td class="py-2 px-4 border-b border-gray-200">{{ item._id }}</td>
          <td class="py-2 px-4 border-b border-gray-200">{{ item.HMP_ID }}</td>
          <td class="py-2 px-4 border-b border-gray-200">{{ item.GOLD_ID }}</td>
          <td class="py-2 px-4 border-b border-gray-200">
            {{ item.Organism_Name }}
          </td>
          <td class="py-2 px-4 border-b border-gray-200">{{ item.Domain }}</td>
          <td class="py-2 px-4 border-b border-gray-200">
            {{ item.NCBI_Superkingdom }}
          </td>
          <td class="py-2 px-4 border-b border-gray-200">
            {{ item.HMP_Isolation_Body_Site }}
          </td>
          <td class="py-2 px-4 border-b border-gray-200">
            <button
              class="px-2 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
              @click="AddItem(item.HMP_ID)"
            >
              Add Item
            </button>
          </td>
          <td class="py-2 px-4 border-b border-gray-200">
            <button
              class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              @click="edititem(item.HMP_ID)"
            >
              Edit Item
            </button>
          </td>
          <td class="py-2 px-4 border-b border-gray-200">
            <button
              class="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              @click="specificitem(item.HMP_ID)"
            >
              Specific Item
            </button>
          </td>
          <td class="py-2 px-4 border-b border-gray-200">
            <button
              class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              @click="deleteitem(item.HMP_ID)"
            >
              Delete Item
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="employee">
      <!-- ... -->
      <!-- Modal -->
      <div
        v-if="selectedItem"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-4 rounded shadow-md">
          <!-- Modal content -->
          <h2 class="text-xl font-bold mb-4">Specific Item Details</h2>
          <!-- Display specific item details here -->
          <p><strong>Item ID:</strong> {{ selectedItem._id }}</p>
          <p><strong>HMP ID:</strong> {{ selectedItem.HMP_ID }}</p>
          <p><strong>GOLD_ID:</strong> {{ selectedItem.GOLD_ID }}</p>
          <p>
            <strong>Organism_Name :</strong> {{ selectedItem.Organism_Name }}
          </p>
          <p><strong>Domain :</strong> {{ selectedItem.Domain }}</p>
          <p>
            <strong>NCBI_Superkingdom:</strong>
            {{ selectedItem.NCBI_Superkingdom }}
          </p>
          <p>
            <strong>HMP_Isolation_Body_Site:</strong>
            {{ selectedItem.HMP_Isolation_Body_Site }}
          </p>
          <!-- ... -->
          <button
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script>
import axios from "axios";
import SearchForm from "../components/SearchForm.vue";
export default {
  name: "EmployeeList",
  components: {
    SearchForm,
  },
  data() {
    return {
      list: undefined,
      selectedItem: null,
    };
  },
  mounted() {
    axios.get("http://localhost:8000/human_info/list/").then((response) => {
      this.list = response.data;
      console.log(response.data);
    });
  },
  methods: {
    searchAll(value) {
      console.log(value);
      if (
        (value.Domain !== null) &
        (value.sort !== null) &
        (value.NCBI_Superkingdom !== null)
      ) {
        axios
          .get(
            `http://localhost:8000/human_info/aggregation?domain=${value.Domain}&sort_by=${value.sort}&group_by=${value.NCBI_Superkingdom}`
          )
          .then((res) => {
            this.list = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios.get("http://localhost:8000/human_info/list/").then((response) => {
          this.list = response.data;
          console.log(response.data);
        });
      }
    },
    AddItem() {
      this.$router.push("AddItem");
    },
    edititem(id) {
      this.$router
        .push({
          name: "EditItem",
          params: {
            itemID: id,
          },
        })
        .catch(() => {});
    },
    //
    async specificitem(id) {
      try {
        const response = await axios.get(
          `http://localhost:8000/human_info/${id}/`
        );
        this.selectedItem = response.data;
        console.log(this.selectedItem);
      } catch (error) {
        console.error(error);
      }
    },
    closeModal() {
      this.selectedItem = null;
    },
    async deleteitem(id) {
      await axios
        .delete(`http://localhost:8000/human_info/${id}/`)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
