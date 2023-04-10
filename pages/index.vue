<template>
  <div class="display">
    <news-menu />
  </div>
</template>

<script setup lang="ts">
const content = ref('<h2>Hello!!!</h2>');
</script>

<style lang="scss" scoped>
.display {
}

.display__actions {
  width: 250px;
  display: flex;
  justify-content: space-evenly;
}
</style>