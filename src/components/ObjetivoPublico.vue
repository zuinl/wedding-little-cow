<script setup lang="ts">
import { ref } from 'vue'
import ModalContribuicao from './ModalContribuicao.vue'

defineProps<{
    id: number,
    titulo: string,
    descricao: string,
    icone: Object,
    objetivo: number,
    atual: number,
}>()

const isModalOpen = ref(false)

const formatarMoeda = (valor: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(valor);
};

const obterLarguraProgresso = (item: any) => {
  return `${(item.atual / item.objetivo) * 100}%`;
};

const abrirModal = () => {
  isModalOpen.value = true
}

const fecharModal = () => {
  isModalOpen.value = false
}
</script>

<template>
    <div class="bg-white rounded-lg p-8 flex flex-col h-full border border-[#efe0ce] hover:bg-[#efe0ce]/10 transition-colors duration-500">
        <div class="w-12 h-12 rounded-full bg-[#fcc3ce] flex items-center justify-center text-[#643c45] mb-6">
            <component :is="icone" :size="20" />
        </div>

        <h4 class="text-2xl font-serif mb-4">{{ titulo }}</h4>
        <p class="text-sm text-[#685e4f] mb-8 flex-1 leading-relaxed">{{ descricao }}</p>

        <div class="space-y-4 mt-auto">
            <div class="flex justify-between items-end mb-1">
                <span class="text-[10px] uppercase tracking-widest font-bold text-[#685e4f]">
                    Progress
                </span>
                <span class="font-serif text-lg text-[#7f535c]">
                    {{ formatarMoeda(atual) }} / {{ formatarMoeda(objetivo) }}
                </span>
            </div>

            <div class="h-1.5 w-full bg-[#f9ecdc] rounded-full overflow-hidden">
                <div class="h-full bg-[#7f535c] transition-all duration-1000 ease-out"
                    :style="{ width: obterLarguraProgresso({ atual, objetivo }) }">
                </div>
            </div>

            <button
                @click="abrirModal"
                class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-4 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all mt-4">
                Contribute
            </button>
        </div>
    </div>

    <ModalContribuicao
        :isOpen="isModalOpen"
        @close="fecharModal"
    />
</template>
