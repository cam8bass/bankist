<template>
  <div class="transfert">
    <h4 class="transfert__title">Virements</h4>
    <div class="transfert__block">
      <input
        type="text"
        class="transfert__input"
        placeholder="Destinataire"
        :value="inputTransfert.recipient"
        @input="
          inputTransfert.recipient = ($event.target as HTMLInputElement).value
        "
      />
      <input
        type="number"
        class="transfert__input transfert__input-number"
        placeholder="Montant"
        :value="inputTransfert.amount"
        @input="
          inputTransfert.amount = +($event.target as HTMLInputElement).value
        "
      />
      <button
        class="transfert__btn"
        @click="emit('requestTransfert', inputTransfert)"
      >
        <img
          src="src/assets/img/icon-arrowRight.png"
          alt="icon arrow right"
          class="transfert__btn-icon"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const inputTransfert = reactive<{
  recipient: string;
  amount: number;
}>({
  recipient: "",
  amount: 0,
});

const emit = defineEmits<{
  (
    e: "requestTransfert",
    allInput: { recipient: string; amount: number }
  ): void;
}>();
</script>

<style lang="scss" scoped>
.transfert {
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
    margin-right: 2rem;
    width: 100%;
    min-width: 10rem;

    &-number {
      width: 13rem;
    }
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
