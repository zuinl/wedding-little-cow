<script setup lang="ts">
import { ref } from "vue";
import type { IconeObjetivo, Objetivo } from "@/types/objetivo";
import { ICONES } from "@/constants/icones";
import Input from "./Input.vue";
import Button from "./Button.vue";

const objetivoForm = ref({
  atual: "",
  chavePix: "",
  descricao: "",
  icone: "",
  id: "",
  meta: "",
  titulo: "",
});
const iconeIndex = ref<keyof typeof IconeObjetivo>("CAMA");

const atualizaForm = (campo: keyof Objetivo, e: InputEvent, value: string) => {
  objetivoForm.value[campo] = value;
};

const salvar = () => {
  alert("salvo");
};
</script>

<template>
  <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
    <h2 class="text-2xl font-serif text-[#7f535c] mb-6">Criar Novo Objetivo</h2>

    <form class="space-y-6" @submit.prevent="salvar">
      <!-- Título -->
      <Input
        name="titulo"
        id="titulo"
        label="Título"
        :value="objetivoForm.titulo"
        @update="(value, event) => atualizaForm('titulo', event, value)"
      />

      <!-- Descrição -->
      <div>
        <label
          for="descricao"
          class="block text-sm font-medium text-[#685e4f] mb-2"
        >
          Descrição
        </label>
        <textarea
          id="descricao"
          v-model="objetivoForm.descricao"
          @input="
            atualizaForm(
              'descricao',
              $event,
              ($event.target as HTMLInputElement).value,
            )
          "
          rows="4"
          placeholder="Descreva o objetivo..."
          class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent resize-none"
        ></textarea>
      </div>

      <!-- Objetivo (Valor em BRL) -->
      <Input
        name="meta"
        id="meta"
        label="Objetivo (R$)"
        :value="objetivoForm.meta"
        @update="(value, event) => atualizaForm('meta', event, value)"
      />

      <!-- Chave Pix -->
      <Input
        name="chavePix"
        id="chavePix"
        label="Chave Pix"
        :value="objetivoForm.chavePix"
        @update="(value, event) => atualizaForm('chavePix', event, value)"
        helper-text="💡 Recomendamos uso de chave aleatória, pois será disponibilizada
          publicamente"
      />

      <!-- Seleção de Ícone -->
      <div>
        <label
          for="icone"
          class="block text-sm font-medium text-[#685e4f] mb-3"
        >
          Ícone
        </label>
        <div class="grid grid-cols-4 gap-3">
          <button
            v-for="(item, index) in ICONES"
            :key="index"
            type="button"
            name="icone"
            @click="iconeIndex = index"
            :class="[
              'flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all',
              iconeIndex === index
                ? 'border-[#7f535c] bg-[#fcc3ce]/20'
                : 'border-[#efe0ce] hover:border-[#7f535c]/50',
            ]"
          >
            <component :is="item" :size="24" class="text-[#7f535c] mb-1" />
          </button>
        </div>
      </div>

      <!-- Botão de Salvar -->
      <Button texto="Criar Objetivo" type="submit" />
    </form>
  </div>
</template>
