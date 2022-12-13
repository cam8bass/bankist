<template>
  <div class="loan">
    <h4 class="loan__title">Demande de pret</h4>
    <div class="loan__block">
      <input
        type="number"
        class="loan__input"
        placeholder="Montant"
        :value="inputAmount"
        @input="inputAmount = +($event.target as HTMLInputElement).value"
        @keypress.enter="requestLoan"
      />
      <button class="loan__btn" @click="requestLoan">
        <img
          src="src/assets/img/icon-arrowRight.png"
          alt="icon arrow right"
          class="loan__btn-icon"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  totalDeposit: number;
}>();

const emit = defineEmits<{
  (e: "loan", amount: number): void;
}>();

const inputAmount = ref<number>();
function requestLoan(): void {
  if (
    inputAmount.value &&
    inputAmount.value > 0 &&
    props.totalDeposit > inputAmount.value * 0.1
  ) {
    emit("loan", inputAmount.value);
  } else {
    return;
  }
}
</script>

<style lang="scss" scoped>
.loan {
  display: grid;
  grid-template-rows: min-content 1fr;
  box-shadow: var(--boxShadow-1);
  padding: 2rem;
  border-radius: var(--borderRadius-2);
  background-color: rgba(#2ecc71, 0.6);

  &__title {
    font-size: 2rem;
    font-weight: 300;
  }

  &__block {
    display: flex;
    align-items: center;
    justify-self: center;
    align-self: center;
  }

  &__input {
    font-size: 1.8rem;
    margin-right: 2rem;
    width: 100%;
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
