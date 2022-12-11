<template>
  <form
    @submit.prevent="emit('checkInputLogin', allInputs)"
    class="login"
    @keypress.enter="emit('checkInputLogin', allInputs)"
  >
    <input
      type="text"
      class="login__input"
      placeholder="User"
      :value="allInputs.username"
      @input="allInputs.username = ($event.target as HTMLInputElement).value"
    />
    <input
      type="text"
      class="login__input"
      placeholder="Password"
      :value="allInputs.password"
      @input="allInputs.password = ($event.target as HTMLInputElement).value"
    />
    <button class="login__btn">
      <img
        src="src/assets/img/icon-login.png"
        alt="icon login"
        class="login__btn-icon"
      />
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const allInputs = reactive<{
  username: string;
  password: string;
}>({
  username: "",
  password: "",
});



const emit = defineEmits<{
  (
    e: "checkInputLogin",
    allInputs: { username: string; password: string }
  ): void;
}>();
</script>

<style lang="scss" scoped>
.login {
  display: flex;

  &__input {
    margin-right: 2rem;
    width: 20rem;
  }

  &__btn {
    background-color: transparent;

    &-icon {
      width: 3rem;
      height: 3rem;
    }
  }
}

.valid {
  border-bottom: 2px solid var(--success-1);
}

.wrong {
  border-bottom: 2px solid var(--danger-1);
}
.select {
  border-bottom: 2px solid blue;
}
</style>
