<script setup lang="ts">
import { Trash2, ChevronDown } from '@lucide/vue'
import { ref } from 'vue'
import type { Contribuicao } from '../types/contribuicao'

defineProps<{
    id: number,
    titulo: string,
    descricao: string,
    icone: Object,
    objetivo: number,
    atual: number,
    contribuicoes?: Contribuicao[],
}>()

const emit = defineEmits<{
    excluir: [id: number]
}>()

const expandido = ref(false)

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

const excluirObjetivo = (id: number) => {
  if (confirm('Tem certeza que deseja excluir este objetivo?')) {
    emit('excluir', id)
  }
}
</script>

<template>
    <div class="bg-white rounded-lg p-8 flex flex-col h-full border border-[#efe0ce] hover:bg-[#efe0ce]/10 transition-colors duration-500 relative">
        <!-- Botão de Excluir -->
        <button
            @click="excluirObjetivo(id)"
            class="absolute top-4 right-4 p-2 text-[#685e4f] hover:text-[#7f535c] hover:bg-[#f9ecdc] rounded-full transition-colors duration-200"
            title="Excluir objetivo"
        >
            <Trash2 :size="20" />
        </button>

        <div class="w-12 h-12 rounded-full bg-[#fcc3ce] flex items-center justify-center text-[#643c45] mb-6">
            <component :is="icone" :size="20" />
        </div>

        <h4 class="text-2xl font-serif mb-4">{{ titulo }}</h4>
        <p class="text-sm text-[#685e4f] mb-8 flex-1 leading-relaxed">{{ descricao }}</p>

        <div class="space-y-4 mt-auto">
            <!-- Accordion de Contribuições -->
            <div v-if="contribuicoes && contribuicoes.length > 0" class="border-t border-[#efe0ce] pt-4">
                <button
                    @click="expandido = !expandido"
                    class="w-full flex items-center justify-between py-3 text-sm font-bold text-[#7f535c] hover:text-[#643c45] transition-colors"
                >
                    <span>{{ contribuicoes.length }} Contribuição(ões)</span>
                    <ChevronDown
                        :size="20"
                        :class="{ 'rotate-180': expandido }"
                        class="transition-transform duration-300"
                    />
                </button>

                <!-- Lista de Contribuições -->
                <div v-if="expandido" class="space-y-3 mt-3 pl-0">
                    <div
                        v-for="contribuicao in contribuicoes"
                        :key="contribuicao.id"
                        class="bg-[#efe0ce]/20 rounded-lg p-4 text-sm border border-[#efe0ce]"
                    >
                        <div class="flex justify-between items-start mb-2">
                            <span class="font-bold text-[#643c45]">{{ contribuicao.remetente }}</span>
                            <span class="font-bold text-[#7f535c]">{{ formatarMoeda(contribuicao.valor) }}</span>
                        </div>
                        <p v-if="contribuicao.mensagem" class="text-[#685e4f] italic text-xs">
                            "{{ contribuicao.mensagem }}"
                        </p>
                    </div>
                </div>
            </div>

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
        </div>
    </div>
</template>
