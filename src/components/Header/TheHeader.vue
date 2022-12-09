<template>
  <header class="header">
    <a href="" class="header__link">
      <img src="src/assets/img/logo.png" alt="logo" class="header__logo" />
      <span class="header__brand">Bankist</span>
    </a>
    <HeaderLogin />
  </header>
</template>

<script setup lang="ts">
import HeaderLogin from "./HeaderLogin.vue";
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
