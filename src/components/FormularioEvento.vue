<script setup lang="ts">
defineProps<{
    nomeNoivo1: string,
    nomeNoivo2: string,
    dataEvento: string,
    localEvento: string,
    saudacao: string,
}>()

const emit = defineEmits<{
    'update:nomeNoivo1': [value: string],
    'update:nomeNoivo2': [value: string],
    'update:dataEvento': [value: string],
    'update:localEvento': [value: string],
    'update:saudacao': [value: string],
    salvar: [],
}>()
</script>

<template>
    <div class="bg-white rounded-lg p-8 border border-[#efe0ce]">
        <form class="space-y-6" @submit.prevent="emit('salvar')">
            <!-- Nome Noivo 1 -->
            <div>
                <label for="nomeNoivo1" class="block text-sm font-medium text-[#685e4f] mb-2">
                    Nome do Noivo 1
                </label>
                <input
                    id="nomeNoivo1"
                    :value="nomeNoivo1"
                    @input="emit('update:nomeNoivo1', ($event.target as HTMLInputElement).value)"
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
                    :value="nomeNoivo2"
                    @input="emit('update:nomeNoivo2', ($event.target as HTMLInputElement).value)"
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
                    :value="dataEvento"
                    @input="emit('update:dataEvento', ($event.target as HTMLInputElement).value)"
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
                    :value="localEvento"
                    @input="emit('update:localEvento', ($event.target as HTMLInputElement).value)"
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
                    :value="saudacao"
                    @input="emit('update:saudacao', ($event.target as HTMLTextAreaElement).value)"
                    rows="5"
                    class="w-full px-4 py-3 border border-[#efe0ce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f535c] focus:border-transparent resize-none"
                ></textarea>
            </div>

            <!-- Botão de Salvar -->
            <div class="pt-4">
                <button
                    type="submit"
                    class="w-full bg-gradient-to-br from-[#7f535c] to-[#714750] text-[#fff7f7] py-3 px-8 rounded-full font-medium tracking-wide text-center active:scale-95 transition-all">
                    Salvar
                </button>
            </div>
        </form>
    </div>
</template>
