<script setup lang="ts">
import { ref } from 'vue';
import {
  Plane,
  Coffee,
  Home,
  Wine
} from '@lucide/vue';
import Cabecalho from '@/components/Cabecalho.vue';
import CabecalhoEvento from '@/components/CabecalhoEvento.vue';
import Rodape from '@/components/Rodape.vue';
import SaudacaoEvento from '@/components/SaudacaoEvento.vue';
import ObjetivoPublico from '@/components/ObjetivoPublico.vue';

const objetivosPublicos = ref([
  {
    id: 1,
    titulo: 'Honeymoon in Amalfi',
    descricao: 'Help us create memories that will last a lifetime as we explore the breathtaking cliffs and sapphire waters of the Amalfi Coast.',
    icone: Plane,
    objetivo: 5000,
    atual: 3450
  },
  {
    id: 2,
    titulo: 'KitchenAid Espresso',
    descricao: "For the many quiet mornings we'll share as husband and wife. A high-quality addition to our morning routine.",
    icone: Coffee,
    objetivo: 850,
    atual: 0
  },
  {
    id: 3,
    titulo: 'First Home Fund',
    descricao: 'Building our nest, one brick at a time. Help us secure the keys to our future sanctuary and common base.',
    icone: Home,
    objetivo: 100,
    atual: 42
  },
  {
    id: 4,
    titulo: 'The Sommelier Selection',
    descricao: 'Help us build a private cellar of Italian vintages to celebrate our future anniversaries with family and friends.',
    icone: Wine,
    objetivo: 185,
    atual: 120
  }
]);
</script>

<template>
  <div class="min-h-screen bg-[#fff8f3] text-[#393125] font-sans selection:bg-[#fcc3ce] selection:text-[#643c45]">
    <Cabecalho nome-noivo1="Leonardo" nome-noivo2="Lucas" tipo="home" />

    <main class="pt-24">
      <CabecalhoEvento nome-noivo1="Leonardo" nome-noivo2="Lucas" :data-evento="new Date('2026-06-10')"
        local-evento="Pizza do Conde" />

      <SaudacaoEvento 
        nome-noivo1="Leonardo" 
        nome-noivo2="Lucas" 
        saudacao="As we embark on this new chapter of our lives together, your presence at our wedding is the greatest gift we could ask for. Should you wish to honor us with a contribution towards our future together, we have curated a selection of experiences and goals that mean the world to us."
      />

      <section class="px-8 py-24 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ObjetivoPublico
            v-for="item in objetivosPublicos"
            :key="item.id"
            :id="item.id"
            :titulo="item.titulo"
            :descricao="item.descricao"
            :icone="item.icone"
            :objetivo="item.objetivo"
            :atual="item.atual"
          />
        </div>
      </section>
    </main>

    <Rodape />
  </div>
</template>
