<template>
  <div class="balance">
    <h1 class="balance__title">Mon compte</h1>
    <h2 class="balance__subtitle">
      Solde actuel : <span class="balance__value">1200€</span>
    </h2>
    <p class="balance__date">
      Date actuel : <span class="balance__date-time">25/09/2022</span>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.balance {
  padding: 1rem;
  &__title {
    font-size: 3rem;
    font-weight: 300;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--textColor-1);
    margin-bottom: 1rem;
    width: 70%;
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
