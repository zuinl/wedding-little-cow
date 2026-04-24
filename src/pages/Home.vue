<script setup lang="ts">
import Cabecalho from "@/components/Cabecalho.vue";
import CabecalhoEvento from "@/components/CabecalhoEvento.vue";
import Rodape from "@/components/Rodape.vue";
import SaudacaoEvento from "@/components/SaudacaoEvento.vue";
import ObjetivoPublico from "@/components/ObjetivoPublico.vue";
import objetivosPublicos from "@/mocks/objetivos.json";
import evento from "@/mocks/evento.json";
import { type IconeObjetivo } from "@/types/objetivo";

type a = keyof typeof IconeObjetivo;
</script>

<template>
  <div
    class="min-h-screen bg-[#fff8f3] text-[#393125] font-sans selection:bg-[#fcc3ce] selection:text-[#643c45]"
  >
    <Cabecalho origin="home" />

    <main class="pt-24">
      <CabecalhoEvento
        v-bind="evento"
      />

      <SaudacaoEvento
        v-bind="evento"
      />

      <section class="px-8 py-24 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ObjetivoPublico
            v-for="item in objetivosPublicos"
            :key="item.id"
            v-bind="item"
            :icone="`${item.icone as a}`"
          />
        </div>
      </section>
    </main>

    <Rodape v-bind="evento" />
  </div>
</template>
