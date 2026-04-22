<script setup lang="ts">
import { ref } from 'vue'
import Cabecalho from './components/Cabecalho.vue'
import DrawerNoivos from './components/DrawerNoivos.vue'

const menuAtivo = ref('Evento')
const nomeNoivo1 = ref('Leonardo')
const nomeNoivo2 = ref('Lucas')
const dataEvento = ref('2026-06-10')
const localEvento = ref('Pizza do Conde')
const saudacao = ref('As we embark on this new chapter of our lives together, your presence at our wedding is the greatest gift we could ask for. Should you wish to honor us with a contribution towards our future together, we have curated a selection of experiences and goals that mean the world to us.')

const selecionarMenu = (menu: string) => {
  menuAtivo.value = menu
}
</script>

<template>
  <div class="min-h-screen bg-[#fff8f3] text-[#393125] font-sans">
    <Cabecalho 
      :nome-noivo1="nomeNoivo1" 
      :nome-noivo2="nomeNoivo2"
      tipo="painel"
    />

    <DrawerNoivos
      :menu-ativo="menuAtivo"
      @selecionarMenu="selecionarMenu"
    />

    <main class="pt-32 pb-12">
      <div class="max-w-2xl mx-auto px-8">
        <h1 class="text-4xl font-serif text-center mb-12 text-[#7f535c]">Painel de Administração</h1>

        <!-- Seção Evento -->
        <div v-if="menuAtivo === 'Evento'" class="bg-white rounded-lg p-8 border border-[#efe0ce]">
          <form class="space-y-6">
            <!-- Nome Noivo 1 -->
            <div>
              <label for="nomeNoivo1" class="block text-sm font-medium text-[#685e4f] mb-2">
                Nome do Noivo 1
              </label>
              <input
                id="nomeNoivo1"
                v-model="nomeNoivo1"
                type="text"
                class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
              />
            </div>

            <!-- Nome Noivo 2 -->
            <div>
              <label for="nomeNoivo2" class="block text-sm font-medium text-[#685e4f] mb-2">
                Nome do Noivo 2
              </label>
              <input
                id="nomeNoivo2"
                v-model="nomeNoivo2"
                type="text"
                class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
              />
            </div>

            <!-- Data do Evento -->
            <div>
              <label for="dataEvento" class="block text-sm font-medium text-[#685e4f] mb-2">
                Data do Evento
              </label>
              <input
                id="dataEvento"
                v-model="dataEvento"
                type="date"
                class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
              />
            </div>

            <!-- Local do Evento -->
            <div>
              <label for="localEvento" class="block text-sm font-medium text-[#685e4f] mb-2">
                Local do Evento
              </label>
              <input
                id="localEvento"
                v-model="localEvento"
                type="text"
                class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent"
              />
            </div>

            <!-- Mensagem de Saudação -->
            <div>
              <label for="saudacao" class="block text-sm font-medium text-[#685e4f] mb-2">
                Mensagem de Saudação
              </label>
              <textarea
                id="saudacao"
                v-model="saudacao"
                rows="5"
                class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent resize-none"
              ></textarea>
            </div>

            <!-- Botão de Salvar -->
            <div class="pt-4">
              <button
                type="button"
                class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all">
                Salvar
              </button>
            </div>
          </form>
        </div>

        <!-- Seção Novo objetivo -->
        <div v-else-if="menuAtivo === 'Novo objetivo'" class="bg-white rounded-lg p-8 border border-[#efe0ce]">
          <h2 class="text-2xl font-serif text-[#7f535c] mb-6">Criar Novo Objetivo</h2>
          <p class="text-[#685e4f]">Conteúdo para criar novo objetivo será adicionado aqui.</p>
        </div>

        <!-- Seção Ver objetivos -->
        <div v-else-if="menuAtivo === 'Ver objetivos'" class="bg-white rounded-lg p-8 border border-[#efe0ce]">
          <h2 class="text-2xl font-serif text-[#7f535c] mb-6">Objetivos</h2>
          <p class="text-[#685e4f]">Lista de objetivos será exibida aqui.</p>
        </div>
      </div>
    </main>
  </div>
</template>
