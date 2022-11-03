<script lang="ts" setup>
import { getNewStories } from '~~/api/clientStory';

// new
const newStories = await getNewStories(30, 0)
</script>

<template>
    <Stories :stories="newStories"></Stories>
</template>