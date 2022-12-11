<template>
  <div class="summary">
    <p class="summary__text">
      Dépôt : <span class="summary__text-in">{{ totalDeposit }}€</span>
    </p>
    <p class="summary__text">
      Retrait : <span class="summary__text-out">{{ totalWithdrawal }}€</span>
    </p>
    <p class="summary__interest">
      Frais : <span class="summary__interest-number">{{ totalInterest }}€</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { AccountsInterface } from "@/interfaces";
import { computed } from "vue";

const props = defineProps<{
  accounts: AccountsInterface;
}>();

const totalDeposit = computed<number>(() => {
  return props.accounts.movements.reduce((acc, mov) => {
    if (mov[1] > 0) {
      acc += mov[1];
      return acc;
    } else {
      return acc;
    }
  }, 0);
});

const totalWithdrawal = computed<number>(() => {
  return props.accounts.movements.reduce((acc, mov) => {
    if (mov[1] < 0) {
      acc += mov[1];
      return acc;
    } else {
      return acc;
    }
  }, 0);
});

const totalInterest = computed<number>(() => {
  return (totalDeposit.value * props.accounts.interestRate) / 100;
});
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  border-radius: var(--borderRadius-2);
  box-shadow: var(--boxShadow-1);

  &__text {
    font-size: 1.8rem;
    &-in {
      color: var(--success-1);
    }

    &-out {
      color: var(--danger-1);
    }
  }

  &__interest {
    font-size: 1.8rem;
    &-number {
      color: var(--danger-1);
    }
  }
}
</style>
