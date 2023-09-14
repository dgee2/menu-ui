<template>
  <h1>Create Recipe</h1>
  <EditRecipe v-model:title="recipe.title" @save="save" />
  <code>{{ JSON.stringify(recipe) }}</code>
</template>

<script setup lang="ts">
import EditRecipe from "@/components/EditRecipe.vue";
import { ref } from "vue";

import { NewRecipe,postRecipe } from "@/services/menuApi";

const recipe = ref({
  title: "",
});

async function save(value: NewRecipe) {
  await postRecipe(value)
}
</script>
