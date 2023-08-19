<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="recipe.title"
      :rules="recipeRules"
      label="Title"
      required
    />
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const valid = ref(true);

const recipe = ref({
  title: "",
});
const recipeRules = [
  (value: any) => {
    if (value) return true;

    return "Recipe title is required.";
  },
  (value: string | any[]) => {
    if (value?.length <= 10) return true;

    return "Recipe title must be less than 10 characters.";
  },
];
</script>

<style scoped></style>
