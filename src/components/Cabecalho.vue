<script setup lang="ts">
import { LogIn, LogOut } from "@lucide/vue"
import { useRouter } from "vue-router"

const router = useRouter()

defineProps({
    nomeNoivo1: String,
    nomeNoivo2: String,
    tipo: {
        type: String,
        default: 'home'
    }
})

const irParaLogin = () => {
    router.push('/login')
}

const irParaSair = () => {
    router.push('/')
}

const handleIconClick = (tipo: string) => {
    if (tipo === 'home') {
        irParaLogin()
    } else if (tipo === 'painel') {
        irParaSair()
    }
}
</script>

<template>
    <nav class="fixed top-0 w-full z-50 bg-[#fff8f3]/70 backdrop-blur-xl">
        <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
            <span class="text-2xl font-serif italic text-[#7f535c]">{{ nomeNoivo1 }} & {{ nomeNoivo2 }}</span>
            <div class="flex items-center gap-4">
                <LogIn v-if="tipo === 'home'" :size="20" class="text-[#7f535c] cursor-pointer" @click="handleIconClick(tipo)" />
                <LogOut v-else-if="tipo === 'painel'" :size="20" class="text-[#7f535c] cursor-pointer" @click="handleIconClick(tipo)" />
            </div>
        </div>
    </nav>
</template>
