<template>
  <div class="employee">
    <h1 class="text-center text-3xl my-10 capitalize italic">
      {{ selectValue === "" ? "human_info" : selectValue }}
    </h1>
    <div class="group-btn mb-5 ml-4">
      <router-link
        :to="{
          name: 'AddItem',
        }"
        class="capitalize bg-cyan-500 text-white p-2 mr-4 cursor-pointer rounded-md"
      >
        AddItem
      </router-link>
      <router-link
        :to="{
          name: 'CreateMany',
        }"
        class="capitalize bg-gray-950 text-white p-2 mr-4 cursor-pointer rounded-md"
      >
        create many
      </router-link>
      <router-link
        :to="{
          name: 'DeleteMany',
        }"
        class="capitalize bg-red-500 p-2 text-white mr-10 cursor-pointer rounded-md"
      >
        delete many
      </router-link>
      <el-select
        @change="showData(selectValue)"
        v-model="selectValue"
        clearable
        placeholder="human_info"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="data">
      <show-human-info
        :list="list"
        v-if="selectValue == '' || selectValue == 'human_info'"
      ></show-human-info>
      <show-project-info
        :list="list"
        v-if="selectValue == 'project_info'"
      ></show-project-info>
      <show-disease-info
        :list="list"
        v-if="selectValue == 'disease_info'"
      ></show-disease-info>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import showHumanInfo from "./data/showHuman_info.vue";
import showProjectInfo from "./data/showProject_info.vue";
import showDiseaseInfo from "./data/disease_info.vue";

export default {
  components: { showHumanInfo, showProjectInfo, showDiseaseInfo },
  name: "EmployeeList",

  data() {
    return {
      list: [],
      options: [
        {
          value: "human_info",
          label: "human_info",
        },
        {
          value: "project_info",
          label: "project_info",
        },
        {
          value: "disease_info",
          label: "disease_info",
        },
      ],
      selectValue: "",
    };
  },

  mounted() {
    axios.get("http://localhost:8000/human_info/list/").then((response) => {
      this.list = response.data;
      console.log(response.data);
    });
  },

  methods: {
    showData(value) {
      switch (value) {
        case "human_info":
          axios
            .get("http://localhost:8000/human_info/list/")
            .then((response) => {
              this.list = response.data;
              console.log(response.data);
            });
          break;
        case "project_info":
          axios
            .get("http://localhost:8000/project_info/list/")
            .then((response) => {
              this.list = response.data;
              console.log(response.data);
            });
          break;
        case "disease_info":
          axios
            .get("http://localhost:8000/disease_info/list/")
            .then((response) => {
              this.list = response.data;
              console.log(response.data);
            });
          break;
        default:
          return axios
            .get("http://localhost:8000/human_info/list/")
            .then((response) => {
              this.list = response.data;
              console.log(response.data);
            });
      }
    },
  },
};
</script>
