<script setup lang="ts">
import { ref } from 'vue'
import { X } from '@lucide/vue'
import Input from './Input.vue';
import { mascararMoeda } from '@/utils/mascararMoeda';
import type { Contribuicao } from '@/types/contribuicao';

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits<{
  close: []
}>()

const form = ref<Pick<Contribuicao, 'mensagem' | 'remetente'> & { valor: string }>({
  valor: '',
  remetente: '',
  mensagem: ''
})

const handleInput = (campo: keyof typeof form.value, valor: string) => {
  let novoValor = valor

  if(campo === 'valor') novoValor = mascararMoeda(novoValor)

  form.value[campo] = mascararMoeda(novoValor)
}

const fecharModal = () => {
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg max-w-md w-full max-h-9/10 p-8 relative overflow-y-scroll">
      <!-- Botão de fechar -->
      <button @click="fecharModal" class="absolute top-4 right-4 text-[#685e4f] hover:text-[#7f535c] transition-colors"
        aria-label="Fechar modal">
        <X :size="24" />
      </button>

      <h2 class="text-2xl font-serif text-[#7f535c] mb-4">Sua Contribuição</h2>

      <!-- Mensagem descritiva -->
      <p class="text-sm text-[#685e4f] mb-6 leading-relaxed">
        Ao confirmar sua contribuição, o valor será considerado no objetivo e os noivos serão notificados sobre sua
        generosidade.
      </p>

      <div class="space-y-6 mb-6">

      <Input name="remetente" id="remetente" label="Seu Nome" :value="form.remetente"
        @update="handleInput('remetente', $event)" />

        <Input name="valor" id="valor" label="Valor da Contribuição" :value="form.valor"
        @update="handleInput('valor', $event)" />

        <Input name="mensagem" id="mensagem" label="Mensagem para os Noivos" :value="form.mensagem"
        @update="handleInput('mensagem', $event)" />
      </div>

      <!-- Botões -->
      <div class="space-y-3">
        <button
          class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-6 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all">
          Confirmar Contribuição
        </button>
        <button @click="fecharModal"
          class="w-full bg-white border-2 border-[#7f535c] text-[#7f535c] py-3 px-6 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all hover:bg-[#fef2e4]">
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>
