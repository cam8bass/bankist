<template>
  <div class="loan">
    <h4 class="loan__title">Demande de pret</h4>
    <div class="loan__block">
      <input type="number" class="loan__input" placeholder="Montant" />
      <button class="loan__btn">
        <img
          src="src/assets/img/icon-arrowRight.png"
          alt="icon arrow right"
          class="loan__btn-icon"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loan {
  display: grid;
  grid-template-rows: min-content 1fr;
  box-shadow: var(--boxShadow-1);
  padding: 2rem;
  border-radius: var(--borderRadius-2);
  // background-color: #fff;
  background-color: rgba(#2ecc71,.6);

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
