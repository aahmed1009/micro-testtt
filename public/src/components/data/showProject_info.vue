<template>
  <section class="project_info">
    <div class="data-info">
      <table class="">
        <thead class="bg-gray-50">
          <tr>
            <th class="border-b border-gray-200">Human_id</th>
            <th class="border-b border-gray-200">Project_Status</th>
            <th class="border-b border-gray-200">NCBI Current_Finishing_Level</th>
            <th class="border-b border-gray-200">NCBI_Submission_Status</th>
            <th class="border-b border-gray-200">NCBI Project ID</th>
            <th class="border-b border-gray-200">Genbank ID</th>
            <th class="border-b border-gray-200">Gene Count</th>
            <th class="border-b border-gray-200">IMG</th>
            <th class="border-b border-gray-200">HOMD ID</th>
            <th class="border-b border-gray-200">Sequencing Center</th>
            <th class="border-b border-gray-200">Funding Source</th>
            <th class="border-b border-gray-200">Strain Repository ID</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="item in list" class="space-x-10 space-y-10 cursor-pointer" :key="String(item.Human_id)">
            <td class="border-b border-gray-200 ">{{ item.Human_id }}</td>
            <td class="border-b border-gray-200" @click="specificitem(item.Human_id)">
              {{ item.Project_Status }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['NCBI Current_Finishing_Level'] }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.NCBI_Submission_Status }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['NCBI Project ID'] }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['Genbank ID'] }}
            </td>

            <td class="border-b border-gray-200">
              {{ item['Gene Count'] }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.IMG }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['HOMD ID'] }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['Sequencing Center'] }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['Funding Source'] }}
            </td>
            <td class="border-b border-gray-200">
              {{ item['Strain Repository ID'] }}
            </td>
            <td class="border-b border-gray-200">
              <button class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" @click="edititem(item.Human_id)">
                Edit
              </button>
            </td>

            <td class="border-b border-gray-200">
              <button class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" @click="deleteitem(item.Human_id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Model-info">
      <!-- ... -->
      <!-- Modal -->
      <div v-if="selectedItem" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded shadow-md">
          <!-- Modal content -->
          <h2 class="text-xl font-bold mb-4">Specific Item Details</h2>
          <!-- Display specific item details here -->

          <p><strong>Human_id:</strong> {{ selectedItem.Human_id }}</p>
          <p><strong>Project_Status:</strong> {{ selectedItem.Project_Status }}</p>
          <p><strong>NCBI Current_Finishing_Level:</strong> {{ selectedItem['NCBI Current_Finishing_Level'] }}</p>
          <p>
            <strong>NCBI_Superkingdom:</strong>
            {{ selectedItem.NCBI_Submission_Status }}
          </p>
          <p><strong>NCBI Project ID:</strong> {{ selectedItem['NCBI Project ID'] }}</p>
          <p><strong>Genbank ID:</strong> {{ selectedItem['Genbank ID'] }}</p>
          <p><strong>Gene Count:</strong> {{ selectedItem['Gene Count'] }}</p>
          <p><strong>HOMD ID:</strong> {{ selectedItem['HOMD ID'] }}</p>
          <p><strong>Sequencing Center:</strong> {{ selectedItem['Sequencing Center'] }}</p>
          <p><strong>Funding Source:</strong> {{ selectedItem['Funding Source'] }}</p>
          <p><strong>Strain Repository ID:</strong> {{ selectedItem['Strain Repository ID'] }}</p>

          <!-- ... -->
          <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "project_info",
  props: ["list"],
  data() {
    return { selectedItem: false, };
  },
  methods: {
    edititem(id) {
      this.$router
        .push({
          name: "EditItem",
          params: {
            itemID: id,
          },
        })
        .catch(() => { });
    },
    closeModal() {
      this.selectedItem = false;
    },
    async deleteitem(id) {
      await axios
        .delete(`http://localhost:8000/project_info/${id}/`)
        .then((response) => {
          console.log(response);
        });
    },
    async specificitem(id) {
      try {
        const response = await axios.get(
          `http://localhost:8000/project_info/${id}/`
        );
        this.selectedItem = response.data;
        console.log(this.selectedItem);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
