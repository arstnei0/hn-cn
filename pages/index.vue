<script lang="ts" setup>
// new
const newStories = await $fetch('/api/new')
</script>

<template>
    <Stories :stories="newStories"></Stories>
</template>