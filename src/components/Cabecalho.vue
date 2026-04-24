<script setup lang="ts">
import { LogIn, LogOut } from "@lucide/vue";
import { useNavigation } from "@/composables/useNavigation";
import { Routes } from "@/types/routes";

type Origin = "home" | "painel";

const { navigateTo } = useNavigation();

defineProps<{ origin: Origin }>();

const handleIconClick = (origin: Origin) => {
  if (origin === "home") {
    navigateTo(Routes.LOGIN);
  } else if (origin === "painel") {
    navigateTo(Routes.HOME);
  }
};
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-[#fff8f3]/70 backdrop-blur-xl">
    <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <span class="text-2xl font-serif italic text-[#7f535c]">Casamento</span>
      <div class="flex items-center gap-4">
        <LogIn
          v-if="origin === 'home'"
          :size="20"
          class="text-[#7f535c] cursor-pointer"
          @click="handleIconClick(origin)"
        />
        <LogOut
          v-else-if="origin === 'painel'"
          :size="20"
          class="text-[#7f535c] cursor-pointer"
          @click="handleIconClick(origin)"
        />
      </div>
    </div>
  </nav>
</template>
