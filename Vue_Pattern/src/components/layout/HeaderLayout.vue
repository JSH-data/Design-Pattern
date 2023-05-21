<template>
    Header
    <button @click="moveToContainer">Container/Presentational</button>
    <button @click="moveToMediator">Mediator</button>
    <button @click="login">Login</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    methods: {
        moveToContainer() {
            this.$router.push('/container')
        },
        moveToMediator() {
            this.$router.push('/mediator')
        },
        login() {
            this.$router.push('/login')
        }
    }
})
</script>