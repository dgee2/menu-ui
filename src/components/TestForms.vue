<template>
  <div>
    <input type="email" v-model="email" />

    <button @click="submit">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const emit = defineEmits<{
  submit: [email: string];
}>();

const submit = () => {
  emit("submit", email.value);
};
</script>
