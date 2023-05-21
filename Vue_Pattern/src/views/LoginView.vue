<template>
    <div>
        <button @click="login">로그인</button>
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/stores/auth'
const {login, logout} = useAuth()

</script>