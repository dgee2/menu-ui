<template>
  <button @click="handleClick">Increment</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits<{
  increment: [number];
}>();

const count = ref(0);
const handleClick = () => {
  count.value += 1;
  emit("increment", count.value);
};
</script>
