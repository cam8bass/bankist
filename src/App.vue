<template>
  <div class="container">
    <TheHeader
      class="header"
      @checkInputLogin="updateInputLogin"
      :isConnect="state.connected"
      @logout="logout"
    />
    <TheMain
      v-if="state.connected"
      :accounts="state.currentAccount"
      class="main"
      @loan="requestLoan"
      @requestTransfert="requestTrasfert"
    />
    <TheFooter class="footer" />
  </div>
</template>
<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheMain from "./components/Main/TheMain.vue";
import { computed, reactive } from "vue";
import {
  DEFAULT_ACCOUNT,
  type AccountsInterface,
  type CurrentAccount,
} from "./interfaces";
import accountsData from "./data/data";

const state = reactive<{
  allAccounts: AccountsInterface[];
  currentAccount: CurrentAccount;
  connected: boolean;
}>({
  allAccounts: accountsData,
  currentAccount: { ...DEFAULT_ACCOUNT },
  connected: false,
});

function requestLoan(amount: number): void {
  state.currentAccount.movements.push(["Pret bancaire", amount]);
  state.currentAccount.movementsDates.push(new Date().toISOString());
}

function requestTrasfert(allInputs: {
  recipient: string;
  amount: number;
}): void {
  if (allInputs.amount && allInputs.recipient) {
    const accountRecipient = state.allAccounts.find((account) => {
      return (
        account.firstname.toLocaleLowerCase() ===
          allInputs.recipient.toLocaleLowerCase() ||
        account.lastname.toLocaleLowerCase() ===
          allInputs.recipient.toLocaleLowerCase() ||
        account.username.toLocaleLowerCase() ===
          allInputs.recipient.toLocaleLowerCase()
      );
    });

    if (accountRecipient) {
      if (state.currentAccount.total.totalBalance > allInputs.amount) {
        state.currentAccount.movements.push([
          `Virement à ${allInputs.recipient}`,
          -allInputs.amount,
        ]);
        state.currentAccount.movementsDates.push(new Date().toISOString());

        accountRecipient.movements.push([
          `Virement de ${state.currentAccount.firstname.toLocaleLowerCase()}`,
          allInputs.amount,
        ]);
        accountRecipient.movementsDates.push(new Date().toISOString());
      }
    }
  }
}

function logout(): void {
  if (state.connected) {
    state.connected = false;
    state.currentAccount = { ...DEFAULT_ACCOUNT };
  }
}

const totalBalance = computed<number>(() => {
  return state.currentAccount.movements.reduce((acc, movements) => {
    acc += movements[1];
    return +acc.toFixed(2);
  }, 0);
});

const totalDeposit = computed<number>(() => {
  return state.currentAccount.movements.reduce((acc, movements) => {
    if (movements[1] > 0) {
      acc += movements[1];
      return acc;
    } else {
      return acc;
    }
  }, 0);
});

const totalInterest = computed<number>(() => {
  const interest =
    (totalDeposit.value * state.currentAccount.interestRate) / 100;
  return +interest.toFixed(2);
});

const totalWithdrawal = computed<number>(() => {
  return state.currentAccount.movements.reduce((acc, movements) => {
    if (movements[1] < 0) {
      acc += movements[1];
      return +acc.toFixed(2);
    } else {
      return acc;
    }
  }, 0);
});

function updateInputLogin(allInput: {
  username: string;
  password: string;
}): void {
  const { username, password } = allInput;

  if (username !== undefined && password !== undefined) {
    const account = state.allAccounts.find((accounts) => {
      return (
        accounts.username.toLocaleLowerCase() ===
          username.toLocaleLowerCase() && accounts.pin === +password
      );
    });

    if (account) {
      state.currentAccount = {
        ...account,
        total: {
          totalBalance: totalBalance,
          totalDeposit: totalDeposit,
          totalInterest: totalInterest,
          totalWithdrawal: totalWithdrawal,
        },
      };
      state.connected = true;
    } else {
      state.currentAccount = { ...DEFAULT_ACCOUNT };
      state.connected = false;
    }
  }
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
