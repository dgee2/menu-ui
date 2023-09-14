<template>
  <v-form v-model="valid" @submit.prevent="save">
    <v-text-field
      :value="title"
      @update:modelValue="(value) => $emit('update:title', value)"
      :rules="[required('Title'), maxLength(500, 'Title')]"
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
import { required, maxLength } from "@/services/validationRules";

const valid = ref(true);
const saving = ref(false);

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
  const validationResult = await event;
  if (!validationResult.valid) return;
  emits("save", {
    name: props.title,
    ingredients: []
  });
}
</script>
