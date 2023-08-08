<template>
  <VDataTable
    :headers="headers"
    :items="recipes"
    :loading="loading"
  ></VDataTable>
</template>

<script setup lang="ts">
import { Recipe, getRecipes } from "@/services/menuApi";
import { ReadonlyDataTableHeader } from "@/services/vuetifyHelperTypes";
import { onMounted, ref } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";

const loading = ref<boolean>(true);
const recipes = ref<Recipe[]>();

const headers: ReadonlyDataTableHeader[] = [
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
