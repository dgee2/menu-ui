<template>
  <v-form v-model="valid" @submit.prevent="submit">
    <v-text-field
      v-model="recipe.title"
      :rules="[required('Title'), maxLength(500, 'Title')]"
      label="Title"
      required
    />
    <v-btn :loading="saving" type="submit" text="Submit"></v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { required, maxLength } from "@/services/validationRules";
import { SubmitEventPromise } from "vuetify/lib/framework.mjs";

const valid = ref(true);
const saving = ref(false);

const recipe = ref({
  title: "",
});

const submit = async (event: SubmitEventPromise) => {
  const validationResult = await event;
  if (!validationResult.valid) return;
};
</script>
