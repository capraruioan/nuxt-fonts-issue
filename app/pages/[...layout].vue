<template >
<NuxtPage :type="type" />
</template>

<script setup>
const route = useRoute()

const type = computed(() => route.params.layout?.[0])
</script>