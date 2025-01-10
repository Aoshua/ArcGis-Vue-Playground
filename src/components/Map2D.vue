<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { DEFAULT_EXTENT } from '@/assets/constants'
import MapView from '@arcgis/core/views/MapView.js'
import Map from '@arcgis/core/Map.js'

const container = ref<HTMLDivElement>()
const mapView = ref<MapView>()

const init = () => {
	mapView.value = new MapView({
		container: container.value, // Alternatively, use and HTML ID
		map: new Map({
			basemap: 'streets-night-vector',
		}),
		extent: DEFAULT_EXTENT,
	})
}

onMounted(() => {
	// Must init within onMounted to ensure the DOM is ready to attach map to container.
	init()
})
</script>

<template>
	<div ref="container" class="w-full h-full m-0 p-0 relative"></div>
</template>

<style scoped>
@import 'https://js.arcgis.com/4.19/@arcgis/core/assets/esri/themes/dark/main.css';

.fly-down-enter-from,
.fly-down-leave-to {
	transform: translateY(-200%);
}

.fly-down-enter-to,
.fly-down-leave-from {
	transform: translateY();
}
</style>

<style>
/* Remove Esri Canvas Outline */
.esri-view-surface:focus::after {
	outline: none !important;
}
</style>
