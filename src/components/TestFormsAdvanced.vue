<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />

    <textarea v-model="form.description"></textarea>

    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>

    <input type="checkbox" v-model="form.subscribe" />

    <input type="radio" value="weekly" v-model="form.interval" />
    <input type="radio" value="monthly" v-model="form.interval" />

    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

type FormValues = {
  email: string;
  description: string;
  city: string;
  subscribe: boolean;
  interval: string;
};

const emit = defineEmits<{
  submit: [form: FormValues];
}>();

const form = ref<FormValues>({
  email: "",
  description: "",
  city: "",
  subscribe: false,
  interval: "",
});

const submit = () => {
  emit("submit", form.value);
};
</script>
