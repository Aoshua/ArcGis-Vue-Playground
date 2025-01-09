<script setup lang="ts">
import router from '@/router'

const links = [
	{
		title: 'Example 1',
		description:
			'Just a simple empty map blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
		routeName: 'Example1',
	},
]

const route = (name: string) => {
	router.push({ name })
}
</script>

<template>
	<div class="flex flex-col h-full w-full justify-center">
		<div class="flex gap-4 self-center mt-10 items-center">
			<div
				class="h-24 w-24 aspect-square flex items-center justify-center rounded-lg"
				style="background-color: rgba(235, 235, 235, 0.64)"
			>
				<img alt="ArcGIS logo" src="@/assets/arcgis-logo.png" class="h-24" />
			</div>

			<h1 class="text-7xl">Playground</h1>
		</div>

		<div class="container mx-auto mt-10 space-y-4">
			<div
				v-for="link in links"
				class="flex gap-4 items-center hover:bg-emerald-500/25 hover:text-white p-2 rounded-md transition-colors cursor-pointer"
				@click="route(link.routeName)"
			>
				<div class="space-y-1">
					<div class="bold">{{ link.title }}</div>
					<div>{{ link.description }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less"></style>
