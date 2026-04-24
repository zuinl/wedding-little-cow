<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

const props = defineProps<{
  type?: ButtonHTMLAttributes['type'];
  texto: string;
}>();
</script>

<template>
  <div class="pt-4">
    <button
      :type="props.type"
      class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all"
    >
      {{ props.texto }}
    </button>
  </div>
</template>
