<script setup lang="ts">
import { ref } from 'vue'
import { X } from '@lucide/vue'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits<{
  close: []
}>()

const valor = ref('')

const formatarBRL = (texto: string) => {
  // Remove tudo que não é número
  const numeros = texto.replace(/\D/g, '')
  
  if (!numeros) {
    valor.value = ''
    return
  }
  
  // Converte para número e divide por 100 para obter centavos
  const numero = parseInt(numeros, 10)
  
  // Formata como BRL
  const formatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numero / 100)
  
  valor.value = formatado
}

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  formatarBRL(input.value)
}

const fecharModal = () => {
  valor.value = ''
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg max-w-md w-full p-8 relative">
      <!-- Botão de fechar -->
      <button
        @click="fecharModal"
        class="absolute top-4 right-4 text-[#685e4f] hover:text-[#7f535c] transition-colors"
        aria-label="Fechar modal">
        <X :size="24" />
      </button>

      <h2 class="text-2xl font-serif text-[#7f535c] mb-4">Sua Contribuição</h2>

      <!-- Mensagem descritiva -->
      <p class="text-sm text-[#685e4f] mb-6 leading-relaxed">
        Ao confirmar sua contribuição, o valor será considerado no objetivo e os noivos serão notificados sobre sua generosidade.
      </p>

      <!-- Input de valor -->
      <div class="mb-6">
        <label for="valor" class="block text-sm font-medium text-[#685e4f] mb-2">
          Valor da Contribuição
        </label>
        <input
          id="valor"
          :value="valor"
          @input="handleInput"
          type="text"
          placeholder="R$ 0,00"
          class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent text-lg"
        />
      </div>

      <!-- Botões -->
      <div class="space-y-3">
        <button
          class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-6 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all">
          Confirmar Contribuição
        </button>
        <button
          @click="fecharModal"
          class="w-full bg-white border-2 border-[#7f535c] text-[#7f535c] py-3 px-6 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all hover:bg-[#fef2e4]">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>
