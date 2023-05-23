import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddItem from "../components/AddItem.vue";
import SearchForm from "../components/SearchForm.vue";
import EditItem from "../components/EditItem.vue";
import ShowRecords from "../components/ShowRecords.vue";
import CreateMany from "../components/CreateMany.vue";
import DeleteMany from "../components/DeleteMany.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ShowRecords",
    name: "ShowRecords",
    component: ShowRecords,
  },
  {
    path: "/CreateMany",
    name: "CreateMany",
    component: CreateMany,
  },
  {
    path: "/DeleteMany",
    name: "DeleteMany",
    component: DeleteMany,
  },
  {
    path: "/AddItem",
    name: "AddItem",
    component: AddItem,
  },
  {
    path: "/SearchForm",
    name: "SearchForm",
    component: SearchForm,
  },
  {
    path: "/EditItem/:itemID",
    name: "EditItem",
    component: EditItem,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
