<script lang="ts" setup>
useHead({
	title: 'Hacker News',
	link: [
		{
			rel: 'icon',
			href: '/logo.png'
		}
	]
})
</script>

<template>
	<Header></Header>
	<main>
		<NuxtPage />
	</main>
</template>

<style>
body {
	margin-left: 20%;
	margin-right: 20%;
}
</style>