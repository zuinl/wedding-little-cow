<script setup lang="ts">
import type { MenuPainelNoivos } from "@/types/menu";
import { Menu, X } from "@lucide/vue";
import { ref } from "vue";

defineProps<{ menuAtivo: MenuPainelNoivos }>();

const emit = defineEmits<{
  selecionarMenu: [menu: MenuPainelNoivos];
}>();

const isOpen = ref(false);

const selecionarMenu = (menu: MenuPainelNoivos) => {
  emit("selecionarMenu", menu);
  isOpen.value = false;
};

const abrirDrawer = () => {
  isOpen.value = true;
};

const fecharDrawer = () => {
  isOpen.value = false;
};
</script>

<template>
  <!-- Botão para abrir drawer -->
  <button
    @click="abrirDrawer"
    class="fixed top-20 left-4 z-40 p-2 hover:bg-[#fef2e4] rounded-lg transition-colors"
    aria-label="Abrir menu"
  >
    <Menu :size="24" class="text-[#7f535c]" />
  </button>

  <!-- Overlay -->
  <div
    v-if="isOpen"
    @click="fecharDrawer"
    class="fixed inset-0 bg-black/30 z-30"
  ></div>

  <!-- Drawer -->
  <div
    :class="[
      'fixed top-0 left-0 h-screen w-64 bg-white border-r border-[#efe0ce] z-40 transition-transform duration-300',
      isOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <!-- Header -->
    <div
      class="flex justify-between items-center p-6 border-b border-[#efe0ce]"
    >
      <h2 class="text-lg font-serif text-[#7f535c]">Menu</h2>
      <button
        @click="fecharDrawer"
        class="p-1 hover:bg-[#fef2e4] rounded transition-colors"
        aria-label="Fechar menu"
      >
        <X :size="20" class="text-[#685e4f]" />
      </button>
    </div>

    <!-- Menu items -->
    <nav class="py-4">
      <button
        @click="selecionarMenu('EVENTO')"
        :class="[
          'w-full text-left px-6 py-3 transition-colors',
          menuAtivo === 'EVENTO'
            ? 'bg-[#fcc3ce] text-[#643c45] font-medium border-l-4 border-[#7f535c]'
            : 'text-[#685e4f] hover:bg-[#fef2e4]',
        ]"
      >
        Evento
      </button>

      <button
        @click="selecionarMenu('NOVO_OBJETIVO')"
        :class="[
          'w-full text-left px-6 py-3 transition-colors',
          menuAtivo === 'NOVO_OBJETIVO'
            ? 'bg-[#fcc3ce] text-[#643c45] font-medium border-l-4 border-[#7f535c]'
            : 'text-[#685e4f] hover:bg-[#fef2e4]',
        ]"
      >
        Novo objetivo
      </button>

      <button
        @click="selecionarMenu('VER_OBJETIVOS')"
        :class="[
          'w-full text-left px-6 py-3 transition-colors',
          menuAtivo === 'VER_OBJETIVOS'
            ? 'bg-[#fcc3ce] text-[#643c45] font-medium border-l-4 border-[#7f535c]'
            : 'text-[#685e4f] hover:bg-[#fef2e4]',
        ]"
      >
        Ver objetivos
      </button>
    </nav>
  </div>
</template>
