<template>
  <div class="container">
    <TheHeader
      class="header"
      @checkInputLogin="checkAllInput"
      :isConnect="state.connected"
      @logout="logout"
    />
    <TheMain
      v-if="state.connected"
      :accounts="state.currentAccount"
      class="main"
    />
    <TheFooter class="footer" />
  </div>
</template>
<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheMain from "./components/Main/TheMain.vue";
import { reactive } from "vue";
import { DEFAULT_ACCOUNT, type AccountsInterface } from "./interfaces";
import accountsData from "./data/data";

const state = reactive<{
  allAccounts: AccountsInterface[];
  currentAccount: AccountsInterface;
  connected: boolean;
}>({
  allAccounts: accountsData,
  currentAccount: { ...DEFAULT_ACCOUNT },
  connected: false,
});

function checkAllInput(allInput: { username: string; password: string }): void {
  const { username, password } = allInput;

  if (username !== undefined && password !== undefined) {
    const account = state.allAccounts.find((account) => {
      return (
        account.username.toLocaleLowerCase() === username.toLocaleLowerCase() &&
        account.pin === +password
      );
    });

    if (account) {
      state.currentAccount = account;
      state.connected = true;
    } else {
      return;
    }
  }
}

function logout(): void {
  state.connected = false;
  state.currentAccount = { ...DEFAULT_ACCOUNT };
}
</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";
.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>
