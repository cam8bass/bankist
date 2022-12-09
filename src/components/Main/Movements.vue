<template>
  <div class="movements">
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
    <div class="movements__block">
      <span class="movements__order">Amazone prime</span>
      <div class="movements__date">23/05/2021</div>
      <div class="movements__value">+200€</div>
    </div>
    <!--  -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.movements {
  overflow: scroll;
  box-shadow: var(--boxShadow-1);
  border-radius: var(--borderRadius-2);
  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  }
}
</style>
