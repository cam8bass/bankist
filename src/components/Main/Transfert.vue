<template>
  <div class="transfert">
    <h4 class="transfert__title">Virements</h4>
    <div class="transfert__block">
      <input type="text" class="transfert__input" placeholder="Destinataire" />
      <input
        type="number"
        class="transfert__input transfert__input-number"
        placeholder="Montant"
      />
      <button class="transfert__btn">
        <img
          src="src/assets/img/icon-arrowRight.png"
          alt="icon arrow right"
          class="transfert__btn-icon"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.transfert {
  display: grid;
  grid-template-rows: min-content 1fr;
  box-shadow: var(--boxShadow-1);
  padding: 2rem;
  border-radius: var(--borderRadius-2);
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
