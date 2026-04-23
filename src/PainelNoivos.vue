<script setup lang="ts">
import { ref } from 'vue'
import Cabecalho from './components/Cabecalho.vue'
import DrawerNoivos from './components/DrawerNoivos.vue'
import ObjetivoPrivado from './components/ObjetivoPrivado.vue'
import FormularioEvento from './components/FormularioEvento.vue'
import FormularioNovoObjetivo from './components/FormularioNovoObjetivo.vue'
import { Heart, Plane } from '@lucide/vue'

const menuAtivo = ref('Evento')
const nomeNoivo1 = ref('Leonardo')
const nomeNoivo2 = ref('Lucas')
const dataEvento = ref('2026-06-10')
const localEvento = ref('Pizza do Conde')
const saudacao = ref('As we embark on this new chapter of our lives together, your presence at our wedding is the greatest gift we could ask for. Should you wish to honor us with a contribution towards our future together, we have curated a selection of experiences and goals that mean the world to us.')

const objetivosPrivados = ref([
  {
    id: 1,
    titulo: 'Luna de Mel',
    descricao: 'Ajude-nos a realizar nosso sonho de uma lua de mel inesquecível em um paraíso tropical.',
    icone: Heart,
    objetivo: 10000,
    atual: 5500,
  },
  {
    id: 2,
    titulo: 'Casa Própria',
    descricao: 'Sua contribuição nos ajudará a dar um passo em direção ao nosso próprio lar.',
    icone: Plane,
    objetivo: 25000,
    atual: 8200,
  },
])

const selecionarMenu = (menu: string) => {
  menuAtivo.value = menu
}

const excluirObjetivoPrivado = (id: number) => {
  const index = objetivosPrivados.value.findIndex(obj => obj.id === id)
  if (index > -1) {
    objetivosPrivados.value.splice(index, 1)
  }
}

const salvarEvento = () => {
  console.log('Evento salvo')
}

const criarNovoObjetivo = () => {
  console.log('Novo objetivo criado')
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
        <!-- Seção Evento -->
        <div v-if="menuAtivo === 'Evento'">
          <FormularioEvento
            :nome-noivo1="nomeNoivo1"
            :nome-noivo2="nomeNoivo2"
            :data-evento="dataEvento"
            :local-evento="localEvento"
            :saudacao="saudacao"
            @update:nome-noivo1="nomeNoivo1 = $event"
            @update:nome-noivo2="nomeNoivo2 = $event"
            @update:data-evento="dataEvento = $event"
            @update:local-evento="localEvento = $event"
            @update:saudacao="saudacao = $event"
            @salvar="salvarEvento"
          />>
        </div>
        <!-- Seção Novo objetivo -->
        <div v-else-if="menuAtivo === 'Novo objetivo'" class="bg-white rounded-lg p-8 border border-[#efe0ce]">
          <h2 class="text-2xl font-serif text-[#7f535c] mb-6">Criar Novo Objetivo</h2>
          <FormularioNovoObjetivo
            @salvar="criarNovoObjetivo"
          />
        </div>

        <!-- Seção Ver objetivos -->
        <div v-else-if="menuAtivo === 'Ver objetivos'" class="space-y-8">
          <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
            <h2 class="text-2xl font-serif text-[#7f535c] mb-8">Objetivos Privados</h2>
            <div class="grid grid-cols-1 gap-6">
              <ObjetivoPrivado
                v-for="objetivo in objetivosPrivados"
                :key="objetivo.id"
                :id="objetivo.id"
                :titulo="objetivo.titulo"
                :descricao="objetivo.descricao"
                :icone="objetivo.icone"
                :objetivo="objetivo.objetivo"
                :atual="objetivo.atual"
                @excluir="excluirObjetivoPrivado"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
