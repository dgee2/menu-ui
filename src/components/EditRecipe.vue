<template>
  <v-form v-model="valid" @submit.prevent="save">
    <v-text-field
      :value="title"
      @update:modelValue="(value) => $emit('update:title', value)"
      :rules="recipeRules"
      label="Title"
      required
    />
    <v-btn :loading="loading" type="submit" text="Save"></v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SubmitEventPromise } from "vuetify/lib/framework.mjs";
import { NewRecipe } from "@/services/menuApi";

const valid = ref(true);

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

const emits = defineEmits<{
  "update:title": [value: string];
  save: [value: NewRecipe];
}>();

const props = defineProps<{
  title: string;
  loading?: false;
}>();

async function save(event: SubmitEventPromise) {
  await event;
  emits("save", {
    name: props.title,
    ingredients: []
  });
}
</script>

<style scoped></style>
