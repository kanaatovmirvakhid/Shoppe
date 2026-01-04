<script setup lang="ts">
import { computed, type Component } from 'vue'

type IconName =
  'arrow-down' | 'arrow-left' | 'big-close' | 'burger' | 'checkmark'
  | 'delete-cart-product' | 'facebook' | 'favorite' | 'filters'
  | 'full-star' | 'half-star' | 'input-text-reset' | 'instagram'
  | 'linkedin' | 'profile' | 'search' | 'shopping-cart'
  | 'transparent-star' | 'twitter' | 'view' | 'view-off'

interface Props {
  name: IconName
  isActive?: boolean
}

const props = defineProps<Props>()

const icons = import.meta.glob<{ default: Component }>('@/app/assets/icons/*.svg', {
  eager: true
})

const IconComponent = computed(() => {
  const path = `/src/app/assets/icons/${props.name}.svg`
  const iconModule = icons[path]

  if (!iconModule) {
    console.error(`Иконка не найдена: ${path}`)
    return null
  }

  return iconModule.default || iconModule
})

const iconClass = computed(() => ({
  'text-red-500': props.isActive && props.name === 'favorite',
  'text-green-500': props.isActive && props.name === 'checkmark',
}))
</script>

<template>
  <component
    :is="IconComponent"
    v-if="IconComponent"
    v-bind="$attrs"
    :class="[iconClass, 'w-6 h-6 flex-shrink-0']"
    aria-hidden="true"
  />
</template>

<style scoped>

</style>
