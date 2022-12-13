<template>
  <div class="balance">
    <h1 class="balance__title">Mon compte</h1>
    <span class="balance__welcome"
      >Bienvenue
      {{
        props.accounts.firstname[0].toLocaleUpperCase() +
        props.accounts.firstname.slice(1)
      }}
      {{
        props.accounts.lastname[0].toLocaleUpperCase() +
        props.accounts.lastname.slice(1)
      }}</span
    >
    <h2 class="balance__subtitle">
      Solde actuel :
      <span class="balance__value">{{ accounts.total.totalBalance }}€</span>
    </h2>
    <p class="balance__date">
      Date actuel :
      <span class="balance__date-time">{{ dateNow.toLocaleDateString() }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CurrentAccount } from "@/interfaces";
import { ref } from "vue";

const props = defineProps<{
  accounts: CurrentAccount;
}>();


const dateNow = ref(new Date());
</script>

<style lang="scss" scoped>
.balance {
  padding: 1rem;
  &__title {
    font-size: 3rem;
    font-weight: 300;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--success-1);
    width: 70%;
  }

  &__welcome {
    text-align: end;
    display: block;
    font-size: 1.6rem;
  }

  &__subtitle {
    font-size: 2rem;
    font-weight: 300;
  }

  &__date {
    font-size: 1.6rem;
    &-time {
      font-style: italic;
    }
  }

  &__value {
    font-size: 2.5rem;
  }
}
</style>
