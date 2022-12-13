<template>
  <nav class="navigation">
    <button @click="emit('logout')" class="btn navigation__btn">
      Deconnecter
    </button>
  </nav>
</template>
<script lang="ts" setup>
const emit = defineEmits<{
  (e: "logout"): void;
}>();
</script>
<style lang="scss">
.navigation {
  &__btn {
    background-color: var(--success-1);
    border-radius: var(--borderRadius-2);
    box-shadow: var(--boxShadow-1);
    transition: background-color 0.2s;
    &:hover,
    &:active {
      background-color: var(--success-2);
    }
  }
}
</style>
