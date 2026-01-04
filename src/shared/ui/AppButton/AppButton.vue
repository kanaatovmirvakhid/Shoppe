<script setup lang="ts">
const { type = 'normal' } = defineProps<{
  type?: 'normal' | 'black'
  }>()
</script>

<template>
  <button class="app-button" :class="`app-button--${type === 'normal' ? 'normal' : 'black'}`">
    <slot />
  </button>
</template>

<style scoped>
.app-button{
  border: 1px solid var(--light-colors-black---light);
  border-radius: 4px;
  text-align: center;
  font-family: var(--first-family-bold);
  transition: var(--transition-default);
  padding: 8px 103px;
  font-size: 12px;
  line-height: 100%;
};
.app-button--normal{
  background-color: var(--light-colors-white---light);
  color: var(--light-colors-black---light);
}
.app-button--normal:hover{
  background-color: var(--light-colors-black---light);
  color: var(--light-colors-white---light);
}
.app-button--normal:focus{
  background-color: var(--light-colors-black---light);
  color: var(--light-colors-white---light);
}
.app-button--black{
  background-color: var(--light-colors-black---light);
  color: var(--light-colors-white---light);
}
.app-button--black:hover{
  background-color: var(--light-colors-white---light);
  color: var(--light-colors-black---light);
}
.app-button--black:focus{
  background-color: var(--light-colors-white---light);
  color: var(--light-colors-black---light);
}
</style>
