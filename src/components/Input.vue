<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";

const props = defineProps<{
  name: string;
  id: string;
  value: string;
  type?: InputHTMLAttributes["type"];
  label?: string;
  helperText?: string;
}>();

const emit = defineEmits<{
  update: [value: string, event: InputEvent];
}>();
</script>

<template>
  <div>
    <label
      v-if="props.label"
      :for="props.name"
      class="block text-sm font-medium text-[#685e4f] mb-2"
    >
      {{ props.label }}
    </label>
    <input
      :id="props.id"
      :value="props.value"
      @input="emit('update', ($event.target as HTMLInputElement).value, $event)"
      :type="props.type"
      class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
    />
    <p v-if="helperText" class="text-xs text-[#d4745f] mt-2">
      {{ helperText }}
    </p>
  </div>
</template>
