<script setup lang="ts">
import { type Evento } from "@/types/evento";
import { formatarData } from "@/utils/formatarData";

defineProps<
  Pick<
    Evento,
    "dataEvento" | "horaEvento" | "nomeNoivo1" | "nomeNoivo2" | "localEvento"
  >
>();
</script>

<template>
  <section class="px-8 py-16 md:py-32 max-w-7xl mx-auto text-center">
    <h1
      class="text-6xl md:text-9xl font-serif text-[#393125] tracking-tight mb-8"
    >
      {{ nomeNoivo1 }} & {{ nomeNoivo2 }}
    </h1>
    <div
      class="flex flex-col md:row gap-8 justify-center items-center text-[#685e4f]"
    >
      <div class="flex items-center gap-3">
        <Calendar :size="24" class="text-[#7f535c]" />
        <span class="font-serif italic text-2xl">{{
          formatarData(dataEvento)
        }}</span>
      </div>
      <div class="flex items-center gap-3">
        <MapPin :size="24" class="text-[#7f535c]" />
        <span class="font-serif italic text-2xl">{{ localEvento }}</span>
      </div>
    </div>
  </section>
</template>
