<template>
  <div class="summary">
    <p class="summary__text">
      Dépôt :
      <span class="summary__text-in"
        >{{ props.accounts.total.totalDeposit }}€</span
      >
    </p>
    <p class="summary__text">
      Retrait :
      <span class="summary__text-out"
        >{{ props.accounts.total.totalWithdrawal }}€</span
      >
    </p>
    <p class="summary__interest">
      Frais :
      <span class="summary__interest-number"
        >{{ props.accounts.total.totalInterest }}€</span
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CurrentAccount } from "@/interfaces";

const props = defineProps<{
  accounts: CurrentAccount;
}>();
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
