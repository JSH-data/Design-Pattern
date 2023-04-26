<template>
    <img :src="iuPicture" alt="아이유">
</template>

<script setup lang="ts">
import useIuPicture from '../compositionApi/useIuPicture'

const { iuPicture } = useIuPicture()
</script>
