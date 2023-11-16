<template>
  <VDataTable
    :headers="headers"
    :items="recipes"
    :loading="loading"
  ></VDataTable>
</template>

<script setup lang="ts">
import { Recipe, getRecipes } from "@/services/menuApi";
import { DataTableHeaders } from "@/services/vuetifyHelperTypes";
import { onMounted, ref } from "vue";

const loading = ref<boolean>(true);
const recipes = ref<Recipe[]>();

const headers: DataTableHeaders = [
  {
    title: "Id",
    align: "end",
    key: "id",
  },
  {
    title: "Name",
    key: "name",
  },
];

onMounted(async () => {
    const response = await getRecipes();
    recipes.value = response.data;
    loading.value = false;
});
</script>
