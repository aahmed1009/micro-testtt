<template>
  <section class="disease_info">
    <div class="data-info">
      <table class="">
        <thead class="bg-gray-50">
          <tr>
            <th class="border-b border-gray-200">Human_id</th>
            <th class="border-b border-gray-200">HMP_ID</th>
            <th class="border-b border-gray-200">GOLD_ID</th>
            <th class="border-b border-gray-200">Organism_Name</th>
            <th class="border-b border-gray-200">Domain</th>
            <th class="border-b border-gray-200">NCBI_Superkingdom</th>
            <th class="border-b border-gray-200">HMP_Isolation_Body_Site</th>
            <th class="border-b border-gray-200">Edit</th>
            <th class="border-b border-gray-200">Delete</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr
            v-for="item in list"
            class="space-x-10 space-y-10 cursor-pointer"
            @click="specificitem(item.Human_id)"
            :key="item.Human_id"
          >
            <td class="border-b border-gray-200">{{ item.Human_id }}</td>
            <td class="border-b border-gray-200">
              {{ item.HMP_ID }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.GOLD_ID }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.Organism_Name }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.Domain }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.NCBI_Superkingdom }}
            </td>
            <td class="border-b border-gray-200">
              {{ item.HMP_Isolation_Body_Site }}
            </td>

            <td class="border-b border-gray-200">
              <button
                class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                @click="edititem(item.HMP_ID)"
              >
                Edit
              </button>
            </td>

            <td class="border-b border-gray-200">
              <button
                class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                @click="deleteitem(item.HMP_ID)"
              >
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
  </section>
</template>

<script>
export default {
  name: "disease_info",
};
</script>

<style></style>
