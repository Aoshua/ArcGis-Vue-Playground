<script setup lang="ts">
import { ref } from 'vue'

const CONTAINER_ID = 'mapContainer'
const container = ref<HTMLDivElement>()
</script>

<template>
	<div :id="CONTAINER_ID" ref="container" class="w-full"></div>
</template>

<style scoped></style>
