<script setup lang="ts">
import { Sparkles } from "@lucide/vue"

defineProps({
    nomeNoivo1: String,
    nomeNoivo2: String,
    saudacao: String,
})
</script>

<template>
    <section class="bg-[#fef2e4] py-24 px-8">
        <div class="max-w-3xl mx-auto text-center">
            <Sparkles :size="32" class="text-[#7f535c] mb-6 inline-block" />
            <h2 class="text-3xl font-serif italic mb-6">A Note from Us</h2>
            <p class="text-lg leading-relaxed text-[#685e4f] font-light italic">
                "{{ saudacao }}"
            </p>
            <div class="mt-8 flex justify-center gap-4 text-[#7f535c]">
                <span class="font-serif text-xl">— {{ nomeNoivo1 }} & {{ nomeNoivo2 }}</span>
            </div>
        </div>
    </section>
</template>
