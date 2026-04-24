<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const senha = ref('')

const voltar = () => {
  router.push('/')
}

const entrar = () => {
  router.push('/painel-noivos')
}
</script>

<template>
  <div class="min-h-screen bg-[#fff8f3] text-[#393125] font-sans flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
        <h1 class="text-3xl font-serif text-center mb-8 text-[#7f535c]">Área dos Noivos</h1>
        
        <div class="space-y-6">
          <div>
            <label for="senha" class="block text-sm font-medium text-[#685e4f] mb-2">
              Palavra passe
            </label>
            <input
              id="senha"
              v-model="senha"
              type="password"
              class="w-full px-4 py-2 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
            />
          </div>

          <button
            @click="entrar"
            class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all">
            Entrar
          </button>

          <button
            @click="voltar"
            class="w-full bg-white border-2 border-[#7f535c] text-[#7f535c] py-3 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all hover:bg-[#fef2e4]">
            Voltar para a lista
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
