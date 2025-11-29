<template>
  <i :class="name"></i>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
i {
  font-size: 20px;
}
</style>
