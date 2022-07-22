<script setup lang="ts">
const props = defineProps({ test: Boolean });
</script>
<template>
    <hello-world msg="hi" />
    <world-hello msg="hi" :bar="2" />
    <world-hello :bar="1" />
</template>
