<template>
<component :is="view" />
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string | undefined
}>()
const view = computed(() => {
	switch (props.type) {
		case 'view':
			return resolveComponent('View')
		default:
			return resolveComponent('IbmText')
	}
})
</script>