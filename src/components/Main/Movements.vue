<template>
  <div class="movements">
    <!--  -->
    <div
      class="movements__block"
      v-for="(mouvement, index) in props.accounts.movements"
      :key="mouvement[0]"
    >
      <span class="movements__order">{{ mouvement[0] }}</span>
      <span class="movements__date">{{
        new Date(props.accounts.movementsDates[index]).toLocaleDateString()
      }}</span>
      <div class="movements__value">
        <span
          :style="
            mouvement[1] < 0
              ? { color: 'var(--danger-1)' }
              : { color: 'var(--success-1)' }
          "
          >{{ mouvement[1] }}</span
        >
        €
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccountsInterface } from "@/interfaces";

const props = defineProps<{
  accounts: AccountsInterface;
}>();
</script>

<style lang="scss" scoped>
.movements {
  overflow: scroll;
  box-shadow: var(--boxShadow-1);
  border-radius: var(--borderRadius-2);
  background-color: #fff;
  &__block {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    font-size: 1.8rem;
    padding: 1.5rem;
    &:nth-child(odd) {
      background-color: var(--backgroundColor-2);
    }
  }

  &__order {
  }

  &__date {
  }

  &__value {
    justify-self: end;
  }
}
</style>
