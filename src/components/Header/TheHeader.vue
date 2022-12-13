<template>
  <header class="header">
    <a href="" class="header__link">
      <img src="src/assets/img/logo.png" alt="logo" class="header__logo" />
      <span class="header__brand">Bankist</span>
    </a>
    <HeaderLogin
      v-if="!isConnect"
      @checkInputLogin="emit('checkInputLogin', $event)"
    />
    <HeaderNavigation v-if="isConnect" @logout="emit('logout')" />
  </header>
</template>

<script setup lang="ts">
import HeaderLogin from "./HeaderLogin.vue";
import HeaderNavigation from "./HeaderNavigation.vue";
defineProps<{
  isConnect: boolean;
}>();
const emit = defineEmits<{
  (
    e: "checkInputLogin",
    allInputs: { username: string; password: string }
  ): void;
  (e: "logout"): void;
}>();
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: var(--backgroundColor-2);

  &__link {
    display: flex;
    align-items: center;
  }

  &__brand {
    font-size: 2.5rem;
    margin-left: 2rem;
  }

  &__logo {
    width: 6rem;
    height: 6rem;
  }
}
</style>
