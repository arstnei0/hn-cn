<script lang="ts" setup>
const props = defineProps<{
    stories: any
}>()

const { stories } = props
</script>

<template>
    <div class="stories">
        <div class="story" v-for="story in stories">
            <a class="story-title" :href="story.url" target="_blank">{{story.title}}</a>
        </div>
    </div>
</template>

<style>
.story {
    margin: 4px;
}

.story-title {
    text-decoration: none;
}
</style>