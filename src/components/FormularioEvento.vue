<script setup lang="ts">
import type { Evento } from "@/types/evento";
import Input from "./Input.vue";
import { ref } from "vue";
import Button from "./Button.vue";

const props = defineProps<{ evento: Evento }>();

const eventoForm = ref(props.evento);

const atualizaEventoForm = (
  campo: keyof Evento,
  e: InputEvent,
  value: string,
) => {
  //@ts-expect-error `campo` garante acesso à chave válida
  eventoForm.value[campo] = value;
};

const salvar = () => {
  alert("salvo");
};
</script>

<template>
  <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
     <h2 class="text-2xl font-serif text-[#7f535c] mb-6">Dados do Evento</h2>

    <form class="space-y-6" @submit.prevent="salvar()">
      <!-- Nome Noivo 1 -->
      <Input
        name="nomeNoivo1"
        id="nomeNoivo1"
        label="Nome do Noivo 1"
        :value="eventoForm.nomeNoivo1"
        @update="
          (value, event) => atualizaEventoForm('nomeNoivo1', event, value)
        "
      />

      <!-- Nome Noivo 2 -->
      <Input
        name="nomeNoivo2"
        id="nomeNoivo2"
        label="Nome do Noivo 2"
        :value="eventoForm.nomeNoivo2"
        @update="
          (value, event) => atualizaEventoForm('nomeNoivo2', event, value)
        "
      />

      <!-- Data do Evento -->
      <Input
        name="dataEvento"
        id="dataEvento"
        label="Data do Evento"
        type="date"
        :value="eventoForm.dataEvento"
        @update="
          (value, event) => atualizaEventoForm('dataEvento', event, value)
        "
      />

      <!-- Local do Evento -->
      <Input
        name="localEvento"
        id="localEvento"
        label="Local do Evento"
        :value="eventoForm.localEvento"
        @update="
          (value, event) => atualizaEventoForm('localEvento', event, value)
        "
      />

      <!-- Mensagem de Saudação -->
      <div>
        <label
          for="saudacao"
          class="block text-sm font-medium text-[#685e4f] mb-2"
        >
          Mensagem de Saudação
        </label>
        <textarea
          id="saudacao"
          :value="eventoForm.saudacao"
          @input="
            atualizaEventoForm(
              'saudacao',
              $event,
              ($event.target as HTMLTextAreaElement).value,
            )
          "
          rows="5"
          class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent resize-none"
        ></textarea>
      </div>

      <!-- Botão de Salvar -->
      <Button texto="Salvar" type="submit" />
    </form>
  </div>
</template>
