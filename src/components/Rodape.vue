<script setup lang="ts">

defineProps({
    nomeNoivo1: String,
    nomeNoivo2: String,
})
</script>

<template>
    <footer class="w-full py-12 mt-24 bg-[#f9ecdc] flex flex-col items-center gap-6 text-center">
      <p class="font-sans text-xs uppercase tracking-widest text-[#393125] opacity-70">
        © {{ new Date().getFullYear() }} {{ nomeNoivo1 }} & {{ nomeNoivo2 }} • MADE WITH LOVE
      </p>
    </footer>
</template>