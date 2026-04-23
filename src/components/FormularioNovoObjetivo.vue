<script setup lang="ts">
import { ref } from 'vue'
import { Plane, DollarSign, Car, Home, Bed, Utensils, Shirt, Anchor } from '@lucide/vue'

const ICONES_DISPONIVEIS = [
    { label: 'Avião', icone: Plane },
    { label: 'Dinheiro', icone: DollarSign },
    { label: 'Carro', icone: Car },
    { label: 'Casa', icone: Home },
    { label: 'Cama', icone: Bed },
    { label: 'Cozinha', icone: Utensils },
    { label: 'Roupas', icone: Shirt },
    { label: 'Barco', icone: Anchor },
]

const props = defineProps<{
    titulo?: string,
    descricao?: string,
    objetivo?: number,
    chavePix?: string,
    iconeIndex?: number,
}>()

const emit = defineEmits<{
    'update:titulo': [value: string],
    'update:descricao': [value: string],
    'update:objetivo': [value: number],
    'update:chavePix': [value: string],
    'update:iconeIndex': [value: number],
    salvar: [],
}>()

const titulo = ref(props.titulo || '')
const descricao = ref(props.descricao || '')
const objetivo = ref(props.objetivo || 0)
const chavePix = ref(props.chavePix || '')
const iconeIndex = ref(props.iconeIndex ?? 0)

const formatarValor = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '')
    const numero = parseInt(apenasNumeros) || 0
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
    }).format(numero / 100)
}

const handleObjetivoInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    const apenasNumeros = target.value.replace(/\D/g, '')
    objetivo.value = parseInt(apenasNumeros) || 0
    emit('update:objetivo', objetivo.value)
}
</script>

<template>
    <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
        <h2 class="text-2xl font-serif text-[#7f535c] mb-6">Criar Novo Objetivo</h2>
        
        <form class="space-y-6" @submit.prevent="emit('salvar')">
            <!-- Título -->
            <div>
                <label for="titulo" class="block text-sm font-medium text-[#685e4f] mb-2">
                    Título
                </label>
                <input
                    id="titulo"
                    v-model="titulo"
                    @input="emit('update:titulo', titulo)"
                    type="text"
                    placeholder="Ex: Lua de Mel"
                    class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
                />
            </div>

            <!-- Descrição -->
            <div>
                <label for="descricao" class="block text-sm font-medium text-[#685e4f] mb-2">
                    Descrição
                </label>
                <textarea
                    id="descricao"
                    v-model="descricao"
                    @input="emit('update:descricao', descricao)"
                    rows="4"
                    placeholder="Descreva o objetivo..."
                    class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent resize-none"
                ></textarea>
            </div>

            <!-- Objetivo (Valor em BRL) -->
            <div>
                <label for="objetivo" class="block text-sm font-medium text-[#685e4f] mb-2">
                    Objetivo (BRL)
                </label>
                <div class="relative">
                    <span class="absolute left-4 top-3 text-[#685e4f]">R$</span>
                    <input
                        id="objetivo"
                        :value="objetivo > 0 ? formatarValor(objetivo.toString()) : ''"
                        @input="handleObjetivoInput"
                        type="text"
                        placeholder="0,00"
                        class="w-full pl-10 pr-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
                    />
                </div>
            </div>

            <!-- Chave Pix -->
            <div>
                <label for="chavePix" class="block text-sm font-medium text-[#685e4f] mb-2">
                    Chave Pix
                </label>
                <input
                    id="chavePix"
                    v-model="chavePix"
                    @input="emit('update:chavePix', chavePix)"
                    type="text"
                    placeholder="Digite a chave Pix"
                    class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
                />
                <p class="text-xs text-[#d4745f] mt-2">
                    💡 Recomendamos uso de chave aleatória, pois será disponibilizada publicamente
                </p>
            </div>

            <!-- Seleção de Ícone -->
            <div>
                <label class="block text-sm font-medium text-[#685e4f] mb-3">
                    Ícone
                </label>
                <div class="grid grid-cols-4 gap-3">
                    <button
                        v-for="(item, index) in ICONES_DISPONIVEIS"
                        :key="index"
                        type="button"
                        @click="iconeIndex = index; emit('update:iconeIndex', index)"
                        :class="[
                            'flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all',
                            iconeIndex === index
                                ? 'border-[#7f535c] bg-[#fcc3ce]/20'
                                : 'border-[#efe0ce] hover:border-[#7f535c]/50'
                        ]"
                        :title="item.label"
                    >
                        <component :is="item.icone" :size="24" class="text-[#7f535c] mb-1" />
                        <span class="text-xs text-[#685e4f] text-center">{{ item.label }}</span>
                    </button>
                </div>
            </div>

            <!-- Botão de Salvar -->
            <div class="pt-4">
                <button
                    type="submit"
                    class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all">
                    Criar Objetivo
                </button>
            </div>
        </form>
    </div>
</template>
