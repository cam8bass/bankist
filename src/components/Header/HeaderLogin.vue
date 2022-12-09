<template>
  <form class="login">
    <input type="text" class="login__input" placeholder="User" />
    <input type="text" class="login__input" placeholder="Password" />
    <button class="login__btn">
      <img
        src="src/assets/img/icon-login.png"
        alt="icon login"
        class="login__btn-icon"
      />
    </button>
  </form>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login {
  display: flex;

  &__input {
    margin-right: 2rem;
    width: 10rem;
  }

  &__btn {
    background-color: transparent;

    &-icon {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>
