<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600;700&display=swap');

:root {
  --font-serif: "Noto Serif", serif;
  --font-sans: "Manrope", sans-serif;
}

.font-serif {
  font-family: var(--font-serif);
}

.font-sans {
  font-family: var(--font-sans);
}
</style>
