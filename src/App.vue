<script setup lang="ts"></script>

<template>
  <div class="app">
    <h2>APP</h2>
    <router-link to="/main">main</router-link>
    <router-link to="/login">login</router-link>
    <router-view />
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
