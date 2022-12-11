<template>
  <main class="content">
    <Balance :accounts="accounts" class="balance" />
    <Movements :accounts="accounts" class="movements" />
    <TheSummary :accounts="accounts" class="summary" />
    <Transfert class="transfert" />
    <Loan class="loan" />
  </main>
</template>

<script setup lang="ts">
import Balance from "./Balance.vue";
import Movements from "./Movements.vue";
import TheSummary from "./Summary.vue";
import Transfert from "./Transfert.vue";
import Loan from "./Loan.vue";
import type { AccountsInterface } from "@/interfaces";
defineProps<{
  accounts: AccountsInterface;
}>();
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-rows: min-content repeat(2, 25rem) min-content;
  grid-template-columns: minmax(max-content, 1fr) minmax(min-content, 0.5fr);
  gap: 2rem;
  grid-template-areas:
    "balance balance"
    "movements transfert "
    "movements loan"
    "summary summary";
  margin: 1rem 4rem;
}

.balance {
  grid-area: balance;
}

.movements {
  grid-area: movements;
}

.transfert {
  grid-area: transfert;
}

.summary {
  grid-area: summary;
}

.loan {
  grid-area: loan;
}
</style>
