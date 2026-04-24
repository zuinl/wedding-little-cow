<script setup lang="ts">
import { ref } from "vue";
import Cabecalho from "@/components/Cabecalho.vue";
import DrawerNoivos from "@/components/DrawerNoivos.vue";
import ObjetivoPrivado from "@/components/ObjetivoPrivado.vue";
import FormularioEvento from "@/components/FormularioEvento.vue";
import FormularioNovoObjetivo from "@/components/FormularioNovoObjetivo.vue";
import { Heart, Plane } from "@lucide/vue";
import type { MenuPainelNoivos } from "@/types/menu";
import evento from "@/mocks/evento.json"

const menuAtivo = ref<MenuPainelNoivos>("EVENTO");

const objetivosPrivados = ref([
  {
    id: 1,
    titulo: "Luna de Mel",
    descricao:
      "Ajude-nos a realizar nosso sonho de uma lua de mel inesquecível em um paraíso tropical.",
    icone: Heart,
    objetivo: 10000,
    atual: 5500,
  },
  {
    id: 2,
    titulo: "Casa Própria",
    descricao:
      "Sua contribuição nos ajudará a dar um passo em direção ao nosso próprio lar.",
    icone: Plane,
    objetivo: 25000,
    atual: 8200,
  },
]);

const selecionarMenu = (menu: MenuPainelNoivos) => {
  menuAtivo.value = menu;
};

const excluirObjetivoPrivado = (id: number) => {
  const index = objetivosPrivados.value.findIndex((obj) => obj.id === id);
  if (index > -1) {
    objetivosPrivados.value.splice(index, 1);
  }
};

const criarNovoObjetivo = () => {
  console.log("Novo objetivo criado");
};
</script>

<template>
  <div class="min-h-screen bg-[#fff8f3] text-[#393125] font-sans">
    <Cabecalho origin="painel" />

    <DrawerNoivos :menu-ativo="menuAtivo" @selecionarMenu="selecionarMenu" />

    <main class="pt-32 pb-12">
      <div class="max-w-3xl mx-auto px-8">
        <!-- Seção Evento -->
        <div v-if="menuAtivo === 'EVENTO'">
          <FormularioEvento
            :evento="evento"
          />
        </div>
        <!-- Seção Novo objetivo -->
        <div
          v-else-if="menuAtivo === 'NOVO_OBJETIVO'"
        >
          <FormularioNovoObjetivo @salvar="criarNovoObjetivo" />
        </div>

        <!-- Seção Ver objetivos -->
        <div v-else-if="menuAtivo === 'VER_OBJETIVOS'" class="space-y-8">
          <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
            <h2 class="text-2xl font-serif text-[#7f535c] mb-8">
              Objetivos Privados
            </h2>
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
