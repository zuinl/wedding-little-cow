<script setup lang="ts">
import { LogIn } from "@lucide/vue"
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({
    nomeNoivo1: String,
    nomeNoivo2: String,
})

const irParaLogin = () => {
    router.push('/login')
}
</script>

<template>
    <nav class="fixed top-0 w-full z-50 bg-[#fff8f3]/70 backdrop-blur-xl">
        <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <span class="text-2xl font-serif italic text-[#7f535c]">{{ nomeNoivo1 }} & {{ nomeNoivo2 }}</span>
            <div class="flex items-center gap-4">
                <LogIn :size="20" class="text-[#7f535c] cursor-pointer" @click="irParaLogin" />
            </div>
        </div>
    </nav>
</template>
