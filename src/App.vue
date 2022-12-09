<template>
  <div class="container">
    <TheHeader class="header" />
    <TheMain class="main" />
    <TheFooter class="footer" />
  </div>
</template>
<script setup lang="ts">
import TheHeader from "./components/Header/TheHeader.vue";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheMain from "./components/Main/TheMain.vue";
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
