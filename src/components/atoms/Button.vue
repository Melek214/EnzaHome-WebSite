<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  background-color: black;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  opacity: 0.8;
}
</style>
