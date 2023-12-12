<template>
  <form @submit.prevent="submit">
    <input type="email" v-model="form.email" />
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
